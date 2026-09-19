import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Download,
  Eye,
  FileText,
  Lock,
} from "lucide-react";

const notes = [
  {
    title: "Introduction to Computer",
    chapter: "Chapter 1",
    href: "/learn/computer/computer-fundamentals",
    premium: false,
  },
  {
    title: "Computer Hardware",
    chapter: "Chapter 2",
    href: "/learn/computer/computer-hardware",
    premium: false,
  },
  {
    title: "Computer Software",
    chapter: "Chapter 3",
    href: "/learn/computer/computer-software",
    premium: true,
  },
  {
    title: "Operating System",
    chapter: "Chapter 4",
    href: "/learn/computer/operating-system",
    premium: true,
  },
];

export default function ComputerNotesPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-blue-700 text-white py-14">

        <div className="max-w-7xl mx-auto px-6">

          <Link
            href="/computer"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Computer
          </Link>

          <div className="mt-8 flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center">
              <BookOpen size={32} />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-black">
                Computer Notes
              </h1>

              <p className="text-blue-100 mt-2">
                Chapter-wise Computer Notes
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-2 gap-7">

          {notes.map((note) => (

            <article
              key={note.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 hover:shadow-xl transition"
            >

              <div className="flex justify-between items-start gap-4">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <FileText size={24} />
                  </div>

                  <div>

                    <p className="text-blue-600 font-bold">
                      {note.chapter}
                    </p>

                    <h2 className="text-2xl font-black text-gray-900 mt-2">
                      {note.title}
                    </h2>

                  </div>

                </div>

                {note.premium && (
                  <span className="inline-flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    <Lock size={13} />
                    Premium
                  </span>
                )}

              </div>

              <p className="mt-5 text-gray-600 leading-7">
                Study this chapter online and review its important concepts,
                key points and practice questions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-7">

                <Link
                  href={note.href}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold transition"
                >
                  <Eye size={18} />
                  View Notes
                </Link>

                <button
                  type="button"
                  disabled
                  className="flex-1 bg-gray-100 text-gray-400 py-3 rounded-xl flex items-center justify-center gap-2 font-bold cursor-not-allowed"
                >
                  <Download size={18} />
                  PDF Coming Soon
                </button>

              </div>

            </article>

          ))}

        </div>

        <div className="mt-10 rounded-3xl bg-white border border-gray-100 shadow-sm p-7 text-center">

          <BookOpen
            className="mx-auto text-blue-600"
            size={36}
          />

          <h2 className="mt-4 text-2xl font-black text-gray-900">
            More Computer Notes Coming Soon
          </h2>

          <p className="mt-2 text-gray-500 max-w-2xl mx-auto leading-7">
            More chapter notes and downloadable study material will be added
            as the learning platform grows.
          </p>

        </div>

      </section>

    </main>
  );
}
