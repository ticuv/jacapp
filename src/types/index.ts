export type PageId = 'home' | 'terms' | 'privacy' | 'cookies' | 'contact' | 'checklist';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface LegalSection {
  id: string;
  title: string;
  content: string[];
  requiresConfirmation?: boolean;
  confirmationNotes?: string;
}

export interface LegalDocument {
  id: 'terms' | 'privacy' | 'cookies';
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
  confirmationChecklist: {
    item: string;
    details: string;
    status: 'pending' | 'ready';
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'legislatie' | 'versiuni' | 'confidentialitate';
}

export interface MockLawArticle {
  lawId: string;
  lawName: string;
  articleNumber: string;
  title: string;
  sanctionText: string;
  fineRange: string;
  complementarySanction?: string;
  isFavorite?: boolean;
}
