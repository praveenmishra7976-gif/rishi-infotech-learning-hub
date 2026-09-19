import Link from "next/link";

const topics = [
  {
    title: "Introduction to Statistics",
    icon: "📊",
    description:
      "Understand data, observations, variables and the basic concepts of statistics.",
  },
  {
    title: "Data Collection",
    icon: "📝",
    description:
      "Learn how data is collected, organized and represented for analysis.",
  },
  {
    title: "Mean",
    icon: "➗",
    description:
      "Learn arithmetic mean and how to calculate the average of a data set.",
  },
  {
    title: "Median",
    icon: "📍",
    description:
      "Understand the middle value of an ordered data set and how to find it.",
  },
  {
    title: "Mode",
    icon: "🔢",
    description:
      "Learn how to identify the value that occurs most frequently.",
  },
  {
    title: "Data Representation",
    icon: "📈",
    description:
      "Study tables, bar graphs, histograms and other ways of representing data.",
  },
];

const formulas = [
  {
    title: "Arithmetic Mean",
    formula: "Mean = Sum of observations / Number of observations",
  },
  {
    title: "Mean for Frequency Data",
    formula: "Mean = Σfx / Σf",
  },
  {
    title: "Range",
    formula: "Range = Maximum value − Minimum value",
  },
  {
    title: "Median",
    formula: "Middle value after arranging observations in order",
  },
];

const examples = [
  {
    question: "Find the mean of 5, 10 and 15.",
    solution:
      "Mean = (5 + 10 + 15) / 3 = 30 / 3 = 10",
    answer: "Answer: 10",
  },
  {
    question: "Find the range of 4, 8, 12, 15 and 20.",
    solution:
      "Range = Maximum − Minimum = 20 − 4 = 16",
    answer: "Answer: 16",
  },
  {
    question: "Find the median of 3, 7, 9, 12 and 15.",
    solution:
      "The observations are already arranged. The middle value is 9.",
    answer: "Answer: 9",
  },
];

export default function StatisticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/learn/mathematics"
            className="text-sm font-medium text-blue-100 hover:text-white"
          >
            ← Back to Mathematics
          </Link>

          <div className="mt-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              📊
            </div>

            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Statistics
              </h1>

              <p className="mt-3 max-w-3xl text-blue-50">
                Learn data handling, mean, median, mode, range, graphs and
                important statistical concepts with simple examples.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Statistics Topics
        </h2>

        <p className="mt-2 text-gray-600">
          Choose a topic and learn statistics step by step.
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

              <div className="mt-5 font-semibold text-blue-600">
                Learn Topic →
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Important Statistical Formulas
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            Keep these formulas handy for quick revision and problem solving.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {formulas.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <div className="mt-4 rounded-xl bg-blue-50 p-4 font-semibold text-blue-800">
                  {item.formula}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Mean, Median and Mode
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="text-4xl">➗</div>

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Mean
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Mean is the average of all observations. Add all observations
              and divide their sum by the total number of observations.
            </p>

            <div className="mt-5 rounded-xl bg-blue-50 p-4 font-semibold text-blue-700">
              Mean = Σx / n
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="text-4xl">📍</div>

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Median
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Median is the middle observation when the data is arranged in
              ascending or descending order.
            </p>

            <div className="mt-5 rounded-xl bg-blue-50 p-4 font-semibold text-blue-700">
              Middle value = Median
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="text-4xl">🔢</div>

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Mode
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Mode is the observation that occurs most frequently in a data
              set.
            </p>

            <div className="mt-5 rounded-xl bg-blue-50 p-4 font-semibold text-blue-700">
              Most frequent value = Mode
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Solved Examples
          </h2>

          <div className="mt-10 space-y-6">
            {examples.map((example, index) => (
              <div
                key={example.question}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {example.question}
                    </h3>

                    <p className="mt-3 text-gray-600">
                      {example.solution}
                    </p>

                    <p className="mt-3 font-bold text-blue-700">
                      {example.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <h2 className="text-3xl font-bold text-gray-900">
            Understanding Data
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Data is a collection of facts, numbers or observations. In
            statistics, data is collected and organized so that useful
            information can be obtained from it.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-blue-50 p-5">
              <div className="text-3xl">📝</div>
              <h3 className="mt-3 font-bold text-gray-900">
                Collect
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Gather observations and information.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-5">
              <div className="text-3xl">🗂️</div>
              <h3 className="mt-3 font-bold text-gray-900">
                Organize
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Arrange the collected information.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-5">
              <div className="text-3xl">📊</div>
              <h3 className="mt-3 font-bold text-gray-900">
                Represent
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Display information using tables and graphs.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-5">
              <div className="text-3xl">🔎</div>
              <h3 className="mt-3 font-bold text-gray-900">
                Analyze
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Study the data and draw useful conclusions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white">
            Practice Statistics
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Test your knowledge of mean, median, mode, data and graphs with
            practice questions.
          </p>

          <Link
            href="/practice"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 shadow-lg hover:bg-blue-50"
          >
            Start Practice →
          </Link>
        </div>
      </section>
    </main>
  );
}
