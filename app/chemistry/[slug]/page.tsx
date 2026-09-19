import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { chemistryChapters } from "../data/chemistryChapters";

import Bookmark from "../components/Bookmark";
import DownloadButton from "../components/DownloadButton";
import ReadingProgress from "../components/ReadingProgress";

import ChemistrySearch from "../components/ChemistrySearch";
import FormulaCards from "../components/FormulaCards";
import Flashcards from "../components/Flashcards";
import Quiz from "../components/Quiz";
import PreviousYearQuestions from "../components/PreviousYearQuestions";
import VideoResources from "../components/VideoResources";

import FavoriteChapters from "../components/FavoriteChapters";
import RecentlyViewed from "../components/RecentlyViewed";
import ProgressDashboard from "../components/ProgressDashboard";
import ChapterCompletion from "../components/ChapterCompletion";

import ChemistryCalculator from "../components/ChemistryCalculator";
import UnitConverter from "../components/UnitConverter";
import FormulaSearch from "../components/FormulaSearch";
import ChemistryDictionary from "../components/ChemistryDictionary";
import AIDoubtBox from "../components/AIDoubtBox";

import ChemistryMockTest from "../components/ChemistryMockTest";
import Leaderboard from "../components/Leaderboard";
import Achievement from "../components/Achievement";
import Certificate from "../components/Certificate";
import PeriodicTable from "../components/PeriodicTable";
import ChemicalReactions from "../components/ChemicalReactions";
import MolarMassCalculator from "../components/MolarMassCalculator";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ChemistryPage({ params }: Props) {

  const { slug } = await params;

  const chapter = chemistryChapters.find(
    (c) => c.slug === slug
  );

  if (!chapter) notFound();

  const index = chemistryChapters.findIndex(
    (c) => c.slug === slug
  );

  const previous = chemistryChapters[index - 1];

  const next = chemistryChapters[index + 1];

  return (

    <main className="bg-slate-100 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 rounded-3xl p-10 text-white shadow-xl">

          <h1 className="text-5xl font-bold">
            {chapter.title}
          </h1>

          <p className="mt-4 text-xl text-green-100">
            {chapter.description}
          </p>

        </div>

        <div className="mt-8">

          <ReadingProgress current={index + 1} total={chemistryChapters.length} />

        </div>

        <div className="mt-8">

          <ChemistrySearch />

        </div>

        <div className="mt-8 flex justify-end">

          <Bookmark slug={slug} />

        </div>

        <div className="mt-10 bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-green-700">
            Chemistry Notes
          </h2>

          <div className="mt-6 whitespace-pre-line leading-9 text-lg">
            {chapter.content}
          </div>

        </div>

        <FormulaCards />

        <FormulaSearch />
        <PeriodicTable />

<ChemicalReactions />

<MolarMassCalculator />

        <ChemistryCalculator />

        <UnitConverter />

        <ChemistryDictionary />

        <Flashcards />

        <Quiz />

        <PreviousYearQuestions />

        <VideoResources />

        <AIDoubtBox />

        <FavoriteChapters />

        <RecentlyViewed currentSlug={slug} />

        <ProgressDashboard />

        <ChapterCompletion slug={slug} />

        <ChemistryMockTest />

        <Leaderboard />

        <Achievement />

        <Certificate />

        <div className="mt-12">
          <DownloadButton
            title={chapter.title}
            content={chapter.content}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {previous ? (

            <Link
              href={`/chemistry/${previous.slug}`}
              className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl"
            >

              <ArrowLeft />

              <div>

                <p className="text-sm text-gray-500">
                  Previous Chapter
                </p>

                <h3 className="font-bold">
                  {previous.title}
                </h3>

              </div>

            </Link>

          ) : <div />}

          {next ? (

            <Link
              href={`/chemistry/${next.slug}`}
              className="bg-green-700 text-white rounded-2xl shadow-lg p-6 flex items-center justify-between hover:bg-green-800"
            >

              <div>

                <p className="text-sm text-green-100">
                  Next Chapter
                </p>

                <h3 className="font-bold">
                  {next.title}
                </h3>

              </div>

              <ArrowRight />

            </Link>

          ) : <div />}

        </div>

      </div>

    </main>

  );

}