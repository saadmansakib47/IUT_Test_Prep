// Type definitions for API responses
export interface QuestionBank {
  _id: string;
  title: string;
  type: 'prev_year' | 'practice';
  year?: number;
  subjects: string[];
  totalQuestions: number;
  duration: number;
  createdAt: string;
  updatedAt: string;
}

export interface Question {
  questionId: string;
  stem: string;
  options: string[];
  subject?: string;
}

export interface TestSession {
  testSessionId: string;
  endsAt: string;
  questions: Question[];
}

export interface TestSubmitResponse {
  score: number;
  total: number;
  autoSubmitted: boolean;
}

export interface TestHistoryItem {
  testSessionId: string;
  examName: string;
  score: number;
  total: number;
  timeTakenMinutes: number;
  submittedAt: string;
  status: string;
}

export interface TestHistoryResponse {
  page: number;
  limit: number;
  total: number;
  data: TestHistoryItem[];
}

export interface QuestionDetail {
  questionId: string;
  subject: string;
  stem: string;
  options: string[];
  selectedAnswer: string | null;
  correctAnswer: string;
  isCorrect: boolean | null;
}

export interface TestHistoryDetail {
  examName: string;
  score: number;
  total: number;
  startedAt: string;
  submittedAt: string;
  timeTakenMinutes: number;
  questions: QuestionDetail[];
}
