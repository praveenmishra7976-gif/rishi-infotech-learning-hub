import { PlayCircle } from "lucide-react";

const videos = [
  {
    title: "Physical World Introduction",
    url: "https://www.youtube.com/results?search_query=physical+world+class+11",
  },
  {
    title: "Units and Measurements",
    url: "https://www.youtube.com/results?search_query=units+and+measurements+class+11",
  },
  {
    title: "Motion in One Dimension",
    url: "https://www.youtube.com/results?search_query=motion+in+one+dimension+physics",
  },
  {
    title: "Newton's Laws of Motion",
    url: "https://www.youtube.com/results?search_query=newtons+laws+of+motion",
  },
  {
    title: "Work, Energy & Power",
    url: "https://www.youtube.com/results?search_query=work+energy+power+physics",
  },
];

export default function VideoResources() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">
      <div className="flex items-center gap-3 mb-8">
        <PlayCircle className="text-red-600" size={34} />
        <h2 className="text-3xl font-bold">
          Video Resources
        </h2>
      </div>

      <div className="space-y-4">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-xl border hover:bg-red-50 transition"
          >
            <h3 className="font-semibold text-lg">
              {video.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}