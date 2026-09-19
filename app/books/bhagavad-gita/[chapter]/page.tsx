import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  CircleHelp,
  Lightbulb,
  MessageCircle,
  Sparkles,
  Target,
} from "lucide-react";

import { getGitaChapter, gitaChapters } from "../data/chapters";

export function generateStaticParams() {
  return gitaChapters.map((chapter) => ({
    chapter: chapter.slug,
  }));
}

export default async function GitaChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter: slug } = await params;
  const data = getGitaChapter(slug);

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-amber-50 px-5">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            <BookOpen size={30} />
          </div>

          <h1 className="mt-6 text-3xl font-black text-slate-950">
            Chapter Not Found
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            The requested Bhagavad Gita chapter could not be found.
          </p>

          <Link
            href="/books/bhagavad-gita"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-bold text-white transition hover:bg-amber-600"
          >
            <ArrowLeft size={17} />
            Back to Bhagavad Gita
          </Link>
        </div>
      </main>
    );
  }

  const previousChapter =
    data.number > 1
      ? `/books/bhagavad-gita/chapter-${data.number - 1}`
      : null;

  const nextChapter =
    data.number < 18
      ? `/books/bhagavad-gita/chapter-${data.number + 1}`
      : null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 lg:px-8">

        {/* TOP NAVIGATION */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/books/bhagavad-gita"
            className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-amber-50"
          >
            <ArrowLeft size={17} />
            All Chapters
          </Link>

          <div className="rounded-full bg-amber-100 px-4 py-2 text-xs font-black text-amber-800">
            Chapter {data.number} of 18
          </div>
        </div>

        {/* HERO */}
        <section className="relative mt-6 overflow-hidden rounded-[2rem] border border-amber-200 bg-white shadow-sm">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

          <div className="relative p-7 sm:p-10 lg:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg">
              <Sparkles size={27} />
            </div>

            <p className="mt-7 text-xs font-black tracking-[0.22em] text-amber-700">
              {data.chapter}
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              {data.title}
            </h1>

            <p className="mt-2 text-lg font-bold text-amber-700">
              {data.subtitle}
            </p>

            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              {data.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {data.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-amber-100 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-800"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-6">
              <div className="flex items-center gap-2 text-sm font-black text-amber-700">
                <Lightbulb size={18} />
                Central Theme
              </div>

              <p className="mt-3 text-base leading-7 text-slate-700">
                {data.centralTheme}
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT GRID */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">

          {/* MAIN CONTENT */}
          <div className="space-y-6">

            {/* BACKGROUND */}
            <section className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3">
                <BookOpen className="text-amber-600" size={24} />

                <h2 className="text-2xl font-black text-slate-950">
                  Chapter Background
                </h2>
              </div>

              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                {data.background}
              </p>
            </section>

            {/* STORY */}
            <section className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3">
                <Sparkles className="text-amber-600" size={24} />

                <h2 className="text-2xl font-black text-slate-950">
                  What Happens in This Chapter?
                </h2>
              </div>

              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                {data.story}
              </p>
            </section>

            {/* KEY TERMS */}
            <section className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3">
                <Brain className="text-amber-600" size={24} />

                <h2 className="text-2xl font-black text-slate-950">
                  Important Terms
                </h2>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {data.keyTerms.map((item) => (
                  <div
                    key={item.term}
                    className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5"
                  >
                    <h3 className="font-black text-amber-800">
                      {item.term}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* TEACHINGS */}
            <section className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3">
                <Lightbulb className="text-amber-600" size={24} />

                <h2 className="text-2xl font-black text-slate-950">
                  Main Teachings
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                {data.teachings.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-sm font-black text-white">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="font-black text-slate-950">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {item.explanation}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* VERSES */}
            <section className="rounded-[2rem] border border-amber-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3">
                <Sparkles className="text-amber-600" size={24} />

                <div>
                  <h2 className="text-2xl font-black text-slate-950">
                    Selected Verses
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Important verses for study and reflection
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                {data.verses.map((verse) => (
                  <article
                    key={verse.reference}
                    className="overflow-hidden rounded-2xl border border-amber-100"
                  >
                    <div className="border-b border-amber-100 bg-amber-50 px-5 py-3">
                      <span className="text-xs font-black uppercase tracking-[0.15em] text-amber-700">
                        Bhagavad Gita {verse.reference}
                      </span>
                    </div>

                    <div className="p-5">
                      <p className="text-right text-lg font-semibold leading-10 text-slate-800">
                        {verse.sanskrit}
                      </p>

                      <p className="mt-4 text-sm italic leading-7 text-slate-500">
                        {verse.transliteration}
                      </p>

                      <div className="mt-5 rounded-xl bg-amber-50 p-4">
                        <p className="text-xs font-black uppercase tracking-wider text-amber-700">
                          Simple Meaning
                        </p>

                        <p className="mt-2 text-sm leading-7 text-slate-700">
                          {verse.meaning}
                        </p>
                      </div>

                      <div className="mt-4">
                        <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                          Explanation
                        </p>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {verse.explanation}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* STUDENT LESSONS */}
            <section className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3">
                <Target className="text-amber-600" size={24} />

                <h2 className="text-2xl font-black text-slate-950">
                  What Students Can Learn
                </h2>
              </div>

              <div className="mt-6 space-y-3">
                {data.studentLessons.map((lesson) => (
                  <div
                    key={lesson}
                    className="flex gap-3 rounded-xl bg-emerald-50 p-4"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-emerald-600"
                      size={19}
                    />

                    <p className="text-sm leading-7 text-slate-700">
                      {lesson}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* REAL LIFE */}
            <section className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-amber-600" size={24} />

                <h2 className="text-2xl font-black text-slate-950">
                  Real-Life Applications
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                {data.realLife.map((item) => (
                  <article
                    key={item.situation}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <p className="text-xs font-black uppercase tracking-wider text-amber-700">
                      Situation
                    </p>

                    <p className="mt-2 text-sm font-bold leading-7 text-slate-800">
                      {item.situation}
                    </p>

                    <p className="mt-4 text-xs font-black uppercase tracking-wider text-emerald-700">
                      Lesson
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.lesson}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* TAKEAWAYS */}
            <section className="rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-600" size={24} />

                <h2 className="text-2xl font-black text-slate-950">
                  Key Takeaways
                </h2>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {data.takeaways.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white p-4 shadow-sm"
                  >
                    <p className="text-sm font-bold leading-6 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* QUESTIONS */}
            <section className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3">
                <CircleHelp className="text-amber-600" size={24} />

                <h2 className="text-2xl font-black text-slate-950">
                  Reflection Questions
                </h2>
              </div>

              <div className="mt-6 space-y-3">
                {data.questions.map((question, index) => (
                  <div
                    key={question}
                    className="flex gap-4 rounded-xl border border-slate-100 p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-xs font-black text-amber-700">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-7 text-slate-700">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* QUIZ */}
            <section className="rounded-[2rem] border border-amber-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3">
                <Brain className="text-amber-600" size={24} />

                <div>
                  <h2 className="text-2xl font-black text-slate-950">
                    Quick Chapter Quiz
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Test your understanding after reading the chapter.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {data.quiz.map((item, index) => (
                  <div
                    key={item.question}
                    className="rounded-2xl bg-slate-50 p-5"
                  >
                    <p className="font-black text-slate-900">
                      {index + 1}. {item.question}
                    </p>

                    <div className="mt-4 grid gap-2">
                      {item.options.map((option, optionIndex) => (
                        <div
                          key={option}
                          className="rounded-xl border border-white bg-white px-4 py-3 text-sm text-slate-600"
                        >
                          <span className="mr-2 font-black text-amber-600">
                            {String.fromCharCode(65 + optionIndex)}.
                          </span>

                          {option}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                      <p className="text-xs font-black uppercase tracking-wider text-emerald-700">
                        Answer
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-700">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">

            <div className="rounded-[2rem] border border-amber-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">
                Chapter Progress
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-600">
                  Chapter {data.number}
                </span>

                <span className="text-sm font-black text-amber-700">
                  {data.number}/18
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-amber-100">
                <div
                  className="h-full rounded-full bg-amber-500"
                  style={{
                    width: `${(data.number / 18) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                In This Chapter
              </p>

              <div className="mt-4 space-y-2">
                {[
                  "Background",
                  "Chapter Story",
                  "Important Terms",
                  "Main Teachings",
                  "Selected Verses",
                  "Student Lessons",
                  "Real-Life Applications",
                  "Key Takeaways",
                  "Reflection Questions",
                  "Quick Quiz",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50 p-6">
              <Lightbulb className="text-amber-600" size={25} />

              <h3 className="mt-4 font-black text-slate-950">
                Study Tip
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Read the explanation first, then read the selected verses and
                finally answer the reflection questions.
              </p>
            </div>
          </aside>
        </div>

        {/* NAVIGATION */}
        <section className="mt-8 rounded-[2rem] border border-amber-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            {previousChapter ? (
              <Link
                href={previousChapter}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-amber-50"
              >
                <ArrowLeft size={16} />
                Previous Chapter
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/books/bhagavad-gita"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-100 px-5 py-3 text-sm font-black text-amber-800 transition hover:bg-amber-200"
            >
              <BookOpen size={16} />
              All 18 Chapters
            </Link>

            {nextChapter ? (
              <Link
                href={nextChapter}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-amber-600"
              >
                Next Chapter
                <ArrowRight size={16} />
              </Link>
            ) : (
              <Link
                href="/books/bhagavad-gita"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-amber-600"
              >
                Finish Gita
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}
