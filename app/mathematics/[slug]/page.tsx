import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { mathChapters } from "../data/mathChapters";

import Bookmark from "../components/Bookmark";
import DownloadButton from "../components/DownloadButton";
import ReadingProgress from "../components/ReadingProgress";

import MathSearch from "../components/MathSearch";
import FormulaCards from "../components/FormulaCards";
import FormulaSearch from "../components/FormulaSearch";
import Flashcards from "../components/Flashcards";
import Quiz from "../components/Quiz";
import PreviousYearQuestions from "../components/PreviousYearQuestions";
import VideoResources from "../components/VideoResources";

import FavoriteChapters from "../components/FavoriteChapters";
import RecentlyViewed from "../components/RecentlyViewed";
import ProgressDashboard from "../components/ProgressDashboard";
import ChapterCompletion from "../components/ChapterCompletion";

import ScientificCalculator from "../components/ScientificCalculator";
import GraphCalculator from "../components/GraphCalculator";
import EquationSolver from "../components/EquationSolver";
import GeometryTools from "../components/GeometryTools";
import UnitConverter from "../components/UnitConverter";
import MathDictionary from "../components/MathDictionary";

import AIDoubtBox from "../components/AIDoubtBox";
import MathMockTest from "../components/MathMockTest";
import Leaderboard from "../components/Leaderboard";
import Achievement from "../components/Achievement";
import Certificate from "../components/Certificate";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MathPage({ params }: Props) {
  const { slug } = await params;

  const chapter = mathChapters.find((c) => c.slug === slug);

  if (!chapter) notFound();

  const index = mathChapters.findIndex((c) => c.slug === slug);

  const previous = mathChapters[index - 1];
  const next = mathChapters[index + 1];

  return (
    <main className="bg-slate-100 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 rounded-3xl p-10 text-white shadow-xl">

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
            total={mathChapters.length}
          />
        </div>

        <div className="mt-8">
          <MathSearch />
        </div>

        <div className="flex justify-end mt-8">
          <Bookmark slug={slug} />
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-3xl font-bold text-purple-700">
            Mathematics Notes
          </h2>

          <div className="mt-6 whitespace-pre-line leading-9 text-lg">
            {chapter.content}
          </div>

        </div>

        <FormulaCards />

        <FormulaSearch />

        <ScientificCalculator />

        <GraphCalculator />

        <EquationSolver />

        <GeometryTools />

        <UnitConverter />

        <MathDictionary />

        <Flashcards />

        <Quiz />

        <PreviousYearQuestions />

        <VideoResources />

        <AIDoubtBox />

        <FavoriteChapters />

        <RecentlyViewed />

        <ProgressDashboard />

        <ChapterCompletion />

        <MathMockTest />

        <Leaderboard />

        <Achievement />

        <Certificate />

        <div className="mt-10">

          <DownloadButton
            title={chapter.title}
            content={chapter.content}
          />

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {previous ? (

            <Link
              href={`/mathematics/${previous.slug}`}
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
              href={`/mathematics/${next.slug}`}
              className="bg-purple-700 text-white rounded-2xl shadow-lg p-6 flex items-center justify-between hover:bg-purple-800"
            >

              <div>

                <p className="text-sm">
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