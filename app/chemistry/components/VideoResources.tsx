import { ExternalLink, PlayCircle } from "lucide-react";

const videos = [
  {
    title: "Some Basic Concepts of Chemistry",
    query: "some basic concepts of chemistry class 11",
  },
  {
    title: "Structure of Atom",
    query: "structure of atom chemistry class 11",
  },
  {
    title: "Classification of Elements",
    query: "classification of elements periodic table chemistry class 11",
  },
  {
    title: "Chemical Bonding",
    query: "chemical bonding chemistry class 11",
  },
  {
    title: "States of Matter",
    query: "states of matter chemistry class 11",
  },
  {
    title: "Thermodynamics",
    query: "thermodynamics chemistry class 11",
  },
];

export default function VideoResources() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center">
          <PlayCircle
            className="text-red-600"
            size={30}
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Chemistry Video Resources
          </h2>

          <p className="text-gray-500 mt-1">
            Search YouTube for Chemistry lessons related to this course.
          </p>
        </div>

      </div>

      <div className="space-y-4">

        {videos.map((video) => {
          const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
            video.query
          )}`;

          return (
            <a
              key={video.title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 p-5 rounded-xl border border-gray-200 hover:bg-red-50 hover:border-red-200 transition"
            >

              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {video.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Open Chemistry video search
                </p>
              </div>

              <ExternalLink
                className="text-red-600 shrink-0"
                size={20}
              />

            </a>
          );
        })}

      </div>

    </div>
  );
}
