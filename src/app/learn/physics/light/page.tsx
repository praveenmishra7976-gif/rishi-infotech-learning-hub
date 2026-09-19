import Link from "next/link";

const topics = [
  ["01", "What is Light?", "#introduction"],
  ["02", "Sources of Light", "#sources"],
  ["03", "Propagation of Light", "#propagation"],
  ["04", "Reflection of Light", "#reflection"],
  ["05", "Laws of Reflection", "#laws"],
  ["06", "Types of Reflection", "#types"],
  ["07", "Plane Mirror", "#plane-mirror"],
  ["08", "Spherical Mirrors", "#spherical"],
  ["09", "Refraction of Light", "#refraction"],
  ["10", "Refractive Index", "#refractive-index"],
  ["11", "Lenses", "#lenses"],
  ["12", "Dispersion of Light", "#dispersion"],
  ["13", "Rainbow", "#rainbow"],
  ["14", "Important Formulas", "#formulas"],
  ["15", "Important Points", "#important-points"],
];

const lightProperties = [
  {
    icon: "🚀",
    title: "Very High Speed",
    description:
      "Light travels extremely fast. In vacuum, its speed is approximately 3 × 10⁸ m/s.",
  },
  {
    icon: "➡️",
    title: "Straight-Line Travel",
    description:
      "Light generally travels in straight lines in a uniform transparent medium.",
  },
  {
    icon: "🌊",
    title: "Electromagnetic Wave",
    description:
      "Light is an electromagnetic wave and does not require a material medium to travel.",
  },
  {
    icon: "🔄",
    title: "Reflection & Refraction",
    description:
      "Light can change its direction through reflection and refraction.",
  },
];

const sources = [
  {
    icon: "☀️",
    title: "Natural Sources",
    description:
      "Objects that naturally produce their own light are natural sources.",
    examples: "Sun, stars",
  },
  {
    icon: "💡",
    title: "Artificial Sources",
    description:
      "Light sources made or operated by humans are artificial sources.",
    examples: "Bulb, LED, candle",
  },
];

const reflectionTypes = [
  {
    icon: "🪞",
    title: "Regular Reflection",
    description:
      "Reflection from a smooth surface where reflected rays remain orderly.",
  },
  {
    icon: "🧱",
    title: "Diffuse Reflection",
    description:
      "Reflection from an uneven surface where reflected rays scatter in different directions.",
  },
];

const importantPoints = [
  "Light is a form of energy that enables us to see objects.",
  "Light is an electromagnetic wave.",
  "Light can travel through vacuum.",
  "The speed of light in vacuum is approximately 3 × 10⁸ m/s.",
  "Light normally travels in straight lines in a uniform medium.",
  "The bouncing back of light from a surface is called reflection.",
  "The bending of light when it passes from one medium to another is called refraction.",
  "The angle of incidence is equal to the angle of reflection.",
  "The incident ray, reflected ray and normal lie in the same plane.",
  "A plane mirror forms a virtual and erect image.",
  "A convex lens generally converges parallel rays of light.",
  "A concave lens generally diverges parallel rays of light.",
  "Splitting of white light into its constituent colours is called dispersion.",
  "A rainbow is produced because of refraction, dispersion and internal reflection of sunlight in water droplets.",
  "The refractive index of a medium indicates how much light slows down in that medium.",
];

const formulas = [
  ["Speed of Light", "c ≈ 3 × 10⁸ m/s", "Vacuum"],
  ["Reflection", "∠i = ∠r", "Angle relation"],
  ["Refractive Index", "n = c / v", "Dimensionless"],
  ["Lens Formula", "1/f = 1/v - 1/u", "Lens"],
  ["Magnification", "m = v/u", "Lens"],
];

