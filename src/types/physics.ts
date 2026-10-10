export type Difficulty = 'Basic' | 'Intermediate' | 'Advanced';

export interface MCQ {
  id: number;
  module: string; // 'A' | 'B' | ... | 'T'
  moduleName: string;
  topic: string;
  question: string;
  options: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  difficulty: Difficulty;
  explanation: string;
  reasonUrdu: string;
  formula?: string;
  textbookRef: string;
}

export interface ModuleInfo {
  code: string;
  name: string;
  topicRange: string;
  startId: number;
  endId: number;
  count: number;
  summary: string;
}

export type QuizMode = 'practice' | 'exam' | 'topic' | 'bookmarks' | 'mistakes';

export interface UserAnswerState {
  selectedOption: number | null;
  isCorrect: boolean;
  timestamp?: number;
  timeTakenSeconds?: number;
}
