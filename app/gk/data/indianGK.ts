export type GKQuestion = {
  question: string;
  options: string[];
  answer: string;
};

export type GKTopic = {
  title: string;
  description: string;
  facts: string[];
  questions: GKQuestion[];
};

export const indianGKTopics: GKTopic[] = [
  {
    title: "India at a Glance",
    description:
      "Important basic facts about India, its identity, geography and national symbols.",
    facts: [
      "Capital: New Delhi",
      "Currency: Indian Rupee (₹)",
      "National animal: Bengal Tiger",
      "National bird: Indian Peacock",
      "National flower: Lotus",
      "National tree: Banyan",
      "National aquatic animal: Ganges River Dolphin",
      "National fruit: Mango",
    ],
    questions: [
      {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: "New Delhi",
      },
      {
        question: "What is the currency of India?",
        options: ["Dollar", "Rupee", "Pound", "Yen"],
        answer: "Rupee",
      },
      {
        question: "What is the national animal of India?",
        options: ["Lion", "Elephant", "Bengal Tiger", "Leopard"],
        answer: "Bengal Tiger",
      },
    ],
  },

  {
    title: "States and Union Territories",
    description:
      "Learn important facts about India's states, Union Territories and their geographical features.",
    facts: [
      "India has 28 states.",
      "India has 8 Union Territories.",
      "The largest state by area is Rajasthan.",
      "The smallest state by area is Goa.",
      "The most populous state is Uttar Pradesh.",
    ],
    questions: [
      {
        question: "How many states are there in India?",
        options: ["26", "27", "28", "29"],
        answer: "28",
      },
      {
        question: "How many Union Territories are there in India?",
        options: ["6", "7", "8", "9"],
        answer: "8",
      },
      {
        question: "Which is the largest Indian state by area?",
        options: [
          "Madhya Pradesh",
          "Maharashtra",
          "Rajasthan",
          "Uttar Pradesh",
        ],
        answer: "Rajasthan",
      },
      {
        question: "Which is the smallest Indian state by area?",
        options: ["Goa", "Sikkim", "Tripura", "Manipur"],
        answer: "Goa",
      },
    ],
  },

  {
    title: "National Symbols",
    description:
      "Learn about India's national flag, emblem, anthem, song, motto and other national symbols.",
    facts: [
      "National Flag: Tiranga",
      "National Emblem: Lion Capital of Ashoka",
      "National Anthem: Jana Gana Mana",
      "National Song: Vande Mataram",
      "National Motto: Satyameva Jayate",
    ],
    questions: [
      {
        question: "What is the national anthem of India?",
        options: [
          "Vande Mataram",
          "Jana Gana Mana",
          "Sare Jahan Se Achha",
          "Ae Mere Watan",
        ],
        answer: "Jana Gana Mana",
      },
      {
        question: "What is the national song of India?",
        options: [
          "Jana Gana Mana",
          "Vande Mataram",
          "Maa Tujhe Salaam",
          "Sare Jahan Se Achha",
        ],
        answer: "Vande Mataram",
      },
      {
        question: "What is the national flower of India?",
        options: ["Rose", "Lotus", "Jasmine", "Sunflower"],
        answer: "Lotus",
      },
    ],
  },

  {
    title: "Important Indian Places",
    description:
      "Learn about famous monuments, landmarks and important places across India.",
    facts: [
      "Taj Mahal is located in Agra, Uttar Pradesh.",
      "Gateway of India is located in Mumbai, Maharashtra.",
      "India Gate is located in New Delhi.",
      "Red Fort is located in Delhi.",
      "Charminar is located in Hyderabad, Telangana.",
    ],
    questions: [
      {
        question: "Where is the Taj Mahal located?",
        options: ["Delhi", "Agra", "Jaipur", "Lucknow"],
        answer: "Agra",
      },
      {
        question: "Where is the Gateway of India located?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Mumbai",
      },
      {
        question: "Where is the Charminar located?",
        options: ["Delhi", "Hyderabad", "Mumbai", "Bengaluru"],
        answer: "Hyderabad",
      },
    ],
  },
];

export const indianGKQuestions: GKQuestion[] =
  indianGKTopics.flatMap((topic) => topic.questions);