// Dummy analytics data - will be replaced with AI-generated analytics
export interface AnalyticsData {
  readinessScore: number;
  accuracy: number;
  avgSpeed: string;
  subjectProficiency: { name: string; score: number }[];
  topicProficiency: { name: string; score: number }[];
  insights: {
    type: 'critical' | 'warning';
    title: string;
    message: string;
  }[];
  examHistory: {
    id: string;
    name: string;
    date: string;
    score: string;
    timeTaken: string;
  }[];
}

export const dummyAnalyticsData: AnalyticsData = {
  readinessScore: 32,
  accuracy: 48,
  avgSpeed: '45s/Ques',
  subjectProficiency: [
    { name: 'Physics', score: 45 },
    { name: 'Chemistry', score: 62 },
    { name: 'Mathematics', score: 70 },
    { name: 'English', score: 88 },
  ],
  topicProficiency: [
    { name: 'Organic Chemistry', score: 45 },
    { name: 'Calculus', score: 62 },
    { name: 'English Comprehension', score: 85 },
    { name: 'Mechanics', score: 88 },
  ],
  insights: [
    {
      type: 'critical',
      title: 'Physics Mechanics',
      message: 'Your Physics Mechanics is weak. You missed 80% of Kinetic Energy Questions',
    },
    {
      type: 'critical',
      title: 'Chemistry Focus',
      message: 'Focus on Organic Chemistry and Calculus. These topics show the lowest accuracy rates in your recent tests',
    },
    {
      type: 'warning',
      title: 'Time Management',
      message: 'Work on problem-solving speed in Mathematics. You\'re accurate but need to improve time management',
    },
  ],
  examHistory: [
    {
      id: '2024-2025',
      name: 'Mock Test 4',
      date: '3 December,2025',
      score: '82/100',
      timeTaken: '1 hr 25 m',
    },
    {
      id: 'physics-deep-dive',
      name: 'Physics Deep Dive 1',
      date: '3 December,2025',
      score: '82/100',
      timeTaken: '1 hr 25 m',
    },
    {
      id: '2023-2024',
      name: 'IUT Admission Test 2023',
      date: '3 December,2025',
      score: '82/100',
      timeTaken: '1 hr 25 m',
    },
    {
      id: 'english-deep-dive',
      name: 'English Deep Dive 1',
      date: '3 December,2025',
      score: '82/100',
      timeTaken: '1 hr 25 m',
    },
    {
      id: '2022-2023',
      name: 'IUT Admission Test 2022',
      date: '3 December,2025',
      score: '82/100',
      timeTaken: '1 hr 25 m',
    },
    {
      id: 'chemistry-deep-dive',
      name: 'Chemistry Deep Dive 1',
      date: '3 December,2025',
      score: '82/100',
      timeTaken: '1 hr 25 m',
    },
    {
      id: 'mathematics-deep-dive',
      name: 'Math Deep Dive 1',
      date: '3 December,2025',
      score: '82/100',
      timeTaken: '1 hr 25 m',
    },
  ],
};
