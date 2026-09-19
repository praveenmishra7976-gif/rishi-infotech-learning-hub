import Link from "next/link";
import { BookOpen, Download, Eye } from "lucide-react";

const notes = [
  {
    title: "Motion",
    chapter: "Chapter 1",
    premium: false,
  },
  {
    title: "Force",
    chapter: "Chapter 2",
    premium: false,
  },
  {
    title: "Newton's Laws",
    chapter: "Chapter 3",
    premium: true,
  },
  {
    title: "Work & Energy",
    chapter: "Chapter 4",
    premium: true,
  },
];

export default function PhysicNotesPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4">
            <BookOpen size={48} />
            <div>
              <h1 className="text-5xl font-black">Physic Notes</h1>
              <p className="text-blue-100 mt-2">
                Chapter-wise Physic Notes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-8">

          {notes.map((note) => (

            <div
              key={note.title}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
            >

              <div className="flex justify-between items-center">

                <div>
                  <p className="text-blue-600 font-bold">
                    {note.chapter}
                  </p>

                  <h2 className="text-2xl font-bold mt-2">
                    {note.title}
                  </h2>
                </div>

                {note.premium && (
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                    Premium
                  </span>
                )}

              </div>

              <div className="flex gap-4 mt-8">

                <Link
                  href="#"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <Eye size={18} />
                  View
                </Link>

                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex items-center justify-center gap-2">
                  <Download size={18} />
                  PDF
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}