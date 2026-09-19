import Link from "next/link";
import type { ReactNode } from "react";

import NotesCard from "./notes/NotesCard";
import NotesSidebar from "./notes/NotesSidebar";
import ReadingProgress from "./notes/ReadingProgress";
import AIDoubtBox from "./notes/AIDoubtBox";
import BookmarkButton from "./notes/BookmarkButton";

type ChapterTemplateProps = {
  title: string;
  description?: string;
  subject?: string;

  content: ReactNode;

  url?: string;

  previousLink?: string;
  nextLink?: string;

  previous?: {
    title: string;
    href: string;
  };

  next?: {
    title: string;
    href: string;
  };
};

const chapters = [
  {
    title: "Introduction",
    href: "/computer/fundamentals/introduction",
  },
  {
    title: "Characteristics",
    href: "/computer/fundamentals/characteristics",
  },
  {
    title: "Applications",
    href: "/computer/fundamentals/applications",
  },
  {
    title: "Types of Computer",
    href: "/computer/fundamentals/types",
  },
  {
    title: "Components",
    href: "/computer/fundamentals/components",
  },
  {
    title: "Computer Memory",
    href: "/computer/fundamentals/memory",
  },
];

export default function ChapterTemplate({
  title,
  description,
  subject = "Computer",
  content,
  url = "",
  previousLink,
  nextLink,
  previous,
  next,
}: ChapterTemplateProps) {
  const previousHref = previous?.href ?? previousLink;
  const nextHref = next?.href ?? nextLink;

  const previousTitle = previous?.title ?? "Previous Chapter";
  const nextTitle = next?.title ?? "Next Chapter";

  return (
    <main className="min-h-screen bg-slate-100">

      <ReadingProgress />

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <p className="text-blue-100 text-lg font-medium">
            {subject}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            {title}
          </h1>

          {description && (
            <p className="text-blue-100 text-lg mt-5 max-w-3xl leading-8">
              {description}
            </p>
          )}

        </div>

      </section>

      {/* Main Content */}

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-4 gap-8">

          {/* Sidebar */}

          <aside className="space-y-6">

            <NotesSidebar chapters={chapters} />

            {/* Chapter Tools */}

            <div className="bg-white rounded-3xl shadow-xl p-6">

              <h2 className="text-2xl font-bold text-blue-700 mb-6">
                Chapter Tools
              </h2>

              <div className="space-y-4">

                <button
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
                >
                  📄 Download PDF
                </button>

                <BookmarkButton
                  title={title}
                  url={url}
                />

                <button
                  type="button"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
                >
                  ❤️ Like Chapter
                </button>

                <button
                  type="button"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition"
                >
                  📝 Chapter Quiz
                </button>

              </div>

            </div>

          </aside>

          {/* Notes Content */}

          <section className="lg:col-span-3">

            <NotesCard
              title={title}
              content={content}
            />

            <AIDoubtBox />

            {/* Previous / Next Navigation */}

            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">

              {previousHref ? (
                <Link
                  href={previousHref}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl transition text-center"
                >
                  ← {previousTitle}
                </Link>
              ) : (
                <div />
              )}

              {nextHref ? (
                <Link
                  href={nextHref}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition text-center"
                >
                  {nextTitle} →
                </Link>
              ) : (
                <div />
              )}

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}