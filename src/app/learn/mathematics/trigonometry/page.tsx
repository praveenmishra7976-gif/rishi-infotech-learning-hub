import Link from "next/link";

const topics = [
  {
    title: "Introduction to Trigonometry",
    icon: "📐",
    description:
      "Understand angles, right-angled triangles and the basic idea of trigonometry.",
  },
  {
    title: "Trigonometric Ratios",
    icon: "🔺",
    description:
      "Learn sine, cosine and tangent and how they relate to triangle sides.",
  },
  {
    title: "Standard Angles",
    icon: "📊",
    description:
      "Learn the values of trigonometric ratios for common standard angles.",
  },
  {
    title: "Trigonometric Identities",
    icon: "🧮",
    description:
      "Understand important identities used to simplify and solve problems.",
  },
  {
    title: "Heights & Distances",
    icon: "📏",
    description:
      "Apply trigonometry to real-life problems involving heights and distances.",
  },
  {
    title: "Applications",
    icon: "🌐",
    description:
      "Explore practical uses of trigonometry in science, engineering and everyday life.",
  },
];

const ratios = [
  {
    name: "Sine",
    formula: "sin θ = Perpendicular / Hypotenuse",
    short: "sin θ = P / H",
  },
  {
    name: "Cosine",
    formula: "cos θ = Base / Hypotenuse",
    short: "cos θ = B / H",
  },
  {
    name: "Tangent",
    formula: "tan θ = Perpendicular / Base",
    short: "tan θ = P / B",
  },
  {
    name: "Cosecant",
    formula: "cosec θ = Hypotenuse / Perpendicular",
    short: "cosec θ = H / P",
  },
  {
    name: "Secant",
    formula: "sec θ = Hypotenuse / Base",
    short: "sec θ = H / B",
  },
  {
    name: "Cotangent",
    formula: "cot θ = Base / Perpendicular",
    short: "cot θ = B / P",
  },
];

const standardAngles = [
  {
    angle: "0°",
    sin: "0",
    cos: "1",
    tan: "0",
  },
  {
    angle: "30°",
    sin: "1/2",
    cos: "√3/2",
    tan: "1/√3",
  },
  {
    angle: "45°",
    sin: "1/√2",
    cos: "1/√2",
    tan: "1",
  },
  {
    angle: "60°",
    sin: "√3/2",
    cos: "1/2",
    tan: "√3",
  },
  {
    angle: "90°",
    sin: "1",
    cos: "0",
    tan: "Not defined",
  },
];

const identities = [
  "sin²θ + cos²θ = 1",
  "1 + tan²θ = sec²θ",
  "1 + cot²θ = cosec²θ",
  "tan θ = sin θ / cos θ",
  "cot θ = cos θ / sin θ",
];

const examples = [
  {
    question:
      "In a right triangle, the perpendicular is 3 cm and the hypotenuse is 5 cm. Find sin θ.",
    answer: "3/5",
    explanation:
      "sin θ = Perpendicular / Hypotenuse = 3/5.",
  },
  {
    question:
      "If sin θ = 1/2 for an acute angle θ, find θ.",
    answer: "30°",
    explanation:
      "The standard-angle value of sin 30° is 1/2.",
  },
  {
    question:
      "Find tan 45°.",
    answer: "1",
    explanation:
      "The standard value of tan 45° is 1.",
  },
  {
    question:
      "If tan θ = 3/4, what are the perpendicular and base in the simplest ratio?",
    answer: "3 : 4",
    explanation:
      "Since tan θ = Perpendicular / Base, the ratio is 3 : 4.",
  },
];

