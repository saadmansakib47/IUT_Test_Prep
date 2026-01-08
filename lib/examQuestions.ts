export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; 
  explanation: string;
  subject: string;
}

export interface ExamData {
  testId: string;
  title: string;
  duration: number; 
  questions: Question[];
  totalMarks: number;
}

// Physics Questions (Class 12 Level)
const physicsQuestions: Question[] = [
  {
    id: 1,
    question: "What is the dimensional formula for electric field intensity?",
    options: ["[MLT⁻³A⁻¹]", "[MLT⁻²A⁻¹]", "[ML²T⁻³A⁻¹]", "[MLT⁻²A]"],
    correctAnswer: 0,
    explanation: "Electric field E = F/q. Since Force has dimension [MLT⁻²] and charge [AT], E = [MLT⁻²]/[AT] = [MLT⁻³A⁻¹]",
    subject: "Physics"
  },
  {
    id: 2,
    question: "A particle executes SHM with amplitude 10 cm and time period 4s. The maximum velocity of the particle is:",
    options: ["2.5π cm/s", "5π cm/s", "10π cm/s", "20π cm/s"],
    correctAnswer: 1,
    explanation: "Maximum velocity in SHM, v_max = Aω = A(2π/T) = 10 × (2π/4) = 5π cm/s",
    subject: "Physics"
  },
  {
    id: 3,
    question: "The ratio of magnetic field at the center of a current carrying coil of radius R and at a distance R from its center on its axis is:",
    options: ["1:1", "√2:1", "2√2:1", "1:√2"],
    correctAnswer: 2,
    explanation: "At center: B₁ = μ₀I/2R. On axis at distance R: B₂ = μ₀IR²/2(R²+R²)^(3/2) = μ₀I/4√2R. Ratio B₁/B₂ = 2√2:1",
    subject: "Physics"
  },
  {
    id: 4,
    question: "In photoelectric effect, the slope of the stopping potential vs frequency graph gives:",
    options: ["Work function", "Planck's constant/charge", "Planck's constant", "Threshold frequency"],
    correctAnswer: 1,
    explanation: "From Einstein's equation: eV₀ = hf - φ, so V₀ = (h/e)f - φ/e. The slope is h/e (Planck's constant divided by charge)",
    subject: "Physics"
  },
  {
    id: 5,
    question: "A convex lens of focal length 20 cm is placed coaxially with a convex mirror of radius of curvature 20 cm. The two are kept 15 cm apart. A point object lies 60 cm in front of the lens. The position of the image formed by the combination is:",
    options: ["30 cm from mirror", "50 cm from mirror", "20 cm from mirror", "At infinity"],
    correctAnswer: 0,
    explanation: "First, lens forms image using 1/v - 1/u = 1/f. Then mirror forms final image. After calculation, final image is 30 cm from mirror",
    subject: "Physics"
  }
];

// Chemistry Questions (Class 12 Level)
const chemistryQuestions: Question[] = [
  {
    id: 6,
    question: "Which of the following is the strongest acid?",
    options: ["HClO₄", "HClO₃", "HClO₂", "HClO"],
    correctAnswer: 0,
    explanation: "HClO₄ (Perchloric acid) is the strongest because Cl has the highest oxidation state (+7), making it most electron-withdrawing and stabilizing the conjugate base",
    subject: "Chemistry"
  },
  {
    id: 7,
    question: "The rate of reaction triples when temperature changes from 20°C to 50°C. The activation energy of the reaction is approximately:",
    options: ["28 kJ/mol", "38 kJ/mol", "48 kJ/mol", "58 kJ/mol"],
    correctAnswer: 0,
    explanation: "Using Arrhenius equation: ln(k₂/k₁) = (Ea/R)[1/T₁ - 1/T₂]. With k₂/k₁ = 3, T₁ = 293K, T₂ = 323K, we get Ea ≈ 28 kJ/mol",
    subject: "Chemistry"
  },
  {
    id: 8,
    question: "Which complex will show optical isomerism?",
    options: ["[Cr(NH₃)₆]³⁺", "[Co(en)₃]³⁺", "[Ni(NH₃)₄]²⁺", "[PtCl₄]²⁻"],
    correctAnswer: 1,
    explanation: "[Co(en)₃]³⁺ shows optical isomerism because it's octahedral with three bidentate ligands creating a chiral structure with no plane of symmetry",
    subject: "Chemistry"
  },
  {
    id: 9,
    question: "In the reaction: 2NO₂(g) → N₂O₄(g), if the pressure is doubled, the equilibrium will:",
    options: ["Shift to left", "Shift to right", "Remain unchanged", "Cannot be predicted"],
    correctAnswer: 1,
    explanation: "According to Le Chatelier's principle, increasing pressure shifts equilibrium toward fewer moles of gas. Here 2 moles → 1 mole, so it shifts right",
    subject: "Chemistry"
  },
  {
    id: 10,
    question: "The IUPAC name of CH₃-CH(OH)-CH₂-CHO is:",
    options: ["3-hydroxybutanal", "2-hydroxybutanal", "4-hydroxybutanal", "1-hydroxybutanal"],
    correctAnswer: 0,
    explanation: "Number from aldehyde end (CHO = C1). OH is on C3. Name: 3-hydroxybutanal",
    subject: "Chemistry"
  }
];

