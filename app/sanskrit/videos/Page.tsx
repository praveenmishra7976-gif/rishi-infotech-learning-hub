import { PlayCircle } from "lucide-react";

const videos = [
  {
    title: "Sanskrit Grammar",
    duration: "15 min",
  },
  {
    title: "Sandhi",
    duration: "18 min",
  },
  {
    title: "Samas",
    duration: "20 min",
  },
  {
    title: "Shabd Roop",
    duration: "25 min",
  },
  {
    title: "Dhatu Roop",
    duration: "25 min",
  },
];

export default function sanskritVideosPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black">
            sanskrit Video Classes
          </h1>

          <p className="mt-3 text-red-100">
            Learn sanskrit with HD Video Lectures
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-8">

          {videos.map((video) => (

            <div
              key={video.title}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition"
            >

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white">
                  <PlayCircle size={34} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    {video.title}
                  </h2>

                  <p className="text-gray-500">
                    Duration : {video.duration}
                  </p>
                </div>

              </div>

              <button className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold">
                Watch Video
              </button>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}