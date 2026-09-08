import { jsPDF } from 'jspdf';
import { HANDBOOK_PAGES } from '../data/handbookData';
import { getPageImage } from './driveImageStorage';

/**
 * Generates the authentic 20-page Handbook PDF directly from Google Drive / uploaded authentic images.
 */
export const generateHandbookPdf = async (onProgress?: (current: number, total: number) => void): Promise<void> => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const total = HANDBOOK_PAGES.length;

  for (let idx = 0; idx < total; idx++) {
    const pageNum = idx + 1;
    if (idx > 0) {
      doc.addPage('a4', 'portrait');
    }

    if (onProgress) {
      onProgress(pageNum, total);
    }

    try {
      // 1. Check stored authentic image from Drive
      const stored = await getPageImage(pageNum);
      let base64Data = stored?.dataUrl;

      if (!base64Data) {
        // Fetch image or fallback
        const imgUrl = `/handbook/page-${pageNum}.png`;
        const response = await fetch(imgUrl);
        if (response.ok) {
          const blob = await response.blob();
          base64Data = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
        }
      }

      if (base64Data) {
        doc.addImage(base64Data, 'PNG', 0, 0, pageWidth, pageHeight, undefined, 'FAST');
      } else {
        throw new Error(`No image available for page ${pageNum}`);
      }
    } catch (err) {
      console.warn(`Fallback for page ${pageNum}:`, err);
      doc.setFillColor(15, 23, 42);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(56, 189, 248);
      doc.text(`Handbook Etika Digital - Halaman ${pageNum}`, pageWidth / 2, pageHeight / 2, { align: 'center' });
    }
  }

  doc.save('Handbook Etika Digital.pdf');
};
