export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number;
}

export const computerQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Unit",
      "Computer Processing Unit",
    ],
    answer: 0,
  },
  {
    id: 2,
    question: "Which device is used to enter text into a computer?",
    options: [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer",
    ],
    answer: 1,
  },
  {
    id: 3,
    question: "Which memory is temporary?",
    options: [
      "ROM",
      "Hard Disk",
      "RAM",
      "DVD",
    ],
    answer: 2,
  },
  {
    id: 4,
    question: "Which of these is an operating system?",
    options: [
      "Windows",
      "Google",
      "YouTube",
      "Facebook",
    ],
    answer: 0,
  },
  {
    id: 5,
    question: "Which device displays output from a computer?",
    options: [
      "Keyboard",
      "Mouse",
      "Monitor",
      "Scanner",
    ],
    answer: 2,
  },
  {
    id: 6,
    question: "Which one is a storage device?",
    options: [
      "SSD",
      "Keyboard",
      "Monitor",
      "Microphone",
    ],
    answer: 0,
  },
  {
    id: 7,
    question: "What does RAM stand for?",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Run Access Memory",
      "Random Application Memory",
    ],
    answer: 1,
  },
  {
    id: 8,
    question: "Which device is used to move the pointer on the screen?",
    options: [
      "Printer",
      "Mouse",
      "Speaker",
      "Scanner",
    ],
    answer: 1,
  },
  {
    id: 9,
    question: "Which of these is a web browser?",
    options: [
      "Chrome",
      "Windows",
      "Linux",
      "Android",
    ],
    answer: 0,
  },
  {
    id: 10,
    question: "What does WWW stand for?",
    options: [
      "World Wide Web",
      "World Web Window",
      "Wide World Web",
      "Web World Wide",
    ],
    answer: 0,
  },
];

export const physicsQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the SI unit of force?",
    options: [
      "Joule",
      "Newton",
      "Watt",
      "Pascal",
    ],
    answer: 1,
  },
  {
    id: 2,
    question: "What is the SI unit of energy?",
    options: [
      "Newton",
      "Joule",
      "Volt",
      "Ampere",
    ],
    answer: 1,
  },
  {
    id: 3,
    question: "Speed is defined as:",
    options: [
      "Distance × Time",
      "Distance / Time",
      "Time / Distance",
      "Mass × Acceleration",
    ],
    answer: 1,
  },
  {
    id: 4,
    question: "Which force pulls objects toward Earth?",
    options: [
      "Magnetic force",
      "Frictional force",
      "Gravitational force",
      "Electric force",
    ],
    answer: 2,
  },
  {
    id: 5,
    question: "What is the SI unit of power?",
    options: [
      "Watt",
      "Joule",
      "Newton",
      "Ohm",
    ],
    answer: 0,
  },
  {
    id: 6,
    question: "Which instrument measures temperature?",
    options: [
      "Barometer",
      "Thermometer",
      "Ammeter",
      "Voltmeter",
    ],
    answer: 1,
  },
  {
    id: 7,
    question: "Light travels fastest in:",
    options: [
      "Water",
      "Glass",
      "Air",
      "Vacuum",
    ],
    answer: 3,
  },
  {
    id: 8,
    question: "Which unit is used to measure electric current?",
    options: [
      "Volt",
      "Ampere",
      "Ohm",
      "Watt",
    ],
    answer: 1,
  },
  {
    id: 9,
    question: "What is the acceleration due to gravity on Earth approximately?",
    options: [
      "9.8 m/s²",
      "5.6 m/s²",
      "15 m/s²",
      "20 m/s²",
    ],
    answer: 0,
  },
  {
    id: 10,
    question: "Which form of energy is possessed by a moving object?",
    options: [
      "Potential energy",
      "Chemical energy",
      "Kinetic energy",
      "Nuclear energy",
    ],
    answer: 2,
  },
];

export const chemistryQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the chemical formula of water?",
    options: [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl",
    ],
    answer: 1,
  },
  {
    id: 2,
    question: "What is the smallest unit of an element?",
    options: [
      "Molecule",
      "Atom",
      "Cell",
      "Compound",
    ],
    answer: 1,
  },
  {
    id: 3,
    question: "What is the chemical symbol of oxygen?",
    options: [
      "Ox",
      "O",
      "Og",
      "C",
    ],
    answer: 1,
  },
  {
    id: 4,
    question: "Which gas is essential for respiration?",
    options: [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Hydrogen",
    ],
    answer: 1,
  },
  {
    id: 5,
    question: "What is the pH of a neutral solution?",
    options: [
      "0",
      "5",
      "7",
      "14",
    ],
    answer: 2,
  },
  {
    id: 6,
    question: "Which substance is commonly called common salt?",
    options: [
      "NaCl",
      "H₂O",
      "CO₂",
      "HCl",
    ],
    answer: 0,
  },
  {
    id: 7,
    question: "Which gas is released during photosynthesis?",
    options: [
      "Oxygen",
      "Nitrogen",
      "Hydrogen",
      "Helium",
    ],
    answer: 0,
  },
  {
    id: 8,
    question: "Which of these is an acid?",
    options: [
      "NaOH",
      "HCl",
      "NaCl",
      "CaO",
    ],
    answer: 1,
  },
  {
    id: 9,
    question: "Which metal is liquid at room temperature?",
    options: [
      "Iron",
      "Mercury",
      "Copper",
      "Aluminium",
    ],
    answer: 1,
  },
  {
    id: 10,
    question: "The periodic table is used to arrange:",
    options: [
      "Planets",
      "Elements",
      "Animals",
      "Diseases",
    ],
    answer: 1,
  },
];

