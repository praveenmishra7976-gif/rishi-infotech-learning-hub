import { notFound } from "next/navigation";

import EnglishHindi from "../tools/EnglishHindi";
import HindiEnglish from "../tools/HindiEnglish";
import EnglishSanskrit from "../tools/EnglishSanskrit";
import SanskritEnglish from "../tools/SanskritEnglish";
import HindiSanskrit from "../tools/HindiSanskrit";
import SanskritHindi from "../tools/SanskritHindi";

import AITranslator from "../tools/AITranslator";
import SynonymFinder from "../tools/SynonymFinder";
import AntonymFinder from "../tools/AntonymFinder";
import GrammarChecker from "../tools/GrammarChecker";
import SpellChecker from "../tools/SpellChecker";
import DictionaryAPI from "../tools/DictionaryAPI";
import Encyclopedia from "../tools/Encyclopedia";

type Props = {
  params: Promise<{
    tool: string;
  }>;
};

export default async function DictionaryToolPage({
  params,
}: Props) {
  const { tool } = await params;

  const pages: Record<string, React.ReactNode> = {
    "english-hindi": <EnglishHindi />,
    "hindi-english": <HindiEnglish />,
    "english-sanskrit": <EnglishSanskrit />,
    "sanskrit-english": <SanskritEnglish />,
    "hindi-sanskrit": <HindiSanskrit />,
    "sanskrit-hindi": <SanskritHindi />,

    "ai-translator": <AITranslator />,
    "synonym-finder": <SynonymFinder />,
    "antonym-finder": <AntonymFinder />,
    "grammar-checker": <GrammarChecker />,
    "spell-checker": <SpellChecker />,

    "dictionary-api": <DictionaryAPI />,
    "encyclopedia": <Encyclopedia />,
  };

  const selectedTool = pages[tool];

  if (!selectedTool) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {selectedTool}
    </main>
  );
}