export default function LightPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-lg">
              RI
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Rishi Infotech
              </h1>
              <p className="text-xs font-medium text-blue-600">
                Learning Hub
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/" className="font-medium hover:text-blue-600">
              Home
            </Link>

            <Link href="/learn" className="font-medium text-blue-600">
              Learn
            </Link>

            <Link href="/practice" className="font-medium hover:text-blue-600">
              Practice
            </Link>

            <Link href="/ai-hub" className="font-medium hover:text-blue-600">
              AI Hub
            </Link>

            <Link
              href="/developer-hub"
              className="font-medium hover:text-blue-600"
            >
              Developer
            </Link>

            <Link
              href="/downloads"
              className="font-medium hover:text-blue-600"
            >
              Downloads
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700"
          >
            Contact
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-600 to-cyan-500">

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">

          <Link
            href="/learn/physics"
            className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            ← Physics Chapters
          </Link>

          <div className="mt-8 flex items-center gap-5">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              💡
            </div>

            <div>
              <p className="font-semibold text-blue-100">
                PHYSICS CHAPTER 07
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Light
              </h2>
            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn the basics of light, reflection, refraction, mirrors,
            lenses, dispersion, rainbow formation and important optical
            formulas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#introduction"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              💡 Start Learning
            </a>

            <Link
              href="/practice/mcq"
              className="rounded-xl border-2 border-white/60 px-7 py-3.5 text-center font-bold text-white hover:bg-white hover:text-blue-700"
            >
              📝 Practice MCQs
            </Link>

          </div>

        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 text-sm lg:px-8">

          <Link href="/learn" className="text-blue-600 hover:underline">
            Learn
          </Link>

          <span className="mx-2 text-slate-400">/</span>

          <Link
            href="/learn/physics"
            className="text-blue-600 hover:underline"
          >
            Physics
          </Link>

          <span className="mx-2 text-slate-400">/</span>

          <span className="text-slate-500">
            Light
          </span>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            <article>

              {/* INTRODUCTION */}
              <section id="introduction">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 07
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What is Light?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Light is a form of energy that makes objects visible to
                  our eyes. It is an electromagnetic wave that can travel
                  through vacuum as well as transparent materials.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-6xl">
                    💡
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Light allows us to see
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    We see an object when light coming from the object or
                    reflected by the object enters our eyes.
                  </p>

                </div>

              </section>

              {/* PROPERTIES */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Basic Concepts
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Properties of Light
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {lightProperties.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                        {item.icon}
                      </div>

                      <h3 className="mt-5 text-xl font-black text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* SOURCES */}
              <section id="sources" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Light Sources
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Sources of Light
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A luminous object produces its own light. Sources of light
                  can broadly be classified as natural and artificial.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {sources.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                    >

                      <div className="text-5xl">
                        {item.icon}
                      </div>

                      <h3 className="mt-5 text-xl font-black">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-5 rounded-xl bg-blue-50 p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                          Examples
                        </p>
                        <p className="mt-1 font-bold text-blue-900">
                          {item.examples}
                        </p>
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* PROPAGATION */}
              <section id="propagation" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Propagation
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Propagation of Light
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  In a uniform transparent medium, light travels in a
                  straight line. This property is known as the rectilinear
                  propagation of light.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-8">

                  <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">

                    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                      <div className="text-4xl">
                        🔦
                      </div>
                      <p className="mt-2 font-black">
                        Light Source
                      </p>
                    </div>

                    <div className="text-3xl text-blue-600">
                      ━━━━➤
                    </div>

                    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                      <div className="text-4xl">
                        👁️
                      </div>
                      <p className="mt-2 font-black">
                        Observer
                      </p>
                    </div>

                  </div>

                  <p className="mt-6 text-center text-sm text-slate-600">
                    Light travels in a straight line through a uniform medium.
                  </p>

                </div>

              </section>

              {/* REFLECTION */}
              <section id="reflection" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Reflection
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Reflection of Light
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Reflection is the phenomenon in which light rays bounce
                  back into the same medium after striking a reflecting
                  surface.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-50 p-8">

                  <div className="flex flex-col items-center gap-5">

                    <div className="rounded-xl bg-slate-700 px-16 py-3 text-center font-bold text-white">
                      Reflecting Surface
                    </div>

                    <div className="text-4xl">
                      ↗️
                    </div>

                    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                      <div className="text-4xl">
                        💡
                      </div>

                      <p className="mt-2 font-black">
                        Incident Ray
                      </p>
                    </div>

                    <div className="text-3xl">
                      ↖️
                    </div>

                    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                      <p className="font-black">
                        Reflected Ray
                      </p>
                    </div>

                  </div>

                </div>

              </section>

              {/* LAWS */}
              <section id="laws" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Important Laws
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Laws of Reflection
                </h2>

                <div className="mt-8 space-y-5">

                  <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                      1
                    </span>

                    <h3 className="mt-5 text-xl font-black">
                      First Law
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      The incident ray, reflected ray and the normal at the
                      point of incidence all lie in the same plane.
                    </p>

                  </div>

                  <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-7">

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 font-black text-white">
                      2
                    </span>

                    <h3 className="mt-5 text-xl font-black">
                      Second Law
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      The angle of incidence is equal to the angle of
                      reflection.
                    </p>

                    <div className="mt-5 rounded-xl bg-white p-4">
                      <p className="text-center text-2xl font-black">
                        ∠i = ∠r
                      </p>
                    </div>

                  </div>

                </div>

              </section>

              {/* TYPES */}
              <section id="types" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Classification
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Types of Reflection
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {reflectionTypes.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                    >

                      <div className="text-5xl">
                        {item.icon}
                      </div>

                      <h3 className="mt-5 text-xl font-black">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {item.description}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* PLANE MIRROR */}
              <section id="plane-mirror" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Mirrors
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Plane Mirror
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A plane mirror has a flat reflecting surface. It forms an
                  image that is virtual, erect and of the same size as the
                  object.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {[
                    "Image is virtual.",
                    "Image is erect.",
                    "Image is the same size as the object.",
                    "Image is laterally inverted.",
                    "Object and image are at equal distances from the mirror.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-blue-50 p-4 text-sm font-medium text-slate-700"
                    >
                      ✓ {item}
                    </div>
                  ))}

                </div>

              </section>

              {/* SPHERICAL */}
              <section id="spherical" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Curved Mirrors
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Spherical Mirrors
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Spherical mirrors are mirrors whose reflecting surfaces
                  form part of a sphere. They are mainly of two types:
                  concave and convex mirrors.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div className="rounded-3xl bg-indigo-50 p-7">

                    <div className="text-5xl">
                      🥣
                    </div>

                    <h3 className="mt-5 text-xl font-black">
                      Concave Mirror
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      Its reflecting surface curves inward. It can
                      converge parallel rays of light.
                    </p>

                    <p className="mt-4 text-sm font-bold text-indigo-700">
                      Uses: shaving mirrors, headlights, reflecting telescopes
                    </p>

                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-7">

                    <div className="text-5xl">
                      🥄
                    </div>

                    <h3 className="mt-5 text-xl font-black">
                      Convex Mirror
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      Its reflecting surface curves outward. It generally
                      produces a diminished virtual image.
                    </p>

                    <p className="mt-4 text-sm font-bold text-cyan-700">
                      Uses: vehicle rear-view mirrors, security mirrors
                    </p>

                  </div>

                </div>

              </section>

              {/* REFRACTION */}
              <section id="refraction" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Refraction
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Refraction of Light
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Refraction is the bending or change in direction of light
                  when it passes obliquely from one transparent medium to
                  another because its speed changes.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-8">

                  <div className="grid gap-5 md:grid-cols-2">

                    <div className="rounded-2xl bg-white p-6">

                      <div className="text-4xl">
                        💧
                      </div>

                      <h3 className="mt-4 font-black">
                        Air → Water
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Light changes speed and direction when entering
                        water from air.
                      </p>

                    </div>

                    <div className="rounded-2xl bg-white p-6">

                      <div className="text-4xl">
                        🔍
                      </div>

                      <h3 className="mt-4 font-black">
                        Optical Instruments
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Refraction is the basic principle behind lenses.
                      </p>

                    </div>

                  </div>

                </div>

              </section>

              {/* REFRACTIVE INDEX */}
              <section id="refractive-index" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Optical Property
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Refractive Index
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Refractive index gives an indication of how much the speed
                  of light is reduced when it enters a particular medium.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-center text-white">

                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                    Formula
                  </p>

                  <p className="mt-4 text-5xl font-black">
                    n = c / v
                  </p>

                  <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300">
                    Here, n is the refractive index, c is the speed of light
                    in vacuum and v is the speed of light in the medium.
                  </p>

                </div>

              </section>

              {/* LENSES */}
              <section id="lenses" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Optical Instruments
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Lenses
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A lens is a transparent optical element that refracts
                  light. Lenses are mainly classified as convex and
                  concave.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">

                    <div className="text-5xl">
                      🔎
                    </div>

                    <h3 className="mt-5 text-xl font-black">
                      Convex Lens
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      A convex lens is thicker in the middle and thinner at
                      the edges. It generally converges parallel rays.
                    </p>

                    <div className="mt-5 rounded-xl bg-white p-4 font-bold text-blue-700">
                      Converging Lens
                    </div>

                  </div>

                  <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-7">

                    <div className="text-5xl">
                      👓
                    </div>

                    <h3 className="mt-5 text-xl font-black">
                      Concave Lens
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      A concave lens is thinner in the middle and thicker
                      at the edges. It generally diverges parallel rays.
                    </p>

                    <div className="mt-5 rounded-xl bg-white p-4 font-bold text-cyan-700">
                      Diverging Lens
                    </div>

                  </div>

                </div>

              </section>

              {/* DISPERSION */}
              <section id="dispersion" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Spectrum
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Dispersion of Light
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Dispersion is the splitting of white light into its
                  constituent colours when it passes through a suitable
                  transparent medium such as a glass prism.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="flex flex-wrap justify-center gap-2 text-center font-black">

                    {["V", "I", "B", "G", "Y", "O", "R"].map((letter) => (
                      <div
                        key={letter}
                        className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10"
                      >
                        {letter}
                      </div>
                    ))}

                  </div>

                  <p className="mt-6 text-center text-sm text-slate-300">
                    VIBGYOR represents Violet, Indigo, Blue, Green, Yellow,
                    Orange and Red.
                  </p>

                </div>

              </section>

              {/* RAINBOW */}
              <section id="rainbow" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Natural Phenomenon
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Rainbow
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A rainbow is a natural optical phenomenon formed when
                  sunlight interacts with water droplets in the atmosphere.
                  Refraction, dispersion and internal reflection contribute
                  to its formation.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-8 text-center">

                  <div className="text-8xl">
                    🌈
                  </div>

                  <p className="mt-5 font-bold text-slate-700">
                    Sunlight + Water Droplets → Dispersion + Refraction +
                    Internal Reflection → Rainbow
                  </p>

                </div>

              </section>

              {/* FORMULAS */}
              <section id="formulas" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Light Formulas
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">

                  <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white md:grid">

                    <div className="p-4">
                      Quantity
                    </div>

                    <div className="p-4">
                      Formula
                    </div>

                    <div className="p-4">
                      Application
                    </div>

                  </div>

                  {formulas.map(([name, formula, application], index) => (
                    <div
                      key={name}
                      className={`grid grid-cols-1 md:grid-cols-3 ${
                        index !== formulas.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-5 font-black text-blue-600">
                        {name}
                      </div>

                      <div className="p-5 font-black text-slate-900">
                        <span className="mr-2 md:hidden">
                          Formula:
                        </span>
                        {formula}
                      </div>

                      <div className="p-5 text-sm text-slate-600">
                        <span className="mr-2 font-bold md:hidden">
                          Application:
                        </span>
                        {application}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* IMPORTANT POINTS */}
              <section id="important-points" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Exam Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Points
                </h2>

                <div className="mt-8 space-y-3">

                  {importantPoints.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
                    >

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-600">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-slate-600">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* PRACTICE CTA */}
              <section className="mt-16 rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white shadow-2xl md:p-10">

                <p className="font-bold uppercase tracking-widest text-blue-100">
                  Test Your Knowledge
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Ready for Light MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Practice questions on reflection, refraction, mirrors,
                  lenses, dispersion and important optical concepts.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/practice/mcq"
                    className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-lg hover:scale-105"
                  >
                    📝 Start MCQ
                  </Link>

                  <Link
                    href="/practice/mock-tests"
                    className="rounded-xl border-2 border-white/60 px-7 py-3.5 text-center font-bold text-white hover:bg-white hover:text-blue-700"
                  >
                    🎯 Mock Test
                  </Link>

                </div>

              </section>

            </article>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-24 lg:h-fit">

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <h3 className="text-lg font-black text-slate-900">
                  Chapter Contents
                </h3>

                <div className="mt-5 space-y-2">

                  {topics.map(([number, title, href]) => (
                    <a
                      key={number}
                      href={href}
                      className="block rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="mr-2 font-bold text-blue-600">
                        {number}.
                      </span>
                      {title}
                    </a>
                  ))}

                </div>

              </div>

              <div className="mt-5 rounded-3xl bg-blue-50 p-6">

                <h3 className="font-black text-blue-900">
                  Physics Progress
                </h3>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-blue-200">
                  <div className="h-full w-7/10 rounded-full bg-blue-600" />
                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Chapter 07 of the Physics section.
                </p>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* CHAPTER NAVIGATION */}
      <section className="border-t border-slate-200 bg-slate-50 py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 sm:flex-row lg:px-8">

          <Link
            href="/learn/physics/sound"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Sound
          </Link>

          <Link
            href="/learn/physics/electricity"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Electricity →
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white">

        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <h2 className="text-xl font-bold">
                Rishi Infotech
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Learning, practice, AI tools and developer utilities
                in one place.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Learning
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">

                <Link
                  href="/learn"
                  className="block hover:text-white"
                >
                  All Subjects
                </Link>

                <Link
                  href="/learn/physics"
                  className="block hover:text-white"
                >
                  Physics
                </Link>

                <Link
                  href="/learn/computer"
                  className="block hover:text-white"
                >
                  Computer
                </Link>

              </div>
            </div>

            <div>
              <h3 className="font-semibold">
                Practice
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">

                <Link
                  href="/practice"
                  className="block hover:text-white"
                >
                  Practice Center
                </Link>

                <Link
                  href="/practice/mcq"
                  className="block hover:text-white"
                >
                  MCQ Quiz
                </Link>

                <Link
                  href="/practice/mock-tests"
                  className="block hover:text-white"
                >
                  Mock Tests
                </Link>

              </div>
            </div>

            <div>
              <h3 className="font-semibold">
                Tools
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">

                <Link
                  href="/ai-hub"
                  className="block hover:text-white"
                >
                  AI Hub
                </Link>

                <Link
                  href="/developer-hub"
                  className="block hover:text-white"
                >
                  Developer Hub
                </Link>

                <Link
                  href="/dictionary"
                  className="block hover:text-white"
                >
                  Dictionary
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