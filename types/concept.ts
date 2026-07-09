export type Block = 'JAVA_CORE' | 'JPA_HIBERNATE' | 'SPRING' | 'SPRING_BOOT' | 'CLEAN_CODE_SOLID' | 'TOOLS' | 'APIS';

export interface ConceptQuestion {
  question: string;
  answer: string;
}

export interface SubConcept {
  title: string;
  slug: string;
  orderIndex: number;
  description: string;
  codeExample: string | null;
  questions: ConceptQuestion[];
}

export interface Concept {
  id: number;
  title: string;
  slug: string;
  block: Block;
  orderIndex: number;
  description: string;
  codeExample: string | null;
  questions: ConceptQuestion[];
  subConcepts: SubConcept[];
}

export interface BlockInfo {
  id: Block;
  label: string;
  color: string;
}
