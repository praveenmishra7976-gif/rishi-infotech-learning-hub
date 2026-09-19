import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

import { physicsChapters } from "../../data/physicsChapters";

import BookmarkButton from "../components/Bookmark";
import DownloadButton from "../components/DownloadButton";
import ReadingProgress from "../components/ReadingProgress";

import PhysicsSearch from "../components/PhysicsSearch";
import FormulaCards from "../components/FormulaCards";
import Laws from "../components/Laws";
import Numericals from "../components/Numericals";
import Flashcards from "../components/Flashcards";
import Quiz from "../components/Quiz";
import PreviousYearQuestions from "../components/PreviousYearQuestions";
import VideoResources from "../components/VideoResources";

import FavoriteChapters from "../components/FavoriteChapters";
import RecentlyViewed from "../components/RecentlyViewed";
import ProgressDashboard from "../components/ProgressDashboard";
import ChapterCompletion from "../components/ChapterCompletion";

import PhysicsCalculator from "../components/PhysicsCalculator";
import UnitConverter from "../components/UnitConverter";
import FormulaSearch from "../components/FormulaSearch";
import PhysicsDictionary from "../components/PhysicsDictionary";
import AIDoubtBox from "../components/AIDoubtBox";

import PhysicsMockTest from "../components/PhysicsMockTest";
import Leaderboard from "../components/Leaderboard";
import Achievement from "../components/Achievement";
import Certificate from "../components/Certificate";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PhysicsPage({
  params,
}: Props) {

  const { slug } = await params;

  const chapter = physicsChapters.find(
    (c) => c.slug === slug
  );

  if (!chapter) notFound();

  const index = physicsChapters.findIndex(
    (c) => c.slug === slug
  );

  const previous = physicsChapters[index - 1];
  const next = physicsChapters[index + 1];

  return (

<div className="min-h-screen bg-slate-100">

<div className="max-w-7xl mx-auto px-6 py-10">

<div className="rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white p-10 shadow-xl">

<h1 className="text-5xl font-bold">

{chapter.title}

</h1>

<p className="mt-4 text-xl opacity-90">

{chapter.description}

</p>

<div className="flex flex-wrap gap-4 mt-8">

<BookmarkButton slug={chapter.slug}/>

<DownloadButton
title={chapter.title}
content={chapter.content}
/>

</div>

</div>

<div className="mt-8">

<ReadingProgress
current={index+1}
total={physicsChapters.length}
/>

</div>

<div className="mt-10">

<PhysicsSearch/>

</div>

<div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

<div className="flex gap-3 items-center mb-8">

<BookOpen
className="text-blue-700"
size={34}
/>

<h2 className="text-3xl font-bold">

Physics Notes

</h2>

</div>

<pre className="whitespace-pre-wrap leading-9 text-lg font-sans">

{chapter.content}

</pre>

</div>
{/* Study Components */}

<div className="space-y-10 mt-10">

  <FormulaCards />

  <Laws />

  <Numericals />

  <Flashcards />

  <Quiz />

  <PreviousYearQuestions />

  <VideoResources />

</div>

{/* Advanced Tools */}

<div className="space-y-10 mt-10">

  <PhysicsCalculator />

  <UnitConverter />

  <FormulaSearch />

  <PhysicsDictionary />

  <AIDoubtBox />

</div>

{/* Student Dashboard */}

<div className="space-y-10 mt-10">

  <FavoriteChapters />

  <RecentlyViewed />

  <ProgressDashboard />

  <ChapterCompletion />

  <PhysicsMockTest />

  <Leaderboard />

  <Achievement />

  <Certificate />

</div>

{/* Navigation */}

<div className="mt-16 flex flex-col md:flex-row justify-between gap-6">

  {previous ? (

    <Link
      href={`/physics/${previous.slug}`}
      className="flex items-center gap-4 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
    >

      <ArrowLeft
        className="text-blue-700"
        size={28}
      />

      <div>

        <p className="text-sm text-gray-500">
          Previous Chapter
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
      href={`/physics/${next.slug}`}
      className="flex items-center gap-4 bg-blue-700 text-white rounded-2xl shadow-lg p-6 hover:bg-blue-800 transition"
    >

      <div className="text-right">

        <p className="text-blue-100 text-sm">
          Next Chapter
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
        {/* Physics Learning Summary */}

        <div className="mt-16 bg-gradient-to-r from-indigo-600 via-blue-700 to-cyan-600 rounded-3xl p-10 text-white shadow-xl">

          <h2 className="text-4xl font-bold">
            Keep Learning Physics 🚀
          </h2>

          <p className="mt-4 text-lg text-blue-100">
            Complete every chapter, solve quizzes, practice numericals,
            master formulas and become a Physics expert.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">

              <h3 className="text-4xl font-bold">
                {physicsChapters.length}
              </h3>

              <p className="mt-2">
                Chapters
              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">

              <h3 className="text-4xl font-bold">
                500+
              </h3>

              <p className="mt-2">
                MCQs
              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">

              <h3 className="text-4xl font-bold">
                150+
              </h3>

              <p className="mt-2">
                Formulae
              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">

              <h3 className="text-4xl font-bold">
                100%
              </h3>

              <p className="mt-2">
                Free Learning
              </p>

            </div>

          </div>

        </div>

        {/* Footer */}

        <footer className="mt-20 border-t border-gray-200 pt-10 pb-8">

          <div className="grid md:grid-cols-4 gap-10">

            <div>

              <h3 className="text-2xl font-bold text-blue-700">
                Physics Module
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Learn Physics with detailed notes, quizzes,
                formulas, numericals, calculators, AI tools
                and mock tests.
              </p>

            </div>

            <div>

              <h3 className="font-bold mb-4">
                Study
              </h3>

              <ul className="space-y-3 text-gray-600">

                <li>Physics Notes</li>

                <li>Formula Cards</li>

                <li>Numericals</li>

                <li>Mock Tests</li>

              </ul>

            </div>

            <div>

              <h3 className="font-bold mb-4">
                Tools
              </h3>

              <ul className="space-y-3 text-gray-600">

                <li>Calculator</li>

                <li>Unit Converter</li>

                <li>Dictionary</li>

                <li>AI Doubt Box</li>

              </ul>

            </div>

            <div>

              <h3 className="font-bold mb-4">
                Rishi Infotech
              </h3>

              <p className="text-gray-600">
                Learn Everything In One Place
              </p>

            </div>

          </div>

          <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500">

  © 2026 Rishi Infotech Learning Hub.
  All Rights Reserved.

</div>

</footer>

</div>

</div>

);

}