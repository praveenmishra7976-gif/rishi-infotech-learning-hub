export type GKSection = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  topics: string[];
};

export type GKFact = {
  question: string;
  answer: string;
  section: string;
};

export type GKQuestion = {
  question: string;
  options: string[];
  answer: string;
  section: string;
};

export const gkSections: GKSection[] = [
  {
    id: "indian-gk",
    title: "Indian GK",
    description:
      "Important facts about India, states, capitals, national symbols and important places.",
    emoji: "🇮🇳",
    color: "blue",
    topics: [
      "India at a Glance",
      "States and Union Territories",
      "States and Capitals",
      "National Symbols",
      "Important Indian Places",
      "Indian Rivers",
      "Indian Mountains",
      "National Parks",
    ],
  },

  {
    id: "world-gk",
    title: "World GK",
    description:
      "Countries, capitals, currencies, continents, oceans and important world facts.",
    emoji: "🌍",
    color: "cyan",
    topics: [
      "Countries and Capitals",
      "Currencies",
      "Continents",
      "Oceans",
      "World Records",
      "Important International Organizations",
      "World Geography",
    ],
  },

  {
    id: "history",
    title: "History",
    description:
      "Ancient, medieval and modern history with important events and personalities.",
    emoji: "🏛️",
    color: "amber",
    topics: [
      "Ancient India",
      "Indus Valley Civilization",
      "Vedic Period",
      "Maurya Empire",
      "Gupta Empire",
      "Medieval India",
      "Mughal Empire",
      "Modern India",
      "Indian Freedom Movement",
      "Important Historical Events",
    ],
  },

  {
    id: "geography",
    title: "Geography",
    description:
      "Earth, continents, oceans, rivers, mountains, climate and natural resources.",
    emoji: "🌎",
    color: "green",
    topics: [
      "Earth",
      "Continents",
      "Oceans",
      "Mountains",
      "Rivers",
      "Deserts",
      "Climate",
      "Natural Resources",
      "Indian Geography",
      "World Geography",
    ],
  },

  {
    id: "polity",
    title: "Indian Polity",
    description:
      "Indian Constitution, Parliament, President, Prime Minister, courts and government.",
    emoji: "⚖️",
    color: "purple",
    topics: [
      "Indian Constitution",
      "Fundamental Rights",
      "Fundamental Duties",
      "Directive Principles",
      "President",
      "Prime Minister",
      "Parliament",
      "Lok Sabha",
      "Rajya Sabha",
      "Supreme Court",
      "Election Commission",
      "Local Government",
    ],
  },

  {
    id: "science",
    title: "Science GK",
    description:
      "Important science facts from physics, chemistry, biology, space and technology.",
    emoji: "🔬",
    color: "indigo",
    topics: [
      "Physics Facts",
      "Chemistry Facts",
      "Biology Facts",
      "Human Body",
      "Plants",
      "Animals",
      "Space",
      "Planets",
      "Scientific Discoveries",
      "Technology",
    ],
  },

  {
    id: "sports",
    title: "Sports GK",
    description:
      "Sports, tournaments, records, players, awards and important sporting events.",
    emoji: "🏆",
    color: "orange",
    topics: [
      "Cricket",
      "Football",
      "Hockey",
      "Tennis",
      "Badminton",
      "Olympics",
      "Asian Games",
      "Commonwealth Games",
      "Sports Awards",
      "Famous Players",
    ],
  },

  {
    id: "awards",
    title: "Awards & Honours",
    description:
      "Important Indian and international awards, prizes and honours.",
    emoji: "🏅",
    color: "yellow",
    topics: [
      "Bharat Ratna",
      "Padma Awards",
      "Nobel Prize",
      "Booker Prize",
      "Oscar Awards",
      "Grammy Awards",
      "Ramon Magsaysay Award",
      "Sports Awards",
      "Literary Awards",
    ],
  },

  {
    id: "persons",
    title: "Important Persons",
    description:
      "Famous leaders, scientists, writers, artists and other important personalities.",
    emoji: "👨‍🏫",
    color: "pink",
    topics: [
      "Indian Leaders",
      "Freedom Fighters",
      "Scientists",
      "Authors",
      "Artists",
      "Sportspersons",
      "Presidents",
      "Prime Ministers",
      "World Leaders",
    ],
  },

  {
    id: "current-affairs",
    title: "Current Affairs",
    description:
      "Important recent events, national developments and international awareness topics.",
    emoji: "📰",
    color: "red",
    topics: [
      "National News",
      "International News",
      "Government Schemes",
      "Appointments",
      "Awards",
      "Sports News",
      "Science & Technology",
      "Important Days",
      "Economy",
      "Defence",
    ],
  },

  {
    id: "important-days",
    title: "Important Days",
    description:
      "National and international important days with their dates and significance.",
    emoji: "📅",
    color: "teal",
    topics: [
      "National Days",
      "International Days",
      "Environment Days",
      "Health Days",
      "Education Days",
      "Science Days",
      "Women and Children Days",
    ],
  },

  {
    id: "books-authors",
    title: "Books & Authors",
    description:
      "Famous books, authors, writers and important literary works.",
    emoji: "📚",
    color: "violet",
    topics: [
      "Famous Indian Books",
      "Famous World Books",
      "Indian Authors",
      "World Authors",
      "Classical Literature",
      "Award Winning Books",
    ],
  },

  {
    id: "computer-gk",
    title: "Computer GK",
    description:
      "Basic computer knowledge, internet, hardware, software and technology facts.",
    emoji: "💻",
    color: "sky",
    topics: [
      "Computer Basics",
      "Hardware",
      "Software",
      "Internet",
      "Networking",
      "Operating Systems",
      "Programming",
      "Cyber Security",
      "Artificial Intelligence",
    ],
  },

  {
    id: "environment",
    title: "Environment",
    description:
      "Environment, pollution, climate change, wildlife and natural conservation.",
    emoji: "🌱",
    color: "emerald",
    topics: [
      "Environment",
      "Pollution",
      "Climate Change",
      "Global Warming",
      "Wildlife",
      "National Parks",
      "Conservation",
      "Renewable Energy",
    ],
  },
];

