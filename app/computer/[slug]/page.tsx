import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Bookmark from "../components/Bookmark";
import Quiz from "../components/Quiz";
import ReadingProgress from "../components/ReadingProgress";
import DownloadButton from "../components/DownloadButton";
import PracticalQuestions from "../components/PracticalQuestions";

import { notes } from "../data/notes";
import { mcqs } from "../data/mcq";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const note =
    notes[slug as keyof typeof notes];

  const questions =
    mcqs[slug as keyof typeof mcqs] || [];

  return (
    <main className="bg-slate-100 min-h-screen">

      <div className="max-w-7xl mx-auto flex">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <div className="flex-1 p-10">

          {/* Reading Progress */}

          <ReadingProgress
            current={1}
            total={20}
          />

          {/* Search */}

          <SearchBar />

          {/* Heading */}

          <div className="flex justify-between items-center mt-8">

            <h1 className="text-4xl font-bold capitalize">

              {note?.title ||
                slug.replace("-", " ")}

            </h1>

            <Bookmark slug={slug} />

          </div>

          {/* Notes */}

          <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

            <h2 className="text-2xl font-bold mb-5">

              Chapter Notes

            </h2>

            <div className="leading-9 text-lg whitespace-pre-line">

              {note?.content ||
                "Notes will be added soon."}

            </div>

          </div>

          {/* Practical */}

          <PracticalQuestions />

          {/* Quiz */}

          <Quiz questions={questions} />

          {/* PDF */}

          <DownloadButton slug={slug} />

          {/* Downloads */}

          <div className="mt-6">

            <a
              href="/computer/downloads"
              className="text-blue-700 font-semibold underline"
            >
              📚 View Available Computer Downloads
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}