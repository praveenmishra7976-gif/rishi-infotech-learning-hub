import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const chapters = [
  {
    chapter: "Chapter 1",
    title: "Arjuna Vishada Yoga",
    description:
      "Arjuna faces a deep moral conflict before the great battle and seeks guidance.",
    lesson:
      "Difficult situations can make us question our responsibilities and choices.",
    topics: ["Arjuna's dilemma", "Moral conflict", "Responsibility", "Guidance"],
  },
  {
    chapter: "Chapter 2",
    title: "Sankhya Yoga",
    description:
      "Krishna begins teaching Arjuna about the self, duty, wisdom and disciplined action.",
    lesson:
      "Focus on your duty and sincere effort rather than being controlled by the result.",
    topics: ["Self-knowledge", "Duty", "Wisdom", "Balanced mind"],
  },
  {
    chapter: "Chapter 3",
    title: "Karma Yoga",
    description:
      "The path of selfless action and performing one's responsibilities is explained.",
    lesson:
      "Good action performed with the right intention can become a path of growth.",
    topics: ["Selfless action", "Responsibility", "Discipline", "Intention"],
  },
  {
    chapter: "Chapter 4",
    title: "Jnana Karma Sannyasa Yoga",
    description:
      "Knowledge, action and the importance of understanding one's purpose are discussed.",
    lesson:
      "True knowledge helps us understand the meaning behind our actions.",
    topics: ["Knowledge", "Purpose", "Action", "Understanding"],
  },
  {
    chapter: "Chapter 5",
    title: "Karma Sannyasa Yoga",
    description:
      "The relationship between disciplined action and renunciation is explored.",
    lesson:
      "Inner discipline and a balanced mind are important for a meaningful life.",
    topics: ["Discipline", "Renunciation", "Balance", "Peace"],
  },
  {
    chapter: "Chapter 6",
    title: "Dhyana Yoga",
    description:
      "The practice of meditation, concentration and control of the mind is explained.",
    lesson:
      "A disciplined mind becomes a powerful tool for learning and self-improvement.",
    topics: ["Meditation", "Concentration", "Mind control", "Self-improvement"],
  },
  {
    chapter: "Chapter 7",
    title: "Jnana Vijnana Yoga",
    description:
      "Knowledge and deeper understanding of the nature of reality are explored.",
    lesson:
      "Learning becomes meaningful when knowledge is combined with understanding.",
    topics: ["Knowledge", "Understanding", "Reality", "Wisdom"],
  },
  {
    chapter: "Chapter 8",
    title: "Akshara Brahma Yoga",
    description:
      "The chapter explores the eternal reality, remembrance and the meaning of spiritual focus.",
    lesson:
      "What we consistently remember and value can shape the direction of our life.",
    topics: ["Eternal reality", "Focus", "Remembrance", "Purpose"],
  },
  {
    chapter: "Chapter 9",
    title: "Raja Vidya Raja Guhya Yoga",
    description:
      "The highest knowledge and the importance of sincere devotion are explained.",
    lesson:
      "Sincere learning and devotion can help develop humility and inner strength.",
    topics: ["Knowledge", "Devotion", "Faith", "Humility"],
  },
  {
    chapter: "Chapter 10",
    title: "Vibhuti Yoga",
    description:
      "Krishna describes divine manifestations and qualities that inspire wonder and reflection.",
    lesson:
      "Recognizing excellence can inspire gratitude, respect and continuous learning.",
    topics: ["Excellence", "Wonder", "Gratitude", "Reflection"],
  },
  {
    chapter: "Chapter 11",
    title: "Vishvarupa Darshana Yoga",
    description:
      "Arjuna receives a profound vision of the universal form.",
    lesson:
      "A broader perspective can help us understand our place within something greater.",
    topics: ["Universal vision", "Perspective", "Awe", "Understanding"],
  },
  {
    chapter: "Chapter 12",
    title: "Bhakti Yoga",
    description:
      "The path of devotion and the qualities of a compassionate and steady person are described.",
    lesson:
      "Kindness, patience and sincere dedication strengthen relationships and character.",
    topics: ["Devotion", "Kindness", "Patience", "Compassion"],
  },
  {
    chapter: "Chapter 13",
    title: "Kshetra Kshetrajna Vibhaga Yoga",
    description:
      "The distinction between the field of experience and the knower of that field is explored.",
    lesson:
      "Self-awareness helps us understand our thoughts, actions and experiences.",
    topics: ["Self-awareness", "Knowledge", "Experience", "Reflection"],
  },
  {
    chapter: "Chapter 14",
    title: "Gunatraya Vibhaga Yoga",
    description:
      "The three qualities of nature and their influence on human behavior are discussed.",
    lesson:
      "Understanding our habits can help us develop greater balance and self-control.",
    topics: ["Mind", "Habits", "Balance", "Self-control"],
  },
  {
    chapter: "Chapter 15",
    title: "Purushottama Yoga",
    description:
      "The chapter reflects on the nature of the self, the world and the highest reality.",
    lesson:
      "A deeper understanding of values can help us choose a meaningful direction in life.",
    topics: ["Self", "Values", "Purpose", "Wisdom"],
  },
  {
    chapter: "Chapter 16",
    title: "Daivasura Sampad Vibhaga Yoga",
    description:
      "Positive and negative qualities of human character are compared.",
    lesson:
      "Good character grows through truthfulness, courage, discipline and compassion.",
    topics: ["Character", "Truth", "Courage", "Compassion"],
  },
  {
    chapter: "Chapter 17",
    title: "Shraddhatraya Vibhaga Yoga",
    description:
      "Different forms of faith and their influence on actions and choices are discussed.",
    lesson:
      "Our beliefs influence our choices, habits and the way we approach life.",
    topics: ["Faith", "Choices", "Habits", "Discipline"],
  },
  {
    chapter: "Chapter 18",
    title: "Moksha Sannyasa Yoga",
    description:
      "The final chapter brings together teachings on duty, knowledge, action, devotion and liberation.",
    lesson:
      "A meaningful life combines responsibility, wisdom, sincere effort and inner balance.",
    topics: ["Duty", "Wisdom", "Action", "Liberation"],
  },
];

