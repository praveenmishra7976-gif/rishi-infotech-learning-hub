"use client";

import {
  Users,
  BookOpen,
  FileQuestion,
  Video,
  Download,
  TrendingUp,
  Eye,
  Clock,
} from "lucide-react";

export default function AnalyticsPage() {

  const cards = [
    {
      title: "Total Users",
      value: "10,254",
      icon: <Users size={34} />,
      color: "bg-blue-600",
    },
    {
      title: "Study Notes",
      value: "523",
      icon: <BookOpen size={34} />,
      color: "bg-green-600",
    },
    {
      title: "Quiz Questions",
      value: "8,560",
      icon: <FileQuestion size={34} />,
      color: "bg-yellow-500",
    },
    {
      title: "Videos",
      value: "280",
      icon: <Video size={34} />,
      color: "bg-red-500",
    },
    {
      title: "Downloads",
      value: "740",
      icon: <Download size={34} />,
      color: "bg-purple-600",
    },
    {
      title: "Monthly Visitors",
      value: "120K",
      icon: <Eye size={34} />,
      color: "bg-cyan-600",
    },
    {
      title: "Weekly Growth",
      value: "+18%",
      icon: <TrendingUp size={34} />,
      color: "bg-emerald-600",
    },
    {
      title: "Average Session",
      value: "14m",
      icon: <Clock size={34} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <main>

      <h1 className="text-5xl font-black">

        Analytics Dashboard

      </h1>

      <p className="text-gray-500 mt-3">

        Overall website statistics

      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-12">

        {cards.map((card, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8"
          >

            <div
              className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white`}
            >

              {card.icon}

            </div>

            <h2 className="mt-6 text-gray-500">

              {card.title}

            </h2>

            <h1 className="text-4xl font-black mt-2">

              {card.value}

            </h1>

          </div>

        ))}

      </div>

      <div className="grid lg:grid-cols-2 gap-10 mt-12">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-black mb-6">

            Website Performance

          </h2>

          <div className="space-y-5">

            <div>

              <div className="flex justify-between">

                <span>Users</span>

                <span>92%</span>

              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full mt-2">

                <div className="w-[92%] h-3 bg-blue-600 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between">

                <span>Quiz Activity</span>

                <span>86%</span>

              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full mt-2">

                <div className="w-[86%] h-3 bg-green-600 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between">

                <span>Downloads</span>

                <span>74%</span>

              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full mt-2">

                <div className="w-[74%] h-3 bg-purple-600 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between">

                <span>Video Watch Time</span>

                <span>63%</span>

              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full mt-2">

                <div className="w-[63%] h-3 bg-red-500 rounded-full"></div>

              </div>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-black mb-6">

            Recent Reports

          </h2>

          <div className="space-y-5">

            <div className="border-b pb-4">
              📈 Monthly users increased by 18%
            </div>

            <div className="border-b pb-4">
              📚 52 new notes uploaded
            </div>

            <div className="border-b pb-4">
              🎥 14 new videos published
            </div>

            <div className="border-b pb-4">
              ❓ 240 quiz questions added
            </div>

            <div>
              📄 1200 PDFs downloaded
            </div>

          </div>

        </div>

      </div>

    </main>
  );

}