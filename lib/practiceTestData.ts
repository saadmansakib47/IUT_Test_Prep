export interface PracticeTest {
  id: string;
  name: string;
  title: string;
  questions: number;
  duration: string;
  marks: number;
  subjects: string[];
  primarySubject?: string; // For filtering
}

export const practiceTests: PracticeTest[] = [
  {
    id: 'full-practice-1',
    name: 'Full Practice Test 1',
    title: 'Full Practice Test 1',
    questions: 100,
    duration: '2 hr',
    marks: 100,
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
    primarySubject: 'All',
  },
  {
    id: 'physics-deep-dive',
    name: 'Physics Deep Dive',
    title: 'Physics Deep Dive',
    questions: 100,
    duration: '2 hr',
    marks: 100,
    subjects: ['Physics'],
    primarySubject: 'Physics',
  },
  {
    id: 'chemistry-deep-dive',
    name: 'Chemistry Deep Dive',
    title: 'Chemistry Deep Dive',
    questions: 100,
    duration: '2 hr',
    marks: 100,
    subjects: ['Chemistry'],
    primarySubject: 'Chemistry',
  },
  {
    id: 'full-practice-2',
    name: 'Full Practice Test 2',
    title: 'Full Practice Test 2',
    questions: 100,
    duration: '2 hr',
    marks: 100,
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
    primarySubject: 'All',
  },
  {
    id: 'mathematics-deep-dive',
    name: 'Mathematics Deep Dive',
    title: 'Mathematics Deep Dive',
    questions: 100,
    duration: '2 hr',
    marks: 100,
    subjects: ['Mathematics'],
    primarySubject: 'Mathematics',
  },
  {
    id: 'english-deep-dive',
    name: 'English Deep Dive',
    title: 'English Deep Dive',
    questions: 100,
    duration: '2 hr',
    marks: 100,
    subjects: ['English'],
    primarySubject: 'English',
  },
];

export const subjectOptions = [
  'All Subjects',
  'Physics',
  'Chemistry',
  'Mathematics',
  'English',
];
