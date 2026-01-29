export interface StudyTip {
  icon: string;
  title: string;
  description: string;
  tips: string[];
  category: 'preparation' | 'exam-day' | 'subjects' | 'time-management';
}

export const studyTipsData: StudyTip[] = [
  {
    category: 'preparation',
    icon: '',
    title: 'Create a Study Schedule',
    description: 'Consistency is key to effective preparation',
    tips: [
      'Set aside 3-4 hours daily for focused study',
      'Divide time equally among Physics, Chemistry, Mathematics, and English',
      'Take regular breaks every 45-50 minutes to maintain concentration',
      'Review previously studied topics weekly to reinforce learning',
      'Schedule mock tests at least twice a week to track progress'
    ]
  },
  {
    category: 'preparation',
    icon: '',
    title: 'Understand the Exam Pattern',
    description: 'Know what to expect on test day',
    tips: [
      'Familiarize yourself with the number of questions in each subject',
      'Understand the marking scheme - no negative marking means attempt all questions',
      'Practice with previous year question papers to recognize patterns',
      'Time yourself during practice to build speed and accuracy',
      'Identify frequently asked topics and prioritize them in your study plan'
    ]
  },
  {
    category: 'preparation',
    icon: '',
    title: 'Focus on Conceptual Understanding',
    description: 'Master the fundamentals before moving to complex problems',
    tips: [
      'Don\'t just memorize formulas - understand their derivations and applications',
      'Build strong foundations in basic concepts before tackling advanced problems',
      'Practice explaining concepts to others to test your understanding',
      'Create concept maps to visualize connections between different topics',
      'Use multiple resources (textbooks, videos, notes) to grasp difficult concepts'
    ]
  },
  {
    category: 'subjects',
    icon: '',
    title: 'Physics Preparation Strategy',
    description: 'Build strong problem-solving skills',
    tips: [
      'Master fundamental concepts from Mechanics, Electricity & Magnetism, and Modern Physics',
      'Practice numerical problems daily - at least 15-20 problems per topic',
      'Create a formula sheet for quick revision before exams',
      'Understand units and dimensions - they help verify your answers',
      'Focus on topics like Vectors, Kinematics, Electrostatics, and Circuits',
      'Draw diagrams for every problem to visualize the situation clearly'
    ]
  },
  {
    category: 'subjects',
    icon: '',
    title: 'Chemistry Mastery Tips',
    description: 'Balance theory and numerical problems',
    tips: [
      'For Organic Chemistry: Practice reaction mechanisms and name reactions repeatedly',
      'For Inorganic Chemistry: Create charts for periodic properties and compound properties',
      'For Physical Chemistry: Master numerical problems in Thermodynamics, Equilibrium, and Kinetics',
      'Memorize important chemical equations and their conditions',
      'Use mnemonics and memory tricks for complex information',
      'Relate chemistry concepts to real-life examples for better retention'
    ]
  },
  {
    category: 'subjects',
    icon: '',
    title: 'Mathematics Excellence',
    description: 'Practice makes perfect in mathematics',
    tips: [
      'Solve at least 30-40 problems daily covering different topics',
      'Master Calculus, Algebra, Trigonometry, and Coordinate Geometry thoroughly',
      'Learn shortcut methods and tricks for quick calculations',
      'Practice mental mathematics to improve calculation speed',
      'Review basic formulas and theorems regularly',
      'Attempt previous year questions to understand the difficulty level',
      'Focus on accuracy first, then work on speed'
    ]
  },
  {
    category: 'subjects',
    icon: '',
    title: 'English Proficiency',
    description: 'Strengthen vocabulary and comprehension',
    tips: [
      'Read English newspapers and magazines daily to improve vocabulary',
      'Practice grammar rules with exercises - focus on tenses, voice, and narration',
      'Learn at least 10 new words daily with their usage in sentences',
      'Practice comprehension passages with time limits',
      'Work on sentence correction and error spotting regularly',
      'Read quality English literature to improve language understanding'
    ]
  },
  {
    category: 'time-management',
    icon: '',
    title: 'Effective Time Management',
    description: 'Make the most of your study hours',
    tips: [
      'Use the Pomodoro Technique: 25 minutes focused study, 5 minutes break',
      'Prioritize difficult subjects during your peak concentration hours',
      'Set daily, weekly, and monthly goals to track progress',
      'Avoid multitasking - focus on one subject at a time',
      'Minimize distractions: keep phone away during study sessions',
      'Use a timer during mock tests to simulate real exam pressure'
    ]
  },
  {
    category: 'time-management',
    icon: '',
    title: 'Use Mock Tests Strategically',
    description: 'Tests are learning opportunities',
    tips: [
      'Take at least 2-3 full-length mock tests every week',
      'Analyze each test thoroughly - understand why you got questions wrong',
      'Track your performance using the Analytics Dashboard',
      'Focus on improving weak areas identified by AI Coach Insights',
      'Practice time management by attempting tests within the time limit',
      'Review AI explanations for every question, not just wrong answers'
    ]
  },
  {
    category: 'exam-day',
    icon: '',
    title: 'Exam Day Strategy',
    description: 'Perform your best under pressure',
    tips: [
      'Get 7-8 hours of sleep the night before the exam',
      'Eat a healthy breakfast - avoid heavy or unfamiliar foods',
      'Arrive at the exam center 30 minutes early to avoid last-minute stress',
      'Read all instructions carefully before starting',
      'Attempt questions you find easy first to build confidence',
      'Keep track of time - don\'t spend too long on any single question',
      'Stay calm if you encounter difficult questions - move on and come back later'
    ]
  },
  {
    category: 'exam-day',
    icon: '',
    title: 'Manage Exam Stress',
    description: 'Stay calm and confident',
    tips: [
      'Practice deep breathing exercises when feeling anxious',
      'Take short breaks between study sessions to relax your mind',
      'Maintain a positive attitude - believe in your preparation',
      'Exercise regularly to reduce stress and improve focus',
      'Don\'t compare your preparation with others',
      'Remember: one bad test doesn\'t define your abilities - learn and improve',
      'Talk to mentors, teachers, or peers if feeling overwhelmed'
    ]
  },
  {
    category: 'preparation',
    icon: '',
    title: 'Smart Revision Techniques',
    description: 'Retain more in less time',
    tips: [
      'Use active recall: test yourself instead of just re-reading notes',
      'Apply spaced repetition: review topics at increasing intervals',
      'Create flashcards for formulas, definitions, and key concepts',
      'Teach concepts to study partners or explain to yourself aloud',
      'Make summary notes and mind maps for quick last-minute revision',
      'Focus more on topics you find difficult rather than comfortable areas'
    ]
  }
];

export const studyTipsCategories = [
  { id: 'all', label: 'All Tips' },
  { id: 'preparation', label: 'Preparation' },
  { id: 'subjects', label: 'Subject-Wise' },
  { id: 'time-management', label: 'Time Management' },
  { id: 'exam-day', label: 'Exam Day' }
];
