import Link from "next/link";

const topics = [
  {
    title: "India GK",
    icon: "🇮🇳",
    description: "Important facts about India, states, cities and culture.",
  },
  {
    title: "World GK",
    icon: "🌍",
    description: "Countries, capitals, currencies and important world facts.",
  },
  {
    title: "Science GK",
    icon: "🔬",
    description: "Interesting and useful science facts.",
  },
  {
    title: "History",
    icon: "🏛️",
    description: "Important historical events, people and civilizations.",
  },
  {
    title: "Geography",
    icon: "🗺️",
    description: "Learn about Earth, rivers, mountains and countries.",
  },
  {
    title: "Current Affairs",
    icon: "📰",
    description: "Stay updated with important current events.",
  },
];

export default function GeneralKnowledgePage() {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <Link
            href="/learn"
            className="text-sm font-medium text-blue-100 hover:text-white"
          >
            ← Back to Learning
          </Link>

          <div className="mt-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              🌍
            </div>

            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                General Knowledge
              </h1>

              <p className="mt-3 max-w-2xl text-blue-50">
                Improve your general knowledge with useful facts,
                current affairs, history, geography and science.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          GK Topics
        </h2>

        <p className="mt-2 text-gray-600">
          Explore different categories of general knowledge.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {topic.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {topic.description}
              </p>

              <button
                type="button"
                className="mt-5 font-semibold text-blue-600"
              >
                Explore Topic →
              </button>
            </div>
          ))}

        </div>
      </section>

      <section className="bg-gray-50 py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-center text-3xl font-bold text-gray-900">
            Improve Your Knowledge
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-4xl">📰</div>
              <h3 className="mt-4 font-bold">Daily Updates</h3>
              <p className="mt-2 text-sm text-gray-600">
                Keep up with important events.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-4xl">🧠</div>
              <h3 className="mt-4 font-bold">Interesting Facts</h3>
              <p className="mt-2 text-sm text-gray-600">
                Learn something new every day.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-4xl">❓</div>
              <h3 className="mt-4 font-bold">Quiz</h3>
              <p className="mt-2 text-sm text-gray-600">
                Test your general knowledge.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl">

          <h2 className="text-3xl font-bold text-white">
            Test Your GK
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Challenge yourself with general knowledge questions.
          </p>

          <Link
            href="/practice"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 shadow-lg hover:bg-blue-50"
          >
            Take Quiz →
          </Link>

        </div>

      </section>

    </main>
  );
}
