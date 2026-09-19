export interface DictionaryTool {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  icon: string;
  color: string;
}

export const dictionaryTools: DictionaryTool[] = [
  {
    id: 1,
    name: "English → Hindi",
    slug: "english-hindi",
    description: "Translate English words and phrases into Hindi.",
    category: "Language",
    icon: "🇮🇳",
    color: "blue",
  },
  {
    id: 2,
    name: "Hindi → English",
    slug: "hindi-english",
    description: "Translate Hindi words and phrases into English.",
    category: "Language",
    icon: "🌐",
    color: "cyan",
  },
  {
    id: 3,
    name: "English → Sanskrit",
    slug: "english-sanskrit",
    description: "Translate English words into Sanskrit.",
    category: "Language",
    icon: "📜",
    color: "purple",
  },
  {
    id: 4,
    name: "Sanskrit → English",
    slug: "sanskrit-english",
    description: "Translate Sanskrit words into English.",
    category: "Language",
    icon: "📚",
    color: "indigo",
  },
  {
    id: 5,
    name: "Hindi → Sanskrit",
    slug: "hindi-sanskrit",
    description: "Translate Hindi words into Sanskrit.",
    category: "Language",
    icon: "🕉️",
    color: "orange",
  },
  {
    id: 6,
    name: "Sanskrit → Hindi",
    slug: "sanskrit-hindi",
    description: "Translate Sanskrit words into Hindi.",
    category: "Language",
    icon: "🔤",
    color: "pink",
  },
  {
    id: 7,
    name: "AI Translator",
    slug: "ai-translator",
    description: "Translate complete sentences and text using AI.",
    category: "AI Tools",
    icon: "🤖",
    color: "violet",
  },
  {
    id: 8,
    name: "Synonym Finder",
    slug: "synonym-finder",
    description: "Find similar and related words to improve your vocabulary.",
    category: "Vocabulary",
    icon: "🔎",
    color: "green",
  },
  {
    id: 9,
    name: "Antonym Finder",
    slug: "antonym-finder",
    description: "Find opposite words quickly and easily.",
    category: "Vocabulary",
    icon: "↔️",
    color: "red",
  },
  {
    id: 10,
    name: "Grammar Checker",
    slug: "grammar-checker",
    description: "Check sentences and identify common grammar mistakes.",
    category: "Writing",
    icon: "✍️",
    color: "amber",
  },
  {
    id: 11,
    name: "Spell Checker",
    slug: "spell-checker",
    description: "Check and improve spelling mistakes in your text.",
    category: "Writing",
    icon: "✅",
    color: "emerald",
  },
  {
    id: 12,
    name: "Free Dictionary",
    slug: "dictionary-api",
    description:
      "Search English meanings, pronunciation, examples, synonyms and antonyms.",
    category: "Reference",
    icon: "📖",
    color: "blue",
  },
  {
    id: 13,
    name: "Encyclopedia",
    slug: "encyclopedia",
    description:
      "Explore information about science, technology, people, places, history and more.",
    category: "Reference",
    icon: "🌍",
    color: "purple",
  },
];

export const dictionaryCategories = [
  "All",
  "Language",
  "AI Tools",
  "Vocabulary",
  "Writing",
  "Reference",
];
