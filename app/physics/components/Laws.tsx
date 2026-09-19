import {
  Scale,
  Zap,
  Orbit,
  Magnet,
  Waves,
  Atom,
} from "lucide-react";

const laws = [
  {
    title: "Newton's First Law",
    icon: Scale,
    description:
      "A body remains at rest or in uniform motion unless acted upon by an external force.",
  },
  {
    title: "Newton's Second Law",
    icon: Zap,
    description:
      "Force is equal to mass multiplied by acceleration.",
    formula: "F = ma",
  },
  {
    title: "Newton's Third Law",
    icon: Orbit,
    description:
      "Every action has an equal and opposite reaction.",
  },
  {
    title: "Law of Gravitation",
    icon: Atom,
    description:
      "Every object attracts every other object in the universe.",
    formula: "F = Gm₁m₂/r²",
  },
  {
    title: "Ohm's Law",
    icon: Magnet,
    description:
      "Current is directly proportional to voltage.",
    formula: "V = IR",
  },
  {
    title: "Wave Equation",
    icon: Waves,
    description:
      "Wave speed equals frequency multiplied by wavelength.",
    formula: "v = fλ",
  },
];

export default function Laws() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

      <h2 className="text-3xl font-bold text-blue-700 mb-8">
        Important Physics Laws
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {laws.map((law) => {
          const Icon = law.icon;

          return (
            <div
              key={law.title}
              className="border rounded-2xl p-6 hover:shadow-lg transition"
            >
              <Icon
                size={34}
                className="text-blue-700 mb-4"
              />

              <h3 className="text-xl font-bold">
                {law.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {law.description}
              </p>

              {law.formula && (
                <div className="mt-5 bg-blue-50 rounded-lg px-4 py-3 font-bold text-blue-700">
                  {law.formula}
                </div>
              )}
            </div>
          );
        })}

      </div>

    </div>
  );
}