export default function BhagavadGitaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      <section className="relative overflow-hidden border-b border-amber-100">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-amber-50"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="mx-auto max-w-4xl py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-xl">
              <Sparkles size={30} />
            </div>

            <p className="mt-6 text-xs font-black tracking-[0.25em] text-amber-700">
              SACRED BOOK • WISDOM
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              Bhagavad Gita
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore the teachings of the Bhagavad Gita through simple
              explanations, important chapters, key topics and practical life
              lessons.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-amber-100 px-4 py-2 text-xs font-bold text-amber-800">
                18 Chapters
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm">
                Wisdom
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm">
                Duty
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm">
                Self-Discipline
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black tracking-[0.2em] text-amber-700">
              BOOK CONTENT
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
              All 18 Chapters
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Select a chapter to explore its ideas, important topics and
              lessons for everyday life.
            </p>
          </div>

          <div className="rounded-full bg-amber-100 px-4 py-2 text-xs font-black text-amber-800">
            18 chapters
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.chapter}
              className="group overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <BookOpen size={20} />
                  </div>

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-amber-700">
                    {chapter.chapter}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-slate-950">
                  {chapter.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {chapter.description}
                </p>

                <div className="mt-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                    Key Topics
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {chapter.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5 text-[11px] font-bold text-amber-800"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-amber-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-700">
                    <Lightbulb size={15} />
                    Life Lesson
                  </div>

                  <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                    {chapter.lesson}
                  </p>
                </div>
              </div>

              <div className="border-t border-amber-100 bg-amber-50/40 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">
                    Chapter {index + 1}
                  </span>

                  <Link
                    href={`/books/bhagavad-gita/chapter-${index + 1}`}
                    className="flex items-center gap-1 text-xs font-black text-amber-700 transition hover:text-amber-900"
                  >
                    Read Chapter
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-100 via-white to-orange-50 p-7 sm:p-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg">
              <Lightbulb size={23} />
            </div>

            <div>
              <p className="text-[10px] font-black tracking-[0.2em] text-amber-700">
                REFLECTION
              </p>

              <h3 className="mt-2 text-xl font-black text-slate-950">
                Learn with purpose, discipline and balance.
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Study these chapters as a source of reflection on
                responsibility, effort, knowledge and maintaining a balanced
                mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
