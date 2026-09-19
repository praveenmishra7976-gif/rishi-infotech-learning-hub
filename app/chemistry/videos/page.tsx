import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock,
  PlayCircle,
  Video,
} from "lucide-react";

const videos = [
  {
    title: "Atoms and Molecules",
    duration: "Video Coming Soon",
    href: "/learn/chemistry/atoms-and-molecules",
  },
  {
    title: "Periodic Table",
    duration: "Video Coming Soon",
    href: "/learn/chemistry/periodic-table",
  },
  {
    title: "Chemical Reactions",
    duration: "Video Coming Soon",
    href: "/learn/chemistry/chemical-reactions",
  },
  {
    title: "Carbon and Its Compounds",
    duration: "Video Coming Soon",
    href: "/learn/chemistry/carbon-and-its-compounds",
  },
];

export default function ChemistryVideosPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-red-700 via-rose-600 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
              <Video size={32} />
            </div>

            <div>

              <div className="text-sm font-bold text-red-100">
                CHEMISTRY VIDEO CLASSES
              </div>

              <h1 className="mt-2 text-4xl md:text-6xl font-black">
                Chemistry Videos
              </h1>

              <p className="mt-4 text-lg md:text-xl text-red-100">
                Chemistry video lessons will be added to the platform.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* NOTICE */}
      <section className="max-w-7xl mx-auto px-6 pt-10">

        <div className="rounded-3xl bg-white border border-red-100 shadow-sm p-6 md:p-8">

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 shrink-0 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
              <PlayCircle size={25} />
            </div>

            <div>

              <h2 className="text-xl md:text-2xl font-black text-gray-900">
                Video lectures are coming soon
              </h2>

              <p className="mt-2 text-gray-600 leading-7">
                Actual Chemistry video lectures will be connected here
                once the video resources are available. You can study the
                corresponding chapter online right now.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* VIDEOS */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">

        <div className="grid md:grid-cols-2 gap-6">

          {videos.map((video, index) => (

            <article
              key={video.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 hover:shadow-xl transition"
            >

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 shrink-0 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                  <PlayCircle size={34} />
                </div>

                <div>

                  <p className="text-red-600 font-black text-sm">
                    LESSON {index + 1}
                  </p>

                  <h2 className="mt-1 text-2xl font-black text-gray-900">
                    {video.title}
                  </h2>

                  <p className="mt-2 flex items-center gap-2 text-gray-500 text-sm font-semibold">
                    <Clock size={16} />
                    {video.duration}
                  </p>

                </div>

              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">

                <div className="flex-1 bg-gray-100 text-gray-400 py-3 rounded-xl flex items-center justify-center gap-2 font-bold cursor-not-allowed">
                  <PlayCircle size={18} />
                  Video Coming Soon
                </div>

                <Link
                  href={video.href}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold transition"
                >
                  <BookOpen size={18} />
                  Study Chapter
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* BACK TO CHEMISTRY */}
      <section className="max-w-7xl mx-auto px-6 pb-16 text-center">

        <Link
          href="/learn/chemistry"
          className="inline-flex items-center gap-2 text-red-700 font-black hover:text-red-900"
        >
          Explore All Chemistry Chapters
          <ArrowRight size={18} />
        </Link>

      </section>

    </main>
  );
}