export const gkFacts: GKFact[] = [
  {
    question: "What is the capital of India?",
    answer: "New Delhi",
    section: "Indian GK",
  },
  {
    question: "How many states are there in India?",
    answer: "28",
    section: "Indian GK",
  },
  {
    question: "How many Union Territories are there in India?",
    answer: "8",
    section: "Indian GK",
  },
  {
    question: "What is the national animal of India?",
    answer: "Bengal Tiger",
    section: "Indian GK",
  },
  {
    question: "What is the national bird of India?",
    answer: "Indian Peacock",
    section: "Indian GK",
  },
  {
    question: "What is the national flower of India?",
    answer: "Lotus",
    section: "Indian GK",
  },
  {
    question: "What is the national tree of India?",
    answer: "Banyan Tree",
    section: "Indian GK",
  },
  {
    question: "What is the largest continent?",
    answer: "Asia",
    section: "World GK",
  },
  {
    question: "What is the largest ocean?",
    answer: "Pacific Ocean",
    section: "World GK",
  },
  {
    question: "How many continents are there?",
    answer: "7",
    section: "Geography",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    section: "Science GK",
  },
  {
    question: "Which is the fastest land animal?",
    answer: "Cheetah",
    section: "Science GK",
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    answer: "Mahatma Gandhi",
    section: "Important Persons",
  },
  {
    question: "Where is the Taj Mahal located?",
    answer: "Agra, Uttar Pradesh",
    section: "Indian GK",
  },
  {
    question: "Which is the highest mountain in the world?",
    answer: "Mount Everest",
    section: "Geography",
  },
  {
    question: "Which is the largest planet in our Solar System?",
    answer: "Jupiter",
    section: "Science GK",
  },
];

export const gkQuestions: GKQuestion[] = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi",
    section: "Indian GK",
  },
  {
    question: "How many states are there in India?",
    options: ["26", "27", "28", "29"],
    answer: "28",
    section: "Indian GK",
  },
  {
    question: "How many Union Territories are there in India?",
    options: ["6", "7", "8", "9"],
    answer: "8",
    section: "Indian GK",
  },
  {
    question: "What is the national animal of India?",
    options: ["Lion", "Elephant", "Bengal Tiger", "Leopard"],
    answer: "Bengal Tiger",
    section: "Indian GK",
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
    section: "Indian GK",
  },
  {
    question: "Which is the smallest Indian state by area?",
    options: ["Goa", "Sikkim", "Tripura", "Manipur"],
    answer: "Goa",
    section: "Indian GK",
  },
  {
    question: "Which is the largest continent?",
    options: ["Africa", "Asia", "Europe", "North America"],
    answer: "Asia",
    section: "World GK",
  },
  {
    question: "Which is the largest ocean?",
    options: [
      "Indian Ocean",
      "Atlantic Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
    section: "Geography",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: "Mars",
    section: "Science GK",
  },
  {
    question: "Which is the highest mountain in the world?",
    options: [
      "K2",
      "Mount Everest",
      "Kangchenjunga",
      "Lhotse",
    ],
    answer: "Mount Everest",
    section: "Geography",
  },
  {
    question: "Who led the Dandi March?",
    options: [
      "Subhas Chandra Bose",
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Sardar Patel",
    ],
    answer: "Mahatma Gandhi",
    section: "History",
  },
  {
    question: "Which house of Parliament is called the Lower House?",
    options: [
      "Rajya Sabha",
      "Lok Sabha",
      "Vidhan Sabha",
      "Legislative Council",
    ],
    answer: "Lok Sabha",
    section: "Indian Polity",
  },
  {
    question: "Which is the largest planet in our Solar System?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
    section: "Science GK",
  },
  {
    question: "Which sport is associated with Wimbledon?",
    options: ["Cricket", "Football", "Tennis", "Hockey"],
    answer: "Tennis",
    section: "Sports GK",
  },
  {
    question: "Which award is India's highest civilian award?",
    options: [
      "Padma Shri",
      "Padma Bhushan",
      "Bharat Ratna",
      "Padma Vibhushan",
    ],
    answer: "Bharat Ratna",
    section: "Awards & Honours",
  },
  {
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    section: "Geography",
  },
];