export const mathematicsQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is 2 + 5 × 3?",
    options: [
      "21",
      "15",
      "17",
      "18",
    ],
    answer: 2,
  },
  {
    id: 2,
    question: "What is 10% of 200?",
    options: [
      "10",
      "20",
      "30",
      "40",
    ],
    answer: 1,
  },
  {
    id: 3,
    question: "What is the square of 12?",
    options: [
      "124",
      "144",
      "132",
      "154",
    ],
    answer: 1,
  },
  {
    id: 4,
    question: "What is the value of 5²?",
    options: [
      "10",
      "15",
      "20",
      "25",
    ],
    answer: 3,
  },
  {
    id: 5,
    question: "What is the perimeter of a square with side 5 cm?",
    options: [
      "10 cm",
      "15 cm",
      "20 cm",
      "25 cm",
    ],
    answer: 2,
  },
  {
    id: 6,
    question: "What is 1/2 + 1/2?",
    options: [
      "0",
      "1",
      "2",
      "1/2",
    ],
    answer: 1,
  },
  {
    id: 7,
    question: "What is the next prime number after 7?",
    options: [
      "8",
      "9",
      "10",
      "11",
    ],
    answer: 3,
  },
  {
    id: 8,
    question: "What is 15 × 4?",
    options: [
      "40",
      "50",
      "60",
      "70",
    ],
    answer: 2,
  },
  {
    id: 9,
    question: "How many degrees are there in a right angle?",
    options: [
      "45°",
      "90°",
      "180°",
      "360°",
    ],
    answer: 1,
  },
  {
    id: 10,
    question: "What is the value of 100 ÷ 10?",
    options: [
      "5",
      "10",
      "20",
      "100",
    ],
    answer: 1,
  },
];

export const sanskritQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which language is known as the language of ancient Indian literature?",
    options: [
      "Sanskrit",
      "English",
      "French",
      "German",
    ],
    answer: 0,
  },
  {
    id: 2,
    question: "How many Vedas are there?",
    options: [
      "2",
      "3",
      "4",
      "5",
    ],
    answer: 2,
  },
  {
    id: 3,
    question: "What is 'संज्ञा' called in English grammar?",
    options: [
      "Verb",
      "Noun",
      "Pronoun",
      "Adjective",
    ],
    answer: 1,
  },
  {
    id: 4,
    question: "What is 'सर्वनाम' called in English?",
    options: [
      "Noun",
      "Verb",
      "Pronoun",
      "Adverb",
    ],
    answer: 2,
  },
  {
    id: 5,
    question: "What is 'क्रिया'?",
    options: [
      "Noun",
      "Verb",
      "Pronoun",
      "Case",
    ],
    answer: 1,
  },
  {
    id: 6,
    question: "How many विभक्तियाँ are traditionally studied in Sanskrit grammar?",
    options: [
      "5",
      "6",
      "7",
      "8",
    ],
    answer: 3,
  },
  {
    id: 7,
    question: "What does 'सन्धि' generally mean?",
    options: [
      "Combination",
      "Separation",
      "Question",
      "Number",
    ],
    answer: 0,
  },
  {
    id: 8,
    question: "What does 'समास' refer to?",
    options: [
      "Compound formation",
      "Pronunciation",
      "Verb tense",
      "Alphabet",
    ],
    answer: 0,
  },
  {
    id: 9,
    question: "How many मुख्य लकार are commonly studied in Sanskrit grammar?",
    options: [
      "5",
      "8",
      "10",
      "12",
    ],
    answer: 2,
  },
  {
    id: 10,
    question: "Which script is commonly used today for writing Sanskrit?",
    options: [
      "Devanagari",
      "Roman",
      "Arabic",
      "Greek",
    ],
    answer: 0,
  },
];

export const gkQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: [
      "Mumbai",
      "New Delhi",
      "Kolkata",
      "Chennai",
    ],
    answer: 1,
  },
  {
    id: 2,
    question: "What is the national animal of India?",
    options: [
      "Lion",
      "Elephant",
      "Bengal Tiger",
      "Leopard",
    ],
    answer: 2,
  },
  {
    id: 3,
    question: "What is the national bird of India?",
    options: [
      "Peacock",
      "Eagle",
      "Parrot",
      "Sparrow",
    ],
    answer: 0,
  },
  {
    id: 4,
    question: "How many states are there in India?",
    options: [
      "26",
      "27",
      "28",
      "29",
    ],
    answer: 2,
  },
  {
    id: 5,
    question: "Which is the largest continent?",
    options: [
      "Africa",
      "Asia",
      "Europe",
      "Australia",
    ],
    answer: 1,
  },
  {
    id: 6,
    question: "Which is the largest ocean?",
    options: [
      "Indian Ocean",
      "Atlantic Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: 2,
  },
  {
    id: 7,
    question: "Who is known as the Father of the Nation in India?",
    options: [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Sardar Patel",
      "Subhas Chandra Bose",
    ],
    answer: 1,
  },
  {
    id: 8,
    question: "Which planet is known as the Red Planet?",
    options: [
      "Earth",
      "Venus",
      "Mars",
      "Jupiter",
    ],
    answer: 2,
  },
  {
    id: 9,
    question: "How many Union Territories are there in India?",
    options: [
      "6",
      "7",
      "8",
      "9",
    ],
    answer: 2,
  },
  {
    id: 10,
    question: "Which is the national flower of India?",
    options: [
      "Rose",
      "Lotus",
      "Sunflower",
      "Jasmine",
    ],
    answer: 1,
  },
];

export const questions = computerQuestions;

export const subjectQuestions: Record<string, QuizQuestion[]> = {
  computer: computerQuestions,
  physics: physicsQuestions,
  chemistry: chemistryQuestions,
  mathematics: mathematicsQuestions,
  sanskrit: sanskritQuestions,
  gk: gkQuestions,
};