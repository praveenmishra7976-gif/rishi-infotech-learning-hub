import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  PlayCircle,
  Video,
} from "lucide-react";

const videos = [
  {
    title: "Introduction to Computer",
    duration: "15 min",
    href: "/learn/computer/computer-fundamentals",
  },
  {
    title: "Computer Hardware",
    duration: "18 min",
    href: "/learn/computer/computer-hardware",
  },
  {
    title: "Computer Software",
    duration: "20 min",
    href: "/learn/computer/computer-software",
  },
  {
    title: "Operating System",
    duration: "25 min",
    href: "/learn/computer/operating-system",
  },
];

export default function ComputerVideosPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-red-600 text-white py-14">

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
              <Video size={32} />
            </div>

            <div>

              <h1 className="text-4xl md:text-5xl font-black">
                Computer Video Classes
              </h1>

              <p className="mt-2 text-red-100">
                Learn Computer with Video Lectures
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-7 mb-8">

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
              <PlayCircle size={26} />
            </div>

            <div>

              <h2 className="text-2xl font-black text-gray-900">
                Video Classes Coming Soon
              </h2>

              <p className="mt-2 text-gray-600 leading-7">
                Video lectures have not been uploaded yet. Until they are
                available, you can study the complete chapter lessons online.
              </p>

            </div>

          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-7">

          {videos.map((video) => (

            <article
              key={video.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7"
            >

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <PlayCircle size={34} />
                </div>

                <div>

                  <h2 className="text-2xl font-black text-gray-900">
                    {video.title}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Duration: {video.duration}
                  </p>

                </div>

              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">

                <Link
                  href={video.href}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition"
                >
                  <BookOpen size={18} />
                  Study Chapter
                </Link>

                <button
                  type="button"
                  disabled
                  className="flex-1 bg-gray-100 text-gray-400 py-3 rounded-xl font-bold cursor-not-allowed"
                >
                  Video Coming Soon
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}
