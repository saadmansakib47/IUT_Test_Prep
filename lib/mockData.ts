export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  questionText: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
}

export const mockQuestions: Question[] = [
  {
    id: '1',
    questionText: 'Which of the following is the correct formula for kinetic energy?',
    options: [
      { id: 'a', text: 'KE = mv' },
      { id: 'b', text: 'KE = ½mv²' },
      { id: 'c', text: 'KE = mgh' },
      { id: 'd', text: 'KE = ma' },
    ],
    correctAnswer: 'b',
    explanation:
      'Kinetic energy is given by KE = ½mv², where m is mass and v is velocity. This formula is derived from the work-energy theorem.',
  },
  {
    id: '2',
    questionText: "What is Newton's second law of motion?",
    options: [
      { id: 'a', text: 'F = ma' },
      { id: 'b', text: 'E = mc²' },
      { id: 'c', text: 'P = mv' },
      { id: 'd', text: 'W = Fd' },
    ],
    correctAnswer: 'a',
    explanation:
      "Newton's second law states that Force equals mass times acceleration (F = ma). This fundamental law describes the relationship between force, mass, and acceleration.",
  },
  {
    id: '3',
    questionText: 'What is the SI unit of electric current?',
    options: [
      { id: 'a', text: 'Volt' },
      { id: 'b', text: 'Ampere' },
      { id: 'c', text: 'Ohm' },
      { id: 'd', text: 'Watt' },
    ],
    correctAnswer: 'b',
    explanation:
      'The SI unit of electric current is Ampere (A). One ampere is defined as one coulomb of charge passing through a point in one second.',
  },
  {
    id: '4',
    questionText: 'What is the speed of light in vacuum?',
    options: [
      { id: 'a', text: '3 × 10⁸ m/s' },
      { id: 'b', text: '3 × 10⁶ m/s' },
      { id: 'c', text: '3 × 10⁷ m/s' },
      { id: 'd', text: '3 × 10⁹ m/s' },
    ],
    correctAnswer: 'a',
    explanation:
      'The speed of light in vacuum is approximately 3 × 10⁸ meters per second (299,792,458 m/s to be precise). This is a fundamental constant in physics.',
  },
  {
    id: '5',
    questionText: 'Which law states that energy cannot be created or destroyed?',
    options: [
      { id: 'a', text: 'Law of Inertia' },
      { id: 'b', text: 'Law of Conservation of Energy' },
      { id: 'c', text: 'Law of Gravitation' },
      { id: 'd', text: 'Law of Thermodynamics' },
    ],
    correctAnswer: 'b',
    explanation:
      'The Law of Conservation of Energy states that energy cannot be created or destroyed, only transformed from one form to another. The total energy in an isolated system remains constant.',
  },
];
