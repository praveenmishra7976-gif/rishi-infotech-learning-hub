export type GKChapter = {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics: string[];
};

export const gkChapters: GKChapter[] = [
  {
    id: "indian-gk",
    title: "Indian General Knowledge",
    description:
      "Important facts about India, states, capitals, national symbols, important places, rivers, mountains and national parks.",
    icon: "🇮🇳",
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
    title: "World General Knowledge",
    description:
      "Important countries, capitals, currencies, continents, oceans and world facts.",
    icon: "🌍",
    topics: [
      "Countries and Capitals",
      "Currencies",
      "Continents",
      "Oceans",
      "World Records",
      "International Organizations",
      "World Geography",
    ],
  },

  {
    id: "history",
    title: "History",
    description:
      "Ancient, medieval and modern Indian history with important events, rulers, civilizations and freedom movements.",
    icon: "🏛️",
    topics: [
      "Ancient India",
      "Indus Valley Civilization",
      "Vedic Period",
      "Mahajanapadas",
      "Maurya Empire",
      "Gupta Empire",
      "Medieval India",
      "Delhi Sultanate",
      "Mughal Empire",
      "Modern India",
      "Indian Freedom Movement",
      "Important Historical Events",
    ],
  },

  {
    id: "world-history",
    title: "World History",
    description:
      "Important civilizations, revolutions, wars and historical personalities from around the world.",
    icon: "📜",
    topics: [
      "Ancient Civilizations",
      "Egyptian Civilization",
      "Greek Civilization",
      "Roman Civilization",
      "Renaissance",
      "Industrial Revolution",
      "American Revolution",
      "French Revolution",
      "World War I",
      "World War II",
      "United Nations",
      "World Leaders",
    ],
  },

  {
    id: "geography",
    title: "Geography",
    description:
      "Physical geography, countries, rivers, mountains, climate, resources and maps.",
    icon: "🗺️",
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
      "Latitudes and Longitudes",
      "Time Zones",
    ],
  },

  {
    id: "indian-polity",
    title: "Indian Polity",
    description:
      "Indian Constitution, Parliament, President, Prime Minister, judiciary and governance.",
    icon: "⚖️",
    topics: [
      "Indian Constitution",
      "Preamble",
      "Fundamental Rights",
      "Fundamental Duties",
      "Directive Principles",
      "President",
      "Vice President",
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
    id: "science-gk",
    title: "Science GK",
    description:
      "Important general science questions covering Physics, Chemistry, Biology and everyday science.",
    icon: "🔬",
    topics: [
      "Physics Facts",
      "Chemistry Facts",
      "Biology Facts",
      "Human Body",
      "Plants",
      "Animals",
      "Diseases",
      "Nutrition",
      "Space",
      "Solar System",
      "Planets",
      "Scientific Discoveries",
      "Inventions",
      "Technology",
    ],
  },

  {
    id: "sports-gk",
    title: "Sports GK",
    description:
      "Important sports, tournaments, players, records, awards and sporting events.",
    icon: "🏆",
    topics: [
      "Cricket",
      "Football",
      "Hockey",
      "Tennis",
      "Badminton",
      "Basketball",
      "Boxing",
      "Athletics",
      "Olympic Games",
      "Asian Games",
      "Commonwealth Games",
      "Sports Awards",
      "Famous Players",
    ],
  },

  {
    id: "awards-honours",
    title: "Awards & Honours",
    description:
      "Important national and international awards, prizes, medals and honours.",
    icon: "🏅",
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
      "Film Awards",
      "Science Awards",
      "International Awards",
    ],
  },

  {
    id: "important-persons",
    title: "Important Persons",
    description:
      "Important personalities from India and around the world and their contributions.",
    icon: "👤",
    topics: [
      "Indian Leaders",
      "Freedom Fighters",
      "Scientists",
      "Authors",
      "Artists",
      "Sportspersons",
      "Presidents",
      "Prime Ministers",
      "Social Reformers",
      "World Leaders",
      "Inventors",
    ],
  },

  {
    id: "current-affairs",
    title: "Current Affairs",
    description:
      "Important current events, national news, international events, appointments and updates.",
    icon: "📰",
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
      "Government Policies",
    ],
  },

  {
    id: "important-days",
    title: "Important Days",
    description:
      "National and international important days with their dates and significance.",
    icon: "📅",
    topics: [
      "National Days",
      "International Days",
      "Environment Days",
      "Health Days",
      "Education Days",
      "Science Days",
      "Women and Children Days",
      "UN Days",
    ],
  },

  {
    id: "books-authors",
    title: "Books & Authors",
    description:
      "Famous books, authors, writers and important literary works.",
    icon: "📚",
    topics: [
      "Famous Indian Books",
      "Famous World Books",
      "Indian Authors",
      "World Authors",
      "Classical Literature",
      "Indian Literature",
      "World Literature",
      "Award Winning Books",
      "Biographies",
      "Autobiographies",
    ],
  },

  {
    id: "economy",
    title: "Indian Economy",
    description:
      "Important economic concepts, banking, currency, taxation, budget and Indian economy.",
    icon: "💰",
    topics: [
      "Indian Economy Basics",
      "RBI",
      "Banking",
      "Currency",
      "Budget",
      "Taxation",
      "GDP",
      "Inflation",
      "Economic Planning",
      "Financial Institutions",
    ],
  },

  {
    id: "computer-gk",
    title: "Computer GK",
    description:
      "Important computer, internet, hardware, software, networking and technology facts.",
    icon: "💻",
    topics: [
      "Computer Basics",
      "Hardware",
      "Software",
      "Operating Systems",
      "Internet",
      "Networking",
      "Cyber Security",
      "Programming",
      "Database",
      "Artificial Intelligence",
      "Computer Abbreviations",
    ],
  },

  {
    id: "environment",
    title: "Environment & Ecology",
    description:
      "Environment, ecosystems, biodiversity, pollution, climate change and conservation.",
    icon: "🌱",
    topics: [
      "Environment Basics",
      "Ecosystem",
      "Biodiversity",
      "Pollution",
      "Climate Change",
      "Global Warming",
      "Wildlife",
      "National Parks",
      "Environmental Organizations",
      "Conservation",
    ],
  },

  {
    id: "defence-gk",
    title: "Defence GK",
    description:
      "Important facts about Indian defence forces, ranks, commands, missiles and defence organizations.",
    icon: "🪖",
    topics: [
      "Indian Army",
      "Indian Navy",
      "Indian Air Force",
      "Defence Ranks",
      "Military Commands",
      "Missiles",
      "Defence Organizations",
      "Military Exercises",
      "Paramilitary Forces",
      "Gallantry Awards",
    ],
  },

  {
    id: "abbreviations",
    title: "Important Abbreviations",
    description:
      "Common abbreviations used in government, science, technology, banking and education.",
    icon: "🔤",
    topics: [
      "Government Abbreviations",
      "Computer Abbreviations",
      "Science Abbreviations",
      "Banking Abbreviations",
      "Medical Abbreviations",
      "Education Abbreviations",
      "International Organizations",
      "Technology Abbreviations",
    ],
  },
];