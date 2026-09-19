"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    course: "Computer Science Student",
    review:
      "This website is amazing. Notes, quizzes and AI tools are available in one place.",
  },
  {
    name: "Priya Patel",
    course: "Engineering Student",
    review:
      "The mock tests and study notes helped me prepare for my exams very effectively.",
  },
  {
    name: "Amit Kumar",
    course: "School Student",
    review:
      "Beautiful design, easy to use and very fast. I love learning here.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-bold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="text-5xl font-black mt-3 text-slate-900">
            What Students Say
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Thousands of students trust Rishi Infotech Learning Hub.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-8"
            >

              <div className="flex gap-1 mb-5">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="text-gray-600 leading-8">
                "{review.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  {review.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    {review.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {review.course}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}