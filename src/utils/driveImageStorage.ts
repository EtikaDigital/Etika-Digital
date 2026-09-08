// Utility for managing authentic Google Drive handbook images

const DB_NAME = 'HandbookDriveDB';
const STORE_NAME = 'authentic_images';
const DB_VERSION = 1;

let dbPromise: Promise<IDBDatabase> | null = null;

function getDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'pageNumber' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return dbPromise;
}

export async function savePageImage(pageNumber: number, dataUrl: string, fileName?: string): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put({ pageNumber, dataUrl, fileName, updatedAt: Date.now() });
    tx.oncomplete = () => {
      window.dispatchEvent(new CustomEvent('handbook-images-updated', { detail: { pageNumber } }));
      resolve();
    };
    tx.onerror = () => reject(tx.error);
  });
}

export async function getPageImage(pageNumber: number): Promise<{ dataUrl: string; fileName?: string } | null> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.get(pageNumber);
    req.onsuccess = () => resolve(req.result ? { dataUrl: req.result.dataUrl, fileName: req.result.fileName } : null);
    req.onerror = () => reject(req.error);
  });
}

export async function getAllStoredImages(): Promise<Record<number, string>> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.getAll();
    req.onsuccess = () => {
      const result: Record<number, string> = {};
      (req.result || []).forEach((item: { pageNumber: number; dataUrl: string }) => {
        result[item.pageNumber] = item.dataUrl;
      });
      resolve(result);
    };
    req.onerror = () => reject(req.error);
  });
}

export async function clearStoredImages(): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.clear();
    tx.oncomplete = () => {
      window.dispatchEvent(new CustomEvent('handbook-images-updated'));
      resolve();
    };
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Extracts Google Drive folder or file ID from common Drive URLs
 */
export function parseGoogleDriveUrl(url: string): { type: 'folder' | 'file' | 'unknown'; id: string } | null {
  if (!url) return null;
  const folderMatch = url.match(/folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch && folderMatch[1]) {
    return { type: 'folder', id: folderMatch[1] };
  }
  const fileMatch = url.match(/(?:file\/d\/|id=)([a-zA-Z0-9_-]+)/);
  if (fileMatch && fileMatch[1]) {
    return { type: 'file', id: fileMatch[1] };
  }
  return null;
}

/**
 * Converts a Google Drive File ID into direct high-resolution image URL
 */
export function getGoogleDriveImageUrl(fileId: string): string {
  return `https://lh3.googleusercontent.com/d/${fileId}`;
}
