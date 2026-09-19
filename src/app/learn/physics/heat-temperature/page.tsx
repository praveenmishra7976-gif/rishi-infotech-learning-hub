import Link from "next/link";

const concepts = [
  {
    title: "Heat",
    icon: "🔥",
    description:
      "Heat is energy transferred from a hotter body to a colder body because of a temperature difference.",
  },
  {
    title: "Temperature",
    icon: "🌡️",
    description:
      "Temperature indicates how hot or cold a body is and is related to the average kinetic energy of its particles.",
  },
  {
    title: "Thermal Expansion",
    icon: "↔️",
    description:
      "Most substances expand when heated and contract when cooled.",
  },
  {
    title: "Heat Transfer",
    icon: "♨️",
    description:
      "Heat can be transferred through conduction, convection and radiation.",
  },
  {
    title: "Specific Heat",
    icon: "💧",
    description:
      "Specific heat capacity describes the heat required to raise the temperature of unit mass of a substance by one degree.",
  },
  {
    title: "Change of State",
    icon: "🧊",
    description:
      "Matter can change between solid, liquid and gas when heat is supplied or removed.",
  },
];

const temperatureScales = [
  ["Celsius", "°C", "Water freezes at 0°C and boils at 100°C at standard atmospheric pressure."],
  ["Fahrenheit", "°F", "Water freezes at 32°F and boils at 212°F at standard atmospheric pressure."],
  ["Kelvin", "K", "The SI unit of thermodynamic temperature. 0 K is absolute zero."],
];

const heatTransfer = [
  {
    title: "Conduction",
    icon: "🔩",
    description:
      "Transfer of heat through a substance without bulk movement of the substance. It is especially important in solids.",
    example: "A metal spoon becomes hot when one end is placed in hot water.",
  },
  {
    title: "Convection",
    icon: "🌊",
    description:
      "Transfer of heat by the actual movement of particles in fluids such as liquids and gases.",
    example: "Water circulates while being heated in a container.",
  },
  {
    title: "Radiation",
    icon: "☀️",
    description:
      "Transfer of thermal energy through electromagnetic waves. It does not require a material medium.",
    example: "Heat from the Sun reaches Earth through space.",
  },
];

const formulas = [
  ["Heat transferred", "Q = mcΔT", "Q = heat, m = mass, c = specific heat capacity, ΔT = temperature change"],
  ["Specific heat capacity", "c = Q / (mΔT)", "Heat required per unit mass per unit temperature rise"],
  ["Temperature conversion", "K = °C + 273.15", "Conversion from Celsius to Kelvin"],
  ["Temperature conversion", "°C = (°F − 32) × 5/9", "Conversion from Fahrenheit to Celsius"],
  ["Temperature conversion", "°F = (°C × 9/5) + 32", "Conversion from Celsius to Fahrenheit"],
  ["Latent heat", "Q = mL", "Q = heat, m = mass, L = specific latent heat"],
];

const changesOfState = [
  ["Melting", "Solid → Liquid", "Ice changing into water"],
  ["Freezing", "Liquid → Solid", "Water changing into ice"],
  ["Vaporisation", "Liquid → Gas", "Water changing into water vapour"],
  ["Condensation", "Gas → Liquid", "Water vapour changing into water"],
  ["Sublimation", "Solid → Gas", "Some solids change directly into gas"],
  ["Deposition", "Gas → Solid", "Gas changes directly into a solid"],
];

const importantPoints = [
  "Heat is a form of energy transferred because of a temperature difference.",
  "Temperature tells us how hot or cold an object is.",
  "The SI unit of heat is joule (J).",
  "The SI unit of temperature is kelvin (K).",
  "Heat naturally flows from a higher-temperature body to a lower-temperature body.",
  "Conduction is generally most important in solids.",
  "Convection occurs mainly in liquids and gases.",
  "Radiation does not require a material medium.",
  "A thermometer is used to measure temperature.",
  "During a change of state, temperature may remain constant while heat is absorbed or released.",
  "Specific heat capacity is measured in J/(kg·K).",
  "Latent heat is associated with a change of state.",
];

const mcqs = [
  {
    question: "What is the SI unit of heat energy?",
    options: ["Watt", "Joule", "Kelvin", "Newton"],
    answer: "Joule",
  },
  {
    question: "Which instrument is commonly used to measure temperature?",
    options: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"],
    answer: "Thermometer",
  },
  {
    question: "Which mode of heat transfer can occur through empty space?",
    options: ["Conduction", "Convection", "Radiation", "Diffusion"],
    answer: "Radiation",
  },
  {
    question: "Water freezes at what temperature on the Celsius scale?",
    options: ["0°C", "32°C", "100°C", "273°C"],
    answer: "0°C",
  },
  {
    question: "Which mode of heat transfer involves bulk movement of fluid?",
    options: ["Conduction", "Convection", "Radiation", "Reflection"],
    answer: "Convection",
  },
  {
    question: "The SI unit of temperature is:",
    options: ["Celsius", "Fahrenheit", "Kelvin", "Joule"],
    answer: "Kelvin",
  },
  {
    question: "The formula Q = mcΔT is used to calculate:",
    options: [
      "Heat transferred for a temperature change",
      "Electric current",
      "Pressure",
      "Speed",
    ],
    answer: "Heat transferred for a temperature change",
  },
  {
    question: "The change from liquid to gas is called:",
    options: ["Freezing", "Melting", "Vaporisation", "Condensation"],
    answer: "Vaporisation",
  },
];

function SimpleTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200">
      <table className="w-full min-w-[680px] border-collapse">
        <thead>
          <tr className="bg-blue-50">
            {headers.map((header) => (
              <th
                key={header}
                className="border-b border-gray-200 px-4 py-4 text-left font-bold text-gray-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={`${row[0]}-${rowIndex}`}
              className="transition hover:bg-gray-50"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className={`border-b border-gray-100 px-4 py-4 ${
                    cellIndex === 0
                      ? "font-semibold text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HeatTemperaturePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/learn/physics"
            className="text-sm font-medium text-blue-100 hover:text-white"
          >
            ← Back to Physics
          </Link>

          <div className="mt-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              🌡️
            </div>

            <div>
              <p className="font-semibold text-cyan-100">
                Physics
              </p>

              <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl">
                Heat &amp; Temperature
              </h1>

              <p className="mt-3 max-w-3xl text-blue-50">
                Learn heat, temperature, thermal expansion, heat transfer,
                specific heat, changes of state, formulas and everyday
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Introduction
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-gray-700">
            Heat and temperature are closely related concepts in physics.
            Heat is energy transferred between bodies because of a temperature
            difference, while temperature describes the thermal state of a
            body. Understanding these concepts helps explain heating,
            cooling, melting, boiling and many everyday thermal phenomena.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((concept) => (
              <div
                key={concept.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {concept.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {concept.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">
            Heat vs Temperature
          </h2>

          <p className="mt-2 text-gray-600">
            These terms are related, but they do not mean the same thing.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-7">
              <div className="text-4xl">🔥</div>

              <h3 className="mt-4 text-2xl font-bold">
                Heat
              </h3>

              <ul className="mt-5 space-y-3 text-gray-700">
                <li>• It is energy transferred between bodies.</li>
                <li>• Transfer occurs because of temperature difference.</li>
                <li>• SI unit is joule (J).</li>
                <li>• Heat can be measured using calorimetry.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7">
              <div className="text-4xl">🌡️</div>

              <h3 className="mt-4 text-2xl font-bold">
                Temperature
              </h3>

              <ul className="mt-5 space-y-3 text-gray-700">
                <li>• It indicates the thermal state of a body.</li>
                <li>• It determines the direction of heat transfer.</li>
                <li>• SI unit is kelvin (K).</li>
                <li>• It is measured using a thermometer.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold">
          Temperature Scales
        </h2>

        <p className="mt-2 text-gray-600">
          Celsius, Fahrenheit and Kelvin are commonly used temperature
          scales.
        </p>

        <div className="mt-8">
          <SimpleTable
            headers={["Scale", "Symbol", "Important information"]}
            rows={temperatureScales}
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-semibold text-blue-700">
              Celsius → Kelvin
            </p>
            <p className="mt-3 text-2xl font-extrabold">
              K = °C + 273.15
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-semibold text-blue-700">
              Celsius → Fahrenheit
            </p>
            <p className="mt-3 text-2xl font-extrabold">
              °F = (°C × 9/5) + 32
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-semibold text-blue-700">
              Fahrenheit → Celsius
            </p>
            <p className="mt-3 text-2xl font-extrabold">
              °C = (°F − 32) × 5/9
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">
            Modes of Heat Transfer
          </h2>

          <p className="mt-2 text-gray-600">
            Heat can move from one place to another in three main ways.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {heatTransfer.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="mt-5 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm font-bold text-blue-700">
                    Example
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold">
            Specific Heat Capacity
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-gray-700">
            Specific heat capacity is the amount of heat required to raise
            the temperature of one kilogram of a substance by one kelvin.
            Different substances have different specific heat capacities.
          </p>

          <div className="mt-7 rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-indigo-700">
              Important formula
            </p>

            <p className="mt-3 text-3xl font-extrabold">
              Q = mcΔT
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-indigo-50 p-4">
                <p className="font-bold">Q</p>
                <p className="mt-1 text-sm text-gray-600">
                  Heat transferred
                </p>
              </div>

              <div className="rounded-xl bg-indigo-50 p-4">
                <p className="font-bold">m</p>
                <p className="mt-1 text-sm text-gray-600">
                  Mass
                </p>
              </div>

              <div className="rounded-xl bg-indigo-50 p-4">
                <p className="font-bold">c</p>
                <p className="mt-1 text-sm text-gray-600">
                  Specific heat capacity
                </p>
              </div>

              <div className="rounded-xl bg-indigo-50 p-4">
                <p className="font-bold">ΔT</p>
                <p className="mt-1 text-sm text-gray-600">
                  Temperature change
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">
            Thermal Expansion
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-gray-700">
            When most substances are heated, their particles gain energy
            and the average separation between particles increases. As a
            result, the substance generally expands. When cooled, it
            generally contracts.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">📏</div>
              <h3 className="mt-4 font-bold">Solids</h3>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Solids generally show expansion in length, area and volume
                when heated.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">💧</div>
              <h3 className="mt-4 font-bold">Liquids</h3>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Liquids generally expand when heated and contract when
                cooled.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">💨</div>
              <h3 className="mt-4 font-bold">Gases</h3>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Gases usually show relatively large changes in volume with
                temperature.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
            <h3 className="font-bold text-gray-900">
              Everyday example
            </h3>

            <p className="mt-2 leading-7 text-gray-700">
              Small gaps are provided between railway tracks and bridge
              sections to allow for thermal expansion and contraction.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold">
          Changes of State
        </h2>

        <p className="mt-2 text-gray-600">
          Heating or cooling can cause matter to change from one state to
          another.
        </p>

        <div className="mt-8">
          <SimpleTable
            headers={["Process", "Change", "Example"]}
            rows={changesOfState}
          />
        </div>

        <div className="mt-8 rounded-3xl border border-cyan-100 bg-cyan-50 p-7">
          <h3 className="text-2xl font-bold">
            Latent Heat
          </h3>

          <p className="mt-3 max-w-4xl leading-7 text-gray-700">
            During a change of state, heat may be absorbed or released
            without a change in temperature. This energy is called latent
            heat.
          </p>

          <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-cyan-700">
              Formula
            </p>

            <p className="mt-2 text-3xl font-extrabold">
              Q = mL
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">
            Important Heat &amp; Temperature Formulas
          </h2>

          <div className="mt-8">
            <SimpleTable
              headers={["Quantity", "Formula", "Meaning"]}
              rows={formulas}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-green-100 bg-green-50 p-7">
          <h2 className="text-3xl font-extrabold">
            Everyday Applications
          </h2>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🍳", "Cooking", "Heat is transferred from a stove to food."],
              ["🧥", "Clothing", "Warm clothing reduces heat loss from the body."],
              ["🏠", "Buildings", "Insulation helps control heat transfer."],
              ["☀️", "Solar Heating", "Radiation from the Sun provides thermal energy."],
              ["❄️", "Refrigeration", "Cooling systems transfer thermal energy away from a region."],
              ["🚗", "Engines", "Engines involve significant heating and cooling processes."],
              ["☕", "Hot Drinks", "Heat flows from a hot drink to its surroundings."],
              ["🌬️", "Ventilation", "Convection helps move warm and cool air."],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="text-3xl">{icon}</div>

                <h3 className="mt-3 font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">
            Important Points for Revision
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {importantPoints.map((point, index) => (
              <div
                key={point}
                className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </div>

                <p className="leading-7 text-gray-700">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-100 bg-purple-50 p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold">
            Quick MCQ Practice
          </h2>

          <p className="mt-2 text-gray-600">
            Check your understanding of heat and temperature.
          </p>

          <div className="mt-8 space-y-6">
            {mcqs.map((mcq, index) => (
              <div
                key={mcq.question}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <p className="font-bold text-gray-900">
                  {index + 1}. {mcq.question}
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {mcq.options.map((option) => (
                    <div
                      key={option}
                      className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700"
                    >
                      {option}
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl bg-green-50 px-4 py-3">
                  <span className="font-semibold text-green-700">
                    Answer:
                  </span>{" "}
                  <span className="text-gray-700">
                    {mcq.answer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 p-8 text-center shadow-xl sm:p-12">
          <div className="text-5xl">⚡</div>

          <h2 className="mt-5 text-3xl font-extrabold text-white">
            Practice Physics
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Revise heat and temperature, then test your knowledge with more
            physics practice questions.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/practice"
              className="rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
            >
              Start Practice →
            </Link>

            <Link
              href="/learn/physics"
              className="rounded-xl border border-white/40 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              More Physics Topics
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold">
                Rishi Infotech Learning Hub
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Learn subjects, practice concepts and build knowledge in
                one place.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Physics
              </h3>

              <div className="mt-3 space-y-2 text-sm text-slate-400">
                <p>Introduction</p>
                <p>Motion</p>
                <p>Force &amp; Laws</p>
                <p>Heat &amp; Temperature</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold">
                Topics
              </h3>

              <div className="mt-3 space-y-2 text-sm text-slate-400">
                <p>Sound</p>
                <p>Light</p>
                <p>Electricity</p>
                <p>Magnetism</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold">
                Quick Links
              </h3>

              <div className="mt-3 space-y-2 text-sm">
                <Link
                  href="/learn"
                  className="block text-slate-400 hover:text-white"
                >
                  Learning Hub
                </Link>

                <Link
                  href="/learn/physics"
                  className="block text-slate-400 hover:text-white"
                >
                  Physics
                </Link>

                <Link
                  href="/practice"
                  className="block text-slate-400 hover:text-white"
                >
                  Practice
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
            © 2026 Rishi Infotech Learning Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