// Mathematics Questions (Class 12 Level)
const mathematicsQuestions: Question[] = [
  {
    id: 11,
    question: "If ∫(dx)/(x² + 4x + 5) = A tan⁻¹(x + 2) + C, then A equals:",
    options: ["1", "1/2", "2", "1/4"],
    correctAnswer: 0,
    explanation: "x² + 4x + 5 = (x+2)² + 1. Let u = x+2, then ∫du/(u²+1) = tan⁻¹(u) + C = tan⁻¹(x+2) + C. So A = 1",
    subject: "Mathematics"
  },
  {
    id: 12,
    question: "The area bounded by y = |x - 1| and y = 1 is:",
    options: ["1 sq unit", "2 sq units", "3 sq units", "4 sq units"],
    correctAnswer: 0,
    explanation: "|x-1| = 1 gives x = 0 or x = 2. Area = ∫₀² [1 - |x-1|]dx = 1 sq unit",
    subject: "Mathematics"
  },
  {
    id: 13,
    question: "The differential equation representing the family of curves y² = 2c(x + √c) is:",
    options: ["y² = 2dy/dx(x + dy/dx)", "y³ = 2dy/dx(x + y)", "2y³ = dy/dx(2xy + y²)", "y² = dy/dx(x + y)"],
    correctAnswer: 2,
    explanation: "Differentiate y² = 2c(x + √c) and eliminate c using the original equation to get 2y³ = dy/dx(2xy + y²)",
    subject: "Mathematics"
  },
  {
    id: 14,
    question: "If A and B are events such that P(A) = 0.6, P(B) = 0.3, and P(A∩B) = 0.2, then P(A|B') equals:",
    options: ["4/7", "2/7", "3/7", "5/7"],
    correctAnswer: 0,
    explanation: "P(A∩B') = P(A) - P(A∩B) = 0.6 - 0.2 = 0.4. P(B') = 1 - 0.3 = 0.7. P(A|B') = 0.4/0.7 = 4/7",
    subject: "Mathematics"
  },
  {
    id: 15,
    question: "The number of solutions of tan x + sec x = 2 cos x in [0, 2π] is:",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2,
    explanation: "Converting to sin and cos and simplifying: sin x + 1 = 2 cos² x. This gives 2 solutions in [0, 2π]",
    subject: "Mathematics"
  }
];

// English Questions (Class 12 Level)
const englishQuestions: Question[] = [
  {
    id: 16,
    question: "Choose the correct synonym for 'Ephemeral':",
    options: ["Eternal", "Transient", "Permanent", "Enduring"],
    correctAnswer: 1,
    explanation: "'Ephemeral' means lasting for a very short time, so 'Transient' (temporary, short-lived) is the correct synonym",
    subject: "English"
  },
  {
    id: 17,
    question: "Identify the figure of speech in: 'The classroom was a zoo.'",
    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
    correctAnswer: 1,
    explanation: "This is a metaphor because it directly compares the classroom to a zoo without using 'like' or 'as', implying chaos and disorder",
    subject: "English"
  },
  {
    id: 18,
    question: "Fill in the blank: 'By the time we reach the station, the train _____ already _____.'",
    options: ["will, leave", "would, left", "will have, left", "had, left"],
    correctAnswer: 2,
    explanation: "'Will have left' is future perfect tense, used for an action that will be completed before a specific time in the future",
    subject: "English"
  },
  {
    id: 19,
    question: "Which sentence is grammatically correct?",
    options: ["Neither of the students have submitted their assignments.", "Neither of the students has submitted their assignment.", "Neither of the students has submitted his or her assignment.", "Neither of the students have submitted his assignment."],
    correctAnswer: 2,
    explanation: "'Neither' is singular, so requires 'has'. Since 'students' is plural, use 'his or her' for agreement, not 'their'",
    subject: "English"
  },
  {
    id: 20,
    question: "What does the idiom 'To bell the cat' mean?",
    options: ["To do something dangerous", "To take a difficult task", "To do an impossible task", "To do something risky for common good"],
    correctAnswer: 3,
    explanation: "'To bell the cat' means to undertake a risky or dangerous action for the benefit of others, derived from Aesop's fable",
    subject: "English"
  }
];

