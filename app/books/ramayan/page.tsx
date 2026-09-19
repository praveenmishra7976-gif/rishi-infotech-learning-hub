import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Heart,
  Lightbulb,
} from "lucide-react";

const sections = [
  {
    chapter: "Bala Kanda",
    title: "The Beginning",
    description:
      "The early life of Rama, his education, values and the beginning of his journey.",
    lesson:
      "Strong character is built through learning, discipline and good guidance.",
    topics: ["Childhood", "Learning", "Discipline", "Character"],
  },
  {
    chapter: "Ayodhya Kanda",
    title: "Duty & Sacrifice",
    description:
      "Rama accepts responsibility and faces difficult circumstances with dignity.",
    lesson:
      "Sometimes doing what is right requires patience and personal sacrifice.",
    topics: ["Duty", "Sacrifice", "Patience", "Responsibility"],
  },
  {
    chapter: "Aranya Kanda",
    title: "Life in the Forest",
    description:
      "Rama, Sita and Lakshmana face challenges while living in the forest.",
    lesson:
      "Difficult situations can teach courage, resilience and self-control.",
    topics: ["Courage", "Resilience", "Family", "Self-control"],
  },
  {
    chapter: "Kishkindha Kanda",
    title: "Friendship & Alliance",
    description:
      "Rama forms an important friendship with Sugriva and meets Hanuman.",
    lesson:
      "Trustworthy friendships can help people overcome difficult challenges.",
    topics: ["Friendship", "Trust", "Teamwork", "Leadership"],
  },
  {
    chapter: "Sundara Kanda",
    title: "Courage & Devotion",
    description:
      "Hanuman's journey demonstrates courage, intelligence, devotion and determination.",
    lesson:
      "Faith combined with effort, courage and intelligence can overcome obstacles.",
    topics: ["Courage", "Devotion", "Intelligence", "Determination"],
  },
  {
    chapter: "Yuddha Kanda",
    title: "Victory of Dharma",
    description:
      "The great conflict reaches its conclusion and the importance of righteousness is highlighted.",
    lesson:
      "Strength is most meaningful when guided by responsibility and righteousness.",
    topics: ["Leadership", "Dharma", "Courage", "Victory"],
  },
];

export default function RamayanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-orange-50">
      <section className="relative overflow-hidden border-b border-rose-100">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-rose-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-rose-50"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="mx-auto max-w-4xl py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-xl">
              <Heart size={30} />
            </div>

            <p className="mt-6 text-xs font-black tracking-[0.25em] text-rose-700">
              INDIAN EPIC • VALUES & STORIES
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              Ramayan
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore important sections of the Ramayan through simple
              explanations, inspiring stories and lessons about character,
              courage, duty and devotion.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-rose-100 px-4 py-2 text-xs font-bold text-rose-800">
                Major Kandas
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm">
                Dharma
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm">
                Courage
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm">
                Devotion
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black tracking-[0.2em] text-rose-700">
              BOOK CONTENT
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
              Kandas & Character Lessons
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Explore the major sections of the Ramayan and discover values
              that can inspire everyday life.
            </p>
          </div>

          <div className="rounded-full bg-rose-100 px-4 py-2 text-xs font-black text-rose-800">
            6 featured sections
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <article
              key={section.chapter}
              className="group overflow-hidden rounded-[2rem] border border-rose-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-rose-300 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                    <BookOpen size={20} />
                  </div>

                  <span className="rounded-full bg-rose-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-rose-700">
                    {section.chapter}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-slate-950">
                  {section.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {section.description}
                </p>

                <div className="mt-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                    Key Themes
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {section.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-rose-100 bg-rose-50 px-3 py-1.5 text-[11px] font-bold text-rose-800"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-rose-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-rose-700">
                    <Lightbulb size={15} />
                    Value to Learn
                  </div>

                  <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                    {section.lesson}
                  </p>
                </div>
              </div>

              <div className="border-t border-rose-100 bg-rose-50/40 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">
                    Section {index + 1}
                  </span>

                  <Link
                    href={`/books/ramayan/${sections[index].chapter
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="flex items-center gap-1 text-xs font-black text-rose-700"
                  >
                    Explore Values
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Duty",
              text: "Respect responsibilities and do what is right.",
            },
            {
              title: "Courage",
              text: "Face difficult situations with strength and patience.",
            },
            {
              title: "Friendship",
              text: "Build relationships based on trust and support.",
            },
            {
              title: "Devotion",
              text: "Stay committed to meaningful goals and values.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <Heart size={19} />
              </div>

              <h3 className="mt-4 font-black text-slate-950">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
