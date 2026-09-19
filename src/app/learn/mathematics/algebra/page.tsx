import Link from "next/link";

const topics = [
  {
    title: "Variables",
    icon: "🔤",
    description:
      "Learn how letters such as x, y and z are used to represent unknown values.",
  },
  {
    title: "Algebraic Expressions",
    icon: "🧮",
    description:
      "Understand terms, coefficients, constants and algebraic expressions.",
  },
  {
    title: "Linear Equations",
    icon: "⚖️",
    description:
      "Learn how to solve equations containing one variable.",
  },
  {
    title: "Algebraic Identities",
    icon: "📐",
    description:
      "Learn important identities used to simplify and solve expressions.",
  },
  {
    title: "Polynomials",
    icon: "📊",
    description:
      "Understand polynomial terms, degrees, coefficients and operations.",
  },
  {
    title: "Factorisation",
    icon: "✂️",
    description:
      "Learn methods for breaking algebraic expressions into factors.",
  },
];

const identities = [
  {
    formula: "(a + b)² = a² + 2ab + b²",
    use: "Square of the sum of two terms",
  },
  {
    formula: "(a - b)² = a² - 2ab + b²",
    use: "Square of the difference of two terms",
  },
  {
    formula: "a² - b² = (a + b)(a - b)",
    use: "Difference of two squares",
  },
  {
    formula: "(a + b)(a - b) = a² - b²",
    use: "Product of sum and difference",
  },
];

const examples = [
  {
    question: "If x + 5 = 12, find x.",
    answer: "x = 7",
    explanation: "Subtract 5 from both sides: x = 12 − 5 = 7.",
  },
  {
    question: "Simplify: 3x + 2x.",
    answer: "5x",
    explanation: "Add the coefficients of the like terms: 3x + 2x = 5x.",
  },
  {
    question: "Expand: (x + 3)².",
    answer: "x² + 6x + 9",
    explanation:
      "Using (a + b)² = a² + 2ab + b², we get x² + 6x + 9.",
  },
  {
    question: "Factorise: x² − 9.",
    answer: "(x + 3)(x − 3)",
    explanation:
      "This is a difference of squares: x² − 3² = (x + 3)(x − 3).",
  },
];

const rules = [
  "Like terms can be added or subtracted.",
  "Always follow the order of operations.",
  "When an equation is changed on one side, perform the same operation on the other side.",
  "Use brackets carefully when multiplying algebraic expressions.",
  "Check the final answer by substituting the value back into the original equation.",
  "Keep variables and their coefficients clearly separated.",
];

export default function AlgebraPage() {
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
              ➗
            </div>

            <div>
              <p className="font-semibold text-cyan-100">
                Mathematics
              </p>

              <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
                Algebra
              </h1>

              <p className="mt-3 max-w-2xl text-blue-50">
                Learn variables, expressions, equations, identities,
                polynomials and factorisation with simple explanations and
                examples.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            What is Algebra?
          </h2>

          <p className="mt-4 leading-7 text-gray-700">
            Algebra is a branch of mathematics in which letters and symbols
            are used to represent numbers and unknown quantities. It helps us
            describe relationships and solve mathematical problems.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            For example, if we write <strong>x + 5 = 12</strong>, the letter
            x represents an unknown number. By solving the equation, we can
            find its value.
          </p>

        </div>
      </section>

      {/* Main Topics */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Algebra Topics
        </h2>

        <p className="mt-2 text-gray-600">
          Learn the important concepts of algebra.
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

      {/* Important Terms */}
      <section className="bg-gray-50 py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Important Algebra Terms
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">
                Variable
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                A letter or symbol whose value can change, such as x or y.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">
                Constant
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                A fixed numerical value that does not change.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">
                Coefficient
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                The numerical factor multiplied by a variable.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">
                Term
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                A number, variable or product of numbers and variables.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Algebraic Identities */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Important Algebraic Identities
        </h2>

        <p className="mt-2 text-gray-600">
          These identities are frequently used for expansion and
          factorisation.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          {identities.map((identity) => (
            <div
              key={identity.formula}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >

              <div className="rounded-xl bg-blue-50 p-5 text-center">
                <p className="text-xl font-bold text-blue-700">
                  {identity.formula}
                </p>
              </div>

              <p className="mt-4 text-gray-600">
                <span className="font-semibold text-gray-900">
                  Used for:
                </span>{" "}
                {identity.use}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* Solving Equations */}
      <section className="bg-gray-50 py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Solving a Linear Equation
          </h2>

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">

            <p className="text-lg font-semibold text-gray-900">
              Example: 2x + 4 = 14
            </p>

            <div className="mt-6 space-y-4 text-gray-700">

              <div className="rounded-xl bg-blue-50 p-4">
                <strong>Step 1:</strong> Subtract 4 from both sides.
                <div className="mt-2 font-semibold text-blue-700">
                  2x = 10
                </div>
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <strong>Step 2:</strong> Divide both sides by 2.
                <div className="mt-2 font-semibold text-blue-700">
                  x = 5
                </div>
              </div>

              <div className="rounded-xl bg-green-50 p-4">
                <strong>Answer:</strong> x = 5
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Quick Algebra Examples
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {examples.map((example, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >

              <p className="font-semibold text-gray-900">
                Q{index + 1}. {example.question}
              </p>

              <div className="mt-4 rounded-xl bg-blue-50 p-4">
                <p>
                  <span className="font-semibold text-blue-700">
                    Answer:
                  </span>{" "}
                  <span className="font-bold text-gray-900">
                    {example.answer}
                  </span>
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {example.explanation}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Rules */}
      <section className="bg-gray-50 py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Important Algebra Rules
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            {rules.map((rule, index) => (
              <div
                key={rule}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {index + 1}
                </div>

                <p className="leading-6 text-gray-700">
                  {rule}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Practice CTA */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl">

          <h2 className="text-3xl font-bold text-white">
            Practice Algebra
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Strengthen your algebra skills by solving practice questions and
            checking your understanding.
          </p>

          <Link
            href="/practice"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 shadow-lg hover:bg-blue-50"
          >
            Start Practice →
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