// Create exam datasets
export const examDatasets: { [key: string]: ExamData } = {
  // Previous Year Papers
  "2024-2025": {
    testId: "2024-2025",
    title: "IUT Admission Test 2024-2025",
    duration: 7200, // 120 minutes
    totalMarks: 100,
    questions: [
      ...physicsQuestions.slice(0, 3),
      ...chemistryQuestions.slice(0, 3),
      ...mathematicsQuestions.slice(0, 3),
      ...englishQuestions.slice(0, 3),
    ]
  },
  "2023-2024": {
    testId: "2023-2024",
    title: "IUT Admission Test 2023-2024",
    duration: 7200,
    totalMarks: 100,
    questions: [
      ...physicsQuestions.slice(1, 4),
      ...chemistryQuestions.slice(1, 4),
      ...mathematicsQuestions.slice(1, 4),
      ...englishQuestions.slice(1, 4),
    ]
  },
  "2022-2023": {
    testId: "2022-2023",
    title: "IUT Admission Test 2022-2023",
    duration: 7200,
    totalMarks: 100,
    questions: [
      ...physicsQuestions.slice(0, 3),
      ...chemistryQuestions.slice(0, 3),
      ...mathematicsQuestions.slice(0, 3),
      ...englishQuestions.slice(0, 3),
    ]
  },
  "2021-2022": {
    testId: "2021-2022",
    title: "IUT Admission Test 2021-2022",
    duration: 7200,
    totalMarks: 100,
    questions: [
      ...physicsQuestions.slice(2, 5),
      ...chemistryQuestions.slice(2, 5),
      ...mathematicsQuestions.slice(2, 5),
      ...englishQuestions.slice(2, 5),
    ]
  },
  "2020-2021": {
    testId: "2020-2021",
    title: "IUT Admission Test 2020-2021",
    duration: 7200,
    totalMarks: 100,
    questions: [
      ...physicsQuestions.slice(0, 3),
      ...chemistryQuestions.slice(0, 3),
      ...mathematicsQuestions.slice(0, 3),
      ...englishQuestions.slice(0, 3),
    ]
  },
  "2019-2020": {
    testId: "2019-2020",
    title: "IUT Admission Test 2019-2020",
    duration: 7200,
    totalMarks: 100,
    questions: [
      ...physicsQuestions.slice(1, 4),
      ...chemistryQuestions.slice(1, 4),
      ...mathematicsQuestions.slice(1, 4),
      ...englishQuestions.slice(1, 4),
    ]
  },

  // Practice Tests
  "full-practice-1": {
    testId: "full-practice-1",
    title: "Full Practice Test 1",
    duration: 7200,
    totalMarks: 100,
    questions: [
      ...physicsQuestions,
      ...chemistryQuestions,
      ...mathematicsQuestions,
      ...englishQuestions,
    ]
  },
  "full-practice-2": {
    testId: "full-practice-2",
    title: "Full Practice Test 2",
    duration: 7200,
    totalMarks: 100,
    questions: [
      ...physicsQuestions,
      ...chemistryQuestions,
      ...mathematicsQuestions,
      ...englishQuestions,
    ]
  },
  "physics-deep-dive": {
    testId: "physics-deep-dive",
    title: "Physics Deep Dive",
    duration: 3600,
    totalMarks: 50,
    questions: [...physicsQuestions]
  },
  "chemistry-deep-dive": {
    testId: "chemistry-deep-dive",
    title: "Chemistry Deep Dive",
    duration: 3600,
    totalMarks: 50,
    questions: [...chemistryQuestions]
  },
  "mathematics-deep-dive": {
    testId: "mathematics-deep-dive",
    title: "Mathematics Deep Dive",
    duration: 3600,
    totalMarks: 50,
    questions: [...mathematicsQuestions]
  },
  "english-deep-dive": {
    testId: "english-deep-dive",
    title: "English Deep Dive",
    duration: 3600,
    totalMarks: 50,
    questions: [...englishQuestions]
  },
};
