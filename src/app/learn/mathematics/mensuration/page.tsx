import Link from "next/link";

const topics = [
  {
    title: "Perimeter",
    icon: "📏",
    description: "Learn how to calculate the distance around different shapes.",
  },
  {
    title: "Area",
    icon: "⬜",
    description: "Calculate the surface covered by two-dimensional shapes.",
  },
  {
    title: "Surface Area",
    icon: "📦",
    description: "Find the total area of the surfaces of three-dimensional objects.",
  },
  {
    title: "Volume",
    icon: "🧊",
    description: "Learn how to calculate the space occupied by solid objects.",
  },
  {
    title: "Circle",
    icon: "⭕",
    description: "Study circumference, area, radius and diameter of circles.",
  },
  {
    title: "Solids",
    icon: "📐",
    description: "Learn formulas for cubes, cuboids, cylinders, cones and spheres.",
  },
];

const formulas = [
  {
    name: "Square",
    formula: "Area = side²",
    extra: "Perimeter = 4 × side",
  },
  {
    name: "Rectangle",
    formula: "Area = length × breadth",
    extra: "Perimeter = 2(length + breadth)",
  },
  {
    name: "Triangle",
    formula: "Area = ½ × base × height",
    extra: "Perimeter = sum of all sides",
  },
  {
    name: "Circle",
    formula: "Area = πr²",
    extra: "Circumference = 2πr",
  },
  {
    name: "Cuboid",
    formula: "Volume = l × b × h",
    extra: "Total Surface Area = 2(lb + bh + hl)",
  },
  {
    name: "Cube",
    formula: "Volume = a³",
    extra: "Total Surface Area = 6a²",
  },
];

const examples = [
  {
    question: "Find the area of a rectangle with length 10 cm and breadth 5 cm.",
    answer: "50 cm²",
    explanation: "Area = length × breadth = 10 × 5 = 50 cm².",
  },
  {
    question: "Find the perimeter of a square with side 8 cm.",
    answer: "32 cm",
    explanation: "Perimeter = 4 × side = 4 × 8 = 32 cm.",
  },
  {
    question: "Find the area of a triangle with base 12 cm and height 5 cm.",
    answer: "30 cm²",
    explanation: "Area = ½ × base × height = ½ × 12 × 5 = 30 cm².",
  },
  {
    question: "Find the volume of a cube with side 4 cm.",
    answer: "64 cm³",
    explanation: "Volume = side³ = 4³ = 64 cm³.",
  },
];

export default function MensurationPage() {
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
              📏
            </div>

            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Mensuration
              </h1>

              <p className="mt-3 max-w-2xl text-blue-50">
                Learn perimeter, area, surface area and volume with important
                formulas, examples and practical applications.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            What is Mensuration?
          </h2>

          <p className="mt-4 leading-7 text-gray-700">
            Mensuration is the branch of mathematics that deals with the
            measurement of geometric figures and solids. It helps us calculate
            quantities such as perimeter, area, surface area and volume.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Mensuration is useful in everyday life, construction, engineering,
            architecture and many other fields.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Mensuration Topics
        </h2>

        <p className="mt-2 text-gray-600">
          Learn the major concepts of mensuration.
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

            </div>
          ))}

        </div>
      </section>

      <section className="bg-gray-50 py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Important Mensuration Formulas
          </h2>

          <p className="mt-2 text-gray-600">
            Keep these formulas handy for quick revision.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {formulas.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >

                <h3 className="text-xl font-bold text-gray-900">
                  {item.name}
                </h3>

                <div className="mt-4 rounded-xl bg-blue-50 p-4">
                  <p className="font-semibold text-blue-700">
                    {item.formula}
                  </p>

                  <p className="mt-2 text-sm text-gray-700">
                    {item.extra}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Solved Examples
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

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

      <section className="bg-gray-50 py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-center text-3xl font-bold text-gray-900">
            Important Units
          </h2>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">📏</div>
              <h3 className="mt-3 font-bold text-gray-900">
                Length
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                cm, m, km
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">⬜</div>
              <h3 className="mt-3 font-bold text-gray-900">
                Area
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                cm², m², km²
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">🧊</div>
              <h3 className="mt-3 font-bold text-gray-900">
                Volume
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                cm³, m³, litres
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl">

          <h2 className="text-3xl font-bold text-white">
            Practice Mensuration
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Test your knowledge of formulas, measurements and calculations.
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
