import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Heart, Lightbulb } from "lucide-react";

const sections: Record<
  string,
  {
    chapter: string;
    title: string;
    description: string;
    lesson: string;
    topics: string[];
  }
> = {
  "bala-kanda": {
    chapter: "Bala Kanda",
    title: "The Beginning",
    description:
      "The early life of Rama, his education, values and the beginning of his journey.",
    lesson:
      "Strong character is built through learning, discipline and good guidance.",
    topics: ["Childhood", "Learning", "Discipline", "Character"],
  },

  "ayodhya-kanda": {
    chapter: "Ayodhya Kanda",
    title: "Duty & Sacrifice",
    description:
      "Rama accepts responsibility and faces difficult circumstances with dignity.",
    lesson:
      "Sometimes doing what is right requires patience and personal sacrifice.",
    topics: ["Duty", "Sacrifice", "Patience", "Responsibility"],
  },

  "aranya-kanda": {
    chapter: "Aranya Kanda",
    title: "Life in the Forest",
    description:
      "Rama, Sita and Lakshmana face challenges while living in the forest.",
    lesson:
      "Difficult situations can teach courage, resilience and self-control.",
    topics: ["Courage", "Resilience", "Family", "Self-control"],
  },

  "kishkindha-kanda": {
    chapter: "Kishkindha Kanda",
    title: "Friendship & Alliance",
    description:
      "Rama forms an important friendship with Sugriva and meets Hanuman.",
    lesson:
      "Trustworthy friendships can help people overcome difficult challenges.",
    topics: ["Friendship", "Trust", "Teamwork", "Leadership"],
  },

  "sundara-kanda": {
    chapter: "Sundara Kanda",
    title: "Courage & Devotion",
    description:
      "Hanuman's journey demonstrates courage, intelligence, devotion and determination.",
    lesson:
      "Faith combined with effort, courage and intelligence can overcome obstacles.",
    topics: ["Courage", "Devotion", "Intelligence", "Determination"],
  },

  "yuddha-kanda": {
    chapter: "Yuddha Kanda",
    title: "Victory of Dharma",
    description:
      "The great conflict reaches its conclusion and the importance of righteousness is highlighted.",
    lesson:
      "Strength is most meaningful when guided by responsibility and righteousness.",
    topics: ["Leadership", "Dharma", "Courage", "Victory"],
  },
};

const order = [
  "bala-kanda",
  "ayodhya-kanda",
  "aranya-kanda",
  "kishkindha-kanda",
  "sundara-kanda",
  "yuddha-kanda",
];

export default async function RamayanSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = sections[section];

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-rose-50 px-5">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
            <BookOpen size={30} />
          </div>

          <h1 className="mt-6 text-3xl font-black text-slate-950">
            Section Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            The section you are trying to open does not exist yet.
          </p>

          <Link
            href="/books/ramayan"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-3 font-bold text-white transition hover:bg-rose-700"
          >
            <ArrowLeft size={17} />
            Back to Ramayan
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = order.indexOf(section);

  const previousSection =
    currentIndex > 0 ? order[currentIndex - 1] : null;

  const nextSection =
    currentIndex < order.length - 1 ? order[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-orange-50">

      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-6">

        <Link
          href="/books/ramayan"
          className="inline-flex items-center gap-2 rounded-xl border border-rose-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-rose-50"
        >
          <ArrowLeft size={17} />
          Back to Ramayan
        </Link>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-rose-200 bg-white shadow-sm">

          <div className="bg-gradient-to-r from-rose-600 to-orange-500 px-7 py-10 text-white sm:px-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur">
              <Heart size={27} />
            </div>

            <p className="mt-7 text-xs font-black tracking-[0.2em] text-rose-100">
              {data.chapter}
            </p>

            <h1 className="mt-3 text-3xl font-black sm:text-5xl">
              {data.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-rose-50">
              {data.description}
            </p>

          </div>

          <div className="p-7 sm:p-10">

            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Key Themes
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {data.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-rose-50 px-4 py-2 text-xs font-bold text-rose-800"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-rose-50 p-6">

              <div className="flex items-center gap-2 text-sm font-black text-rose-700">
                <Lightbulb size={18} />
                Value to Learn
              </div>

              <p className="mt-3 text-base leading-7 text-slate-700">
                {data.lesson}
              </p>

            </div>

          </div>

        </section>

        <section className="mt-6 rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-10">

          <div className="flex items-center gap-3">
            <BookOpen className="text-rose-600" size={24} />

            <h2 className="text-2xl font-black text-slate-950">
              Section Learning
            </h2>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            Explore this section as a source of reflection on courage, duty,
            friendship, devotion, leadership and character.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-rose-700">
                Section Focus
              </p>

              <p className="mt-2 font-bold text-slate-700">
                {data.title}
              </p>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-rose-700">
                Character Value
              </p>

              <p className="mt-2 text-sm font-bold text-slate-700">
                {data.lesson}
              </p>
            </div>

          </div>

        </section>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">

          {previousSection ? (
            <Link
              href={`/books/ramayan/${previousSection}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-rose-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-rose-50"
            >
              <ArrowLeft size={17} />
              Previous Section
            </Link>
          ) : (
            <div />
          )}

          {nextSection ? (
            <Link
              href={`/books/ramayan/${nextSection}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-black text-white transition hover:bg-rose-700"
            >
              Next Section
              <ArrowRight size={17} />
            </Link>
          ) : (
            <Link
              href="/books/ramayan"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-black text-white transition hover:bg-rose-700"
            >
              Finish Ramayan
              <ArrowRight size={17} />
            </Link>
          )}

        </div>

      </div>
    </main>
  );
}
