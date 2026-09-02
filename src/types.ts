export type CategoryId = 
  | 'all'
  | 'tept'
  | 'esquizofrenia'
  | 'narcisismo'
  | 'personalidad'
  | 'animo_bipolar'
  | 'ansiedad_toc'
  | 'somaticos_disociativos'
  | 'casos_clinicos';

export type DifficultyLevel = 'básico' | 'intermedio' | 'avanzado';

export type QuestionType = 'viñeta_clinica' | 'criterio_dsm5' | 'diagnostico_diferencial';

export interface DistractorAnalysis {
  optionId: string;
  optionText: string;
  whyIncorrect: string;
}

export interface QuestionFeedback {
  summary: string;
  detailedRationale: string;
  distractorAnalysis: DistractorAnalysis[];
  dsmCriteriaReference: string;
  clinicalPearl: string;
}

export interface QuestionOption {
  id: string;
  text: string;
  subtext?: string;
}

export interface Question {
  id: string;
  category: CategoryId;
  categoryLabel: string;
  difficulty: DifficultyLevel;
  type: QuestionType;
  title: string;
  clinicalVignette?: string;
  question: string;
  options: QuestionOption[];
  correctOptionId: string;
  feedback: QuestionFeedback;
}

export interface UserAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
  timestamp: number;
}

export type QuizViewMode = 'quiz' | 'results' | 'review_all';

export interface DiagnosticCriterionItem {
  id: string;
  disorderName: string;
  category: string;
  keyFeatures: string[];
  dsm5Criteria: string;
  differentialTips: string[];
}
