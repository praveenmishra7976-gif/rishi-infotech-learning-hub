import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { sanskritChapters } from "../data/sanskritChapters";

import Bookmark from "../components/Bookmark";
import DownloadButton from "../components/DownloadButton";
import ReadingProgress from "../components/ReadingProgress";

import SanskritSearch from "../components/SanskritSearch";
import GrammarCards from "../components/GrammarCards";
import VocabularyCards from "../components/VocabularyCards";
import Flashcards from "../components/Flashcards";
import Quiz from "../components/Quiz";
import PreviousYearQuestions from "../components/PreviousYearQuestions";
import VideoResources from "../components/VideoResources";

import FavoriteChapters from "../components/FavoriteChapters";
import RecentlyViewed from "../components/RecentlyViewed";
import ProgressDashboard from "../components/ProgressDashboard";
import ChapterCompletion from "../components/ChapterCompletion";

import SanskritDictionary from "../components/SanskritDictionary";
import TranslationPractice from "../components/TranslationPractice";
import ShlokaPractice from "../components/ShlokaPractice";
import AIDoubtBox from "../components/AIDoubtBox";

import SanskritMockTest from "../components/SanskritMockTest";
import Leaderboard from "../components/Leaderboard";
import Achievement from "../components/Achievement";
import Certificate from "../components/Certificate";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SanskritPage({
  params,
}: Props) {

  const { slug } = await params;

  const chapter = sanskritChapters.find(
    (c) => c.slug === slug
  );

  if (!chapter) notFound();

  const index = sanskritChapters.findIndex(
    (c) => c.slug === slug
  );

  const previous = sanskritChapters[index - 1];
  const next = sanskritChapters[index + 1];

  return (

    <main className="max-w-7xl mx-auto px-6 py-10">

      <div className="bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 rounded-3xl p-10 text-white shadow-xl">

        <h1 className="text-5xl font-bold">
          {chapter.title}
        </h1>

        <p className="mt-4 text-xl">
          {chapter.description}
        </p>

      </div>

      <div className="mt-8">

        <ReadingProgress
          current={index + 1}
          total={sanskritChapters.length}
        />

      </div>

      <div className="flex flex-wrap gap-4 mt-8">

        <Bookmark slug={chapter.slug} />

        <DownloadButton
          title={chapter.title}
          content={chapter.content}
        />

      </div>

      <div className="mt-10 whitespace-pre-line bg-white rounded-3xl shadow-lg p-8 text-lg leading-9">
        {chapter.content}
      </div>

      <SanskritSearch />

      <GrammarCards />

      <VocabularyCards />

      <Flashcards />

      <Quiz />

      <PreviousYearQuestions />

      <VideoResources />

      <ProgressDashboard />

      <FavoriteChapters />

      <RecentlyViewed />

      <ChapterCompletion />

      <SanskritDictionary />

      <TranslationPractice />

      <ShlokaPractice />

      <AIDoubtBox />

      <SanskritMockTest />

      <Leaderboard />

      <Achievement />

      <Certificate />

      <div className="grid md:grid-cols-2 gap-8 mt-16">

        {previous ? (

          <Link
            href={`/sanskrit/${previous.slug}`}
            className="flex items-center gap-4 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >

            <ArrowLeft size={28} />

            <div>

              <p className="text-sm text-gray-500">
                Previous
              </p>

              <h3 className="font-bold">
                {previous.title}
              </h3>

            </div>

          </Link>

        ) : (
          <div />
        )}

        {next ? (

          <Link
            href={`/sanskrit/${next.slug}`}
            className="flex items-center justify-between bg-orange-600 text-white rounded-2xl shadow-lg p-6 hover:bg-orange-700 transition"
          >

            <div>

              <p className="text-orange-100 text-sm">
                Next
              </p>

              <h3 className="font-bold">
                {next.title}
              </h3>

            </div>

            <ArrowRight size={28} />

          </Link>

        ) : (
          <div />
        )}

      </div>

    </main>

  );
}