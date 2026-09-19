import Link from "next/link";

const topics = [
  {
    title: "Natural Numbers",
    description: "Counting numbers such as 1, 2, 3, 4 and so on.",
    icon: "🔢",
  },
  {
    title: "Whole Numbers",
    description: "Natural numbers together with zero.",
    icon: "0️⃣",
  },
  {
    title: "Integers",
    description: "Positive numbers, negative numbers and zero.",
    icon: "➕",
  },
  {
    title: "Rational Numbers",
    description: "Numbers that can be written in the form p/q.",
    icon: "➗",
  },
  {
    title: "Irrational Numbers",
    description: "Numbers that cannot be expressed as a fraction of integers.",
    icon: "√",
  },
  {
    title: "Real Numbers",
    description: "The complete collection of rational and irrational numbers.",
    icon: "📊",
  },
];

const properties = [
  "Closure property",
  "Commutative property",
  "Associative property",
  "Distributive property",
  "Identity elements",
  "Inverse elements",
];

const examples = [
  {
    question: "Which of the following is a natural number?",
    answer: "7",
  },
  {
    question: "Which number is neither positive nor negative?",
    answer: "0",
  },
  {
    question: "Is 3/5 a rational number?",
    answer: "Yes, because it can be written in the form p/q.",
  },
  {
    question: "Is √2 rational or irrational?",
    answer: "Irrational",
  },
];

export default function NumberSystemPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <Link
            href="/learn/mathematics"
            className="text-sm font-medium text-blue-100 hover:text-white"
          >
            ← Back to Mathematics
          </Link>

          <div className="mt-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              🔢
            </div>

            <div>
              <p className="font-semibold text-cyan-100">
                Mathematics
              </p>

              <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
                Number System
              </h1>

              <p className="mt-3 max-w-2xl text-blue-50">
                Learn natural numbers, whole numbers, integers, rational
                numbers, irrational numbers and real numbers with simple
                explanations and examples.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            What is a Number System?
          </h2>

          <p className="mt-4 leading-7 text-gray-700">
            A number system is a method of representing and classifying
            numbers. Numbers are used for counting, measuring, comparing
            quantities and solving mathematical problems.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Different types of numbers are grouped into different sets.
            Understanding these sets is one of the foundations of
            mathematics.
          </p>

        </div>
      </section>

      {/* Number Types */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Types of Numbers
        </h2>

        <p className="mt-2 text-gray-600">
          Understand the major types of numbers.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

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

              <p className="mt-2 leading-6 text-gray-600">
                {topic.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Number Line */}
      <section className="bg-gray-50 py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Number Line
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            A number line is a straight line on which numbers are represented
            at equal intervals. Numbers increase as we move to the right and
            decrease as we move to the left.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl bg-white p-6 shadow-sm">

            <div className="min-w-[650px]">

              <div className="relative mt-8 h-20">

                <div className="absolute left-0 right-0 top-8 h-1 bg-blue-600" />

                {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((number) => (
                  <div
                    key={number}
                    className="absolute top-0 flex -translate-x-1/2 flex-col items-center"
                    style={{
                      left: `${((number + 4) / 8) * 100}%`,
                    }}
                  >
                    <div className="h-8 w-1 bg-blue-600" />
                    <span className="mt-2 font-semibold text-gray-800">
                      {number}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Properties */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Important Properties of Numbers
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {properties.map((property, index) => (
            <div
              key={property}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="font-bold text-gray-900">
                  {property}
                </h3>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Examples */}
      <section className="bg-gray-50 py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Quick Examples
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {examples.map((example, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >

                <p className="font-semibold text-gray-900">
                  Q{index + 1}. {example.question}
                </p>

                <div className="mt-4 rounded-xl bg-blue-50 p-4">
                  <span className="font-semibold text-blue-700">
                    Answer:
                  </span>{" "}
                  <span className="text-gray-700">
                    {example.answer}
                  </span>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Revision */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl">

          <h2 className="text-3xl font-bold text-white">
            Number System Revision
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Remember the hierarchy: Natural Numbers are included in Whole
            Numbers, Whole Numbers are included in Integers, and Integers are
            included in Rational Numbers. Rational and Irrational Numbers
            together form the Real Numbers.
          </p>

          <Link
            href="/practice"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 shadow-lg hover:bg-blue-50"
          >
            Practice Mathematics →
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">

        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">

          <p className="text-sm text-gray-500">
            © 2026 Rishi Infotech Learning Hub. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}
