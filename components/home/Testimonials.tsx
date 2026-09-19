"use client";

import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "JEE Student",
    review:
      "This platform completely changed the way I study. The notes and quizzes are excellent.",
  },
  {
    name: "Priya Patel",
    role: "NEET Aspirant",
    review:
      "AI Teacher helped me clear difficult concepts in Physics and Chemistry within minutes.",
  },
  {
    name: "Amit Kumar",
    role: "Computer Student",
    review:
      "Developer tools and Computer Notes are amazing. Everything is available in one place.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 uppercase font-bold tracking-widest">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
            What Students Say
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-3xl mx-auto">
            Thousands of students trust Rishi Infotech Learning Hub for their
            studies.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((student) => (

            <div
              key={student.name}
              className="rounded-3xl bg-slate-50 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8"
            >

              <Quote className="text-blue-600" size={40} />

              <p className="mt-6 text-gray-600 leading-8">
                "{student.review}"
              </p>

              <div className="flex mt-6">

                {[1,2,3,4,5].map((i)=>(
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <div className="mt-8">

                <h3 className="font-bold text-xl text-slate-900">
                  {student.name}
                </h3>

                <p className="text-gray-500">
                  {student.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}