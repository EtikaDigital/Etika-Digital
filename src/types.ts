export interface DilemmaChoice {
  id: string;
  text: string;
  isEthical: boolean;
  score: number; // e.g. -50 to +100
  ethicalEvaluation: string;
  legalImpact: string; // UU ITE / UU PDP context
  socialImpact: string;
  recommendation: string;
}

export interface DilemmaScenario {
  id: string;
  category: 'Privasi & Data' | 'Integritas AI' | 'Netiket & Komunikasi' | 'Anti-Cyberbullying' | 'Keamanan Siber';
  title: string;
  context: string;
  character: string;
  avatar: string;
  difficulty: 'Pemula' | 'Menengah' | 'Lanjutan';
  choices: DilemmaChoice[];
}

export interface FootprintItem {
  id: string;
  question: string;
  riskWeight: number; // 5 to 20
  riskDescription: string;
  fixTip: string;
}

export interface RedFlag {
  id: string;
  x: number; // percentage on mockup
  y: number;
  label: string;
  description: string;
}

export interface HoaxCase {
  id: string;
  type: 'phishing_email' | 'fake_whatsapp' | 'hoax_news' | 'apk_scam';
  title: string;
  sender: string;
  date: string;
  previewNote: string;
  content: {
    heading?: string;
    body: string;
    actionText?: string;
    attachmentName?: string;
    attachmentSize?: string;
    sourceUrl?: string;
  };
  redFlags: RedFlag[];
  summaryLesson: string;
}

export interface NetiquetteRule {
  number: number;
  title: string;
  summary: string;
  detailedExplanation: string;
  goodExample: string;
  badExample: string;
  category: 'Karakter' | 'Teknis' | 'Sosial';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  legalBasis?: string;
}

export interface UserPledge {
  fullName: string;
  role: string;
  date: string;
  commitments: string[];
}
