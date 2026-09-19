import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  Eye,
  FileText,
} from "lucide-react";

const notes = [
  {
    title: "Atoms and Molecules",
    chapter: "Chapter 1",
    href: "/learn/chemistry/atoms-and-molecules",
  },
  {
    title: "Periodic Table",
    chapter: "Chapter 2",
    href: "/learn/chemistry/periodic-table",
  },
  {
    title: "Chemical Reactions",
    chapter: "Chapter 3",
    href: "/learn/chemistry/chemical-reactions",
  },
  {
    title: "Acids, Bases and Salts",
    chapter: "Chapter 4",
    href: "/learn/chemistry/acids-bases-and-salts",
  },
  {
    title: "Carbon and Its Compounds",
    chapter: "Chapter 5",
    href: "/learn/chemistry/carbon-and-its-compounds",
  },
  {
    title: "Metals and Non-Metals",
    chapter: "Chapter 6",
    href: "/learn/chemistry/metals-and-non-metals",
  },
];

export default function ChemistryNotesPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
              <BookOpen size={32} />
            </div>

            <div>

              <div className="text-sm font-bold text-blue-100">
                CHEMISTRY LEARNING
              </div>

              <h1 className="mt-2 text-4xl md:text-6xl font-black">
                Chemistry Notes
              </h1>

              <p className="mt-4 text-lg md:text-xl text-blue-100">
                Chapter-wise Chemistry notes and study material.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* NOTICE */}
      <section className="max-w-7xl mx-auto px-6 pt-10">

        <div className="rounded-3xl bg-white border border-blue-100 shadow-sm p-6">

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <FileText size={24} />
            </div>

            <div>

              <h2 className="text-xl font-black text-gray-900">
                Read notes online
              </h2>

              <p className="mt-2 text-gray-600 leading-7">
                Select a chapter to open the complete Chemistry
                lesson. Downloadable PDF versions will be added later.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* NOTES */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">

        <div className="grid md:grid-cols-2 gap-6">

          {notes.map((note, index) => (

            <article
              key={note.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 hover:shadow-xl transition"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div>

                    <p className="text-blue-600 font-black text-sm">
                      {note.chapter}
                    </p>

                    <h2 className="mt-1 text-2xl font-black text-gray-900">
                      {note.title}
                    </h2>

                  </div>

                </div>

                <CheckCircle2
                  className="text-green-500 shrink-0"
                  size={22}
                />

              </div>

              <div className="mt-7 grid sm:grid-cols-2 gap-3">

                <Link
                  href={note.href}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-bold transition"
                >
                  <Eye size={18} />
                  Read Notes
                </Link>

                <div className="bg-gray-100 text-gray-400 py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-bold cursor-not-allowed">
                  <Download size={18} />
                  PDF Soon
                </div>

              </div>

            </article>

          ))}

        </div>

        <div className="mt-10 text-center">

          <Link
            href="/learn/chemistry"
            className="inline-flex items-center gap-2 text-blue-700 font-black hover:text-blue-900"
          >
            View All Chemistry Chapters
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}