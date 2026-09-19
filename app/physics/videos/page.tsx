import { PlayCircle } from "lucide-react";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

interface Video {
  id: string;
  title: string;
  subject: string;
  duration: string | null;
  video_url: string;
}

export default async function PhysicVideosPage() {
  const { data: videos, error } = await adminSupabase
    .from("videos")
    .select("id, title, subject, duration, video_url")
    .ilike("subject", "physics")
    .order("created_at", {
      ascending: false,
    });

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black">
            Physics Video Classes
          </h1>

          <p className="mt-3 text-red-100">
            Learn Physics with HD Video Lectures
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-6">
            <h2 className="font-bold text-lg">
              Unable to load videos
            </h2>

            <p className="mt-2">
              {error.message}
            </p>
          </div>
        )}

        {!error && (!videos || videos.length === 0) && (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

            <PlayCircle
              size={60}
              className="mx-auto text-red-600"
            />

            <h2 className="text-3xl font-black mt-6">
              No Physics Videos Available
            </h2>

            <p className="text-gray-500 mt-3">
              New video lectures will appear here when they are added.
            </p>

          </div>
        )}

        {videos && videos.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-8">

            {videos.map((video: Video) => (

              <div
                key={video.id}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white shrink-0">
                    <PlayCircle size={34} />
                  </div>

                  <div className="min-w-0">

                    <h2 className="text-2xl font-bold text-gray-900">
                      {video.title}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Duration:{" "}
                      {video.duration || "Not specified"}
                    </p>

                  </div>

                </div>

                <div className="mt-8 aspect-video rounded-2xl overflow-hidden bg-black">

                  <iframe
                    src={getYouTubeEmbedUrl(video.video_url)}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />

                </div>

                <a
                  href={video.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-5 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition"
                >
                  <PlayCircle size={20} />
                  Watch on YouTube
                </a>

              </div>

            ))}

          </div>
        )}

      </section>

    </main>
  );
}

function getYouTubeEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);

    let videoId = "";

    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.replace("/", "");
    }

    if (
      parsed.hostname.includes("youtube.com") &&
      parsed.pathname === "/watch"
    ) {
      videoId = parsed.searchParams.get("v") || "";
    }

    if (
      parsed.hostname.includes("youtube.com") &&
      parsed.pathname.startsWith("/shorts/")
    ) {
      videoId = parsed.pathname.split("/")[2] || "";
    }

    if (
      parsed.hostname.includes("youtube.com") &&
      parsed.pathname.startsWith("/embed/")
    ) {
      videoId = parsed.pathname.split("/")[2] || "";
    }

    if (!videoId) {
      return url;
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return url;
  }
}
