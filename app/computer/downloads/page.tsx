import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Download,
  FileText,
  Sparkles,
} from "lucide-react";

const files = [
  {
    title: "Introduction to Computer",
    description: "Notes covering basic computer concepts and fundamentals.",
    chapter: "Chapter 1",
  },
  {
    title: "Computer Hardware",
    description: "Learn about CPU, motherboard, input/output devices and hardware.",
    chapter: "Chapter 2",
  },
  {
    title: "Computer Software",
    description: "Understand system software, application software and utilities.",
    chapter: "Chapter 3",
  },
  {
    title: "Operating System",
    description: "Learn operating systems, their functions and examples.",
    chapter: "Chapter 4",
  },
];

export default function ComputerDownloadsPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-green-600 text-white py-14">
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
              <Download size={32} />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-black">
                Computer Downloads
              </h1>

              <p className="mt-2 text-green-100">
                Computer Notes & Learning Resources
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14">

        <div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-7 mb-8">

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
              <Sparkles size={25} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900">
                Download Resources Coming Soon
              </h2>

              <p className="mt-2 text-gray-600 leading-7">
                PDF files have not been uploaded yet. You can read the
                corresponding Computer chapters online while the downloadable
                resources are being prepared.
              </p>
            </div>

          </div>

        </div>

        <div className="space-y-5">

          {files.map((file) => (

            <div
              key={file.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-7"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <FileText size={24} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-green-600">
                      {file.chapter}
                    </p>

                    <h2 className="mt-1 text-xl font-black text-gray-900">
                      {file.title}
                    </h2>

                    <p className="mt-2 text-gray-500">
                      {file.description}
                    </p>
                  </div>

                </div>

                <div className="flex flex-wrap gap-3">

                  <Link
                    href={
                      file.chapter === "Chapter 1"
                        ? "/learn/computer/computer-fundamentals"
                        : file.chapter === "Chapter 2"
                        ? "/learn/computer/computer-hardware"
                        : file.chapter === "Chapter 3"
                        ? "/learn/computer/computer-software"
                        : "/learn/computer/operating-system"
                    }
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold transition"
                  >
                    <BookOpen size={18} />
                    Read Online
                  </Link>

                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-400 px-5 py-3 rounded-xl font-bold cursor-not-allowed"
                  >
                    <Download size={18} />
                    PDF Coming Soon
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
