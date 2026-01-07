export interface MockTest {
  id: string;
  year: string;
  title: string;
  questions: number;
  duration: string;
  marks: number;
  subjects: string[];
}

export const mockTests: MockTest[] = [
  {
    id: '2024-2025',
    year: '2024-2025',
    title: 'IUT Admission Test 2024-2025',
    questions: 100,
    duration: '2 hr',
    marks: 100,
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
  },
  {
    id: '2023-2024',
    year: '2023-2024',
    title: 'IUT Admission Test 2023-2024',
    questions: 100,
    duration: '2 hr',
    marks: 100,
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
  },
  {
    id: '2022-2023',
    year: '2022-2023',
    title: 'IUT Admission Test 2022-2023',
    questions: 100,
    duration: '2 hr',
    marks: 100,
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
  },
  {
    id: '2021-2022',
    year: '2021-2022',
    title: 'IUT Admission Test 2021-2022',
    questions: 100,
    duration: '2 hr',
    marks: 100,
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
  },
  {
    id: '2020-2021',
    year: '2020-2021',
    title: 'IUT Admission Test 2020-2021',
    questions: 100,
    duration: '2 hr',
    marks: 100,
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
  },
  {
    id: '2019-2020',
    year: '2019-2020',
    title: 'IUT Admission Test 2019-2020',
    questions: 100,
    duration: '2 hr',
    marks: 100,
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
  },
];