export default function TrigonometryPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
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
              <p className="font-semibold text-cyan-100">
                Mathematics
              </p>

              <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
                Trigonometry
              </h1>

              <p className="mt-3 max-w-2xl text-blue-50">
                Learn trigonometric ratios, standard angles, identities,
                heights, distances and practical applications.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            What is Trigonometry?
          </h2>

          <p className="mt-4 leading-7 text-gray-700">
            Trigonometry is a branch of mathematics that studies the
            relationships between the angles and sides of triangles,
            especially right-angled triangles.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            The word trigonometry comes from Greek words related to triangle
            and measurement. It is widely used in mathematics, physics,
            engineering, architecture and navigation.
          </p>

        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Trigonometry Topics
        </h2>

        <p className="mt-2 text-gray-600">
          Learn the important concepts step by step.
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

      {/* Triangle concept */}
      <section className="bg-gray-50 py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Right Triangle Basics
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">📏</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Perpendicular
              </h3>
              <p className="mt-2 leading-6 text-gray-600">
                The side opposite the angle being considered.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">➡️</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Base
              </h3>
              <p className="mt-2 leading-6 text-gray-600">
                The side adjacent to the angle, excluding the hypotenuse.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🔺</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Hypotenuse
              </h3>
              <p className="mt-2 leading-6 text-gray-600">
                The longest side of a right-angled triangle, opposite the
                right angle.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Ratios */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Six Trigonometric Ratios
        </h2>

        <p className="mt-2 text-gray-600">
          These ratios describe relationships between the sides of a
          right-angled triangle.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {ratios.map((ratio) => (
            <div
              key={ratio.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >

              <h3 className="text-xl font-bold text-blue-700">
                {ratio.name}
              </h3>

              <div className="mt-4 rounded-xl bg-blue-50 p-4 text-center">
                <p className="font-bold text-gray-900">
                  {ratio.short}
                </p>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {ratio.formula}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* Standard angles */}
      <section className="bg-gray-50 py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Standard Angle Values
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl bg-white shadow-sm">

            <table className="min-w-full text-left text-sm">

              <thead className="bg-blue-50">
                <tr>
                  <th className="px-5 py-4 font-bold text-gray-900">
                    Angle
                  </th>
                  <th className="px-5 py-4 font-bold text-gray-900">
                    sin θ
                  </th>
                  <th className="px-5 py-4 font-bold text-gray-900">
                    cos θ
                  </th>
                  <th className="px-5 py-4 font-bold text-gray-900">
                    tan θ
                  </th>
                </tr>
              </thead>

              <tbody>
                {standardAngles.map((item) => (
                  <tr
                    key={item.angle}
                    className="border-t border-gray-100"
                  >
                    <td className="px-5 py-4 font-semibold text-gray-900">
                      {item.angle}
                    </td>
                    <td className="px-5 py-4 text-gray-700">
                      {item.sin}
                    </td>
                    <td className="px-5 py-4 text-gray-700">
                      {item.cos}
                    </td>
                    <td className="px-5 py-4 text-gray-700">
                      {item.tan}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </div>
      </section>

      {/* Identities */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Important Trigonometric Identities
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          {identities.map((identity, index) => (
            <div
              key={identity}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {index + 1}
              </div>

              <p className="font-semibold text-gray-800">
                {identity}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* Examples */}
      <section className="bg-gray-50 py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Solved Examples
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
        </div>
      </section>

      {/* Study Tips */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Trigonometry Study Tips
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-gray-900">
              1. Remember the basic ratios
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Practice sin, cos and tan until you can identify the correct
              ratio quickly.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-gray-900">
              2. Learn standard angles
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Memorise the values for 0°, 30°, 45°, 60° and 90°.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-gray-900">
              3. Draw the triangle
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              A simple diagram can make it easier to identify the
              perpendicular, base and hypotenuse.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-gray-900">
              4. Practice regularly
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Solve different types of problems to improve speed and accuracy.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl">

          <h2 className="text-3xl font-bold text-white">
            Practice Trigonometry
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Test your knowledge of ratios, angles, identities and
            applications.
          </p>

          <Link
            href="/practice"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 shadow-lg hover:bg-blue-50"
          >
            Start Practice →
          </Link>

        </div>

      </section>

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
