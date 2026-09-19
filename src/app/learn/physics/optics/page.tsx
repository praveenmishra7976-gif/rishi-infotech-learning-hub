import Link from "next/link";

const topics = [
  ["01", "Introduction to Optics", "#introduction"],
  ["02", "Light", "#light"],
  ["03", "Reflection of Light", "#reflection"],
  ["04", "Laws of Reflection", "#laws-reflection"],
  ["05", "Plane Mirror", "#plane-mirror"],
  ["06", "Spherical Mirrors", "#spherical-mirrors"],
  ["07", "Mirror Formula", "#mirror-formula"],
  ["08", "Refraction of Light", "#refraction"],
  ["09", "Laws of Refraction", "#laws-refraction"],
  ["10", "Refractive Index", "#refractive-index"],
  ["11", "Lenses", "#lenses"],
  ["12", "Lens Formula", "#lens-formula"],
  ["13", "Power of Lens", "#power"],
  ["14", "Human Eye", "#eye"],
  ["15", "Optical Instruments", "#instruments"],
  ["16", "Dispersion of Light", "#dispersion"],
  ["17", "Applications", "#applications"],
  ["18", "Important Formulas", "#formulas"],
  ["19", "Important Points", "#important"],
];

const concepts = [
  {
    icon: "💡",
    title: "Light",
    text: "Light is a form of electromagnetic radiation that enables us to see objects.",
  },
  {
    icon: "🪞",
    title: "Reflection",
    text: "Reflection is the bouncing back of light into the same medium after striking a surface.",
  },
  {
    icon: "🔍",
    title: "Refraction",
    text: "Refraction is the bending of light when it passes obliquely from one transparent medium to another.",
  },
  {
    icon: "🌈",
    title: "Dispersion",
    text: "Dispersion is the separation of white light into its constituent colours.",
  },
];

const importantPoints = [
  "Light travels in a straight line in a uniform transparent medium.",
  "The bouncing back of light from a surface is called reflection.",
  "The angle of incidence is equal to the angle of reflection.",
  "The incident ray, reflected ray and normal lie in the same plane.",
  "A plane mirror forms a virtual, erect and laterally inverted image.",
  "A concave mirror can form real or virtual images depending on the position of the object.",
  "A convex mirror generally forms a virtual, erect and diminished image.",
  "Refraction occurs because the speed of light changes when it enters another medium.",
  "The refractive index of a medium is related to the speed of light in that medium.",
  "A convex lens is thicker at the centre than at the edges.",
  "A concave lens is thinner at the centre and thicker at the edges.",
  "A convex lens can form real or virtual images depending on object position.",
  "A concave lens generally forms a virtual, erect and diminished image.",
  "The power of a lens is measured in dioptre.",
  "The human eye uses a convex lens system to focus light on the retina.",
  "White light can be dispersed into seven commonly identified colours.",
  "The visible spectrum is commonly remembered as VIBGYOR.",
  "Optics is used in cameras, microscopes, telescopes, spectacles, projectors and fibre-optic systems.",
];

const formulas = [
  ["Law of reflection", "∠i = ∠r", "Angle of incidence equals angle of reflection"],
  ["Mirror formula", "1/f = 1/v + 1/u", "For spherical mirrors"],
  ["Magnification", "m = hᵢ/hₒ = -v/u", "Mirror magnification"],
  ["Refractive index", "n = c/v", "Absolute refractive index"],
  ["Snell's law", "n₁ sin i = n₂ sin r", "Refraction between two media"],
  ["Lens formula", "1/f = 1/v - 1/u", "For a thin lens using Cartesian convention"],
  ["Lens magnification", "m = hᵢ/hₒ = v/u", "Magnification by lens"],
  ["Power of lens", "P = 1/f", "f in metre; P in dioptre"],
];

export default function OpticsPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-blue-600 to-cyan-500">

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
              🔬
            </div>

            <div>
              <p className="font-semibold text-blue-100">
                PHYSICS CHAPTER 10
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Optics
              </h2>
            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn how light travels, reflects and refracts, how mirrors and
            lenses form images, how the human eye works and how colours are
            produced by dispersion.
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
            Optics
          </span>

        </div>
      </div>

      {/* MAIN */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            <article>

              {/* INTRODUCTION */}
              <section id="introduction">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 10
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  Introduction to Optics
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Optics is the branch of physics that deals with the
                  behaviour and properties of light. It includes the study
                  of reflection, refraction, image formation, lenses,
                  mirrors, optical instruments and dispersion.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-7xl">
                    💡
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Light helps us observe the world
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    The way light interacts with surfaces and transparent
                    materials explains mirrors, spectacles, cameras,
                    microscopes, telescopes and many other optical systems.
                  </p>

                </div>
              </section>

              {/* FOUR CONCEPTS */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Core Concepts
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Four Important Ideas
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {concepts.map((item) => (
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
                        {item.text}
                      </p>

                    </div>
                  ))}

                </div>
              </section>

              {/* LIGHT */}
              <section id="light" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Concept 01
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Light
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Light is a form of electromagnetic radiation that can
                  propagate through space. The visible portion of
                  electromagnetic radiation can be detected by the human
                  eye.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-3">

                  <div className="rounded-3xl bg-yellow-50 p-7 text-center">
                    <div className="text-5xl">☀️</div>
                    <h3 className="mt-4 font-black">Source</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Objects that produce light are called luminous
                      sources.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-blue-50 p-7 text-center">
                    <div className="text-5xl">➡️</div>
                    <h3 className="mt-4 font-black">Ray</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      A ray represents the direction in which light travels.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-purple-50 p-7 text-center">
                    <div className="text-5xl">👁️</div>
                    <h3 className="mt-4 font-black">Detection</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      The eye detects visible light and forms visual
                      information.
                    </p>
                  </div>

                </div>
              </section>

              {/* REFLECTION */}
              <section id="reflection" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Concept 02
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Reflection of Light
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Reflection is the phenomenon in which light returns into
                  the same medium after striking a reflecting surface.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-8">

                  <div className="flex flex-col items-center gap-5">

                    <div className="text-5xl">
                      ↘️
                    </div>

                    <div className="h-1 w-full max-w-md rounded-full bg-slate-700" />

                    <div className="text-5xl">
                      ↗️
                    </div>

                  </div>

                  <p className="mt-6 text-center text-sm leading-7 text-slate-600">
                    The incoming ray is called the incident ray and the
                    returning ray is called the reflected ray.
                  </p>

                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-black">Incident Ray</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      The ray falling on the reflecting surface.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-black">Normal</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      A perpendicular line drawn at the point of incidence.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-black">Reflected Ray</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      The ray travelling away from the surface.
                    </p>
                  </div>

                </div>
              </section>

              {/* LAWS OF REFLECTION */}
              <section id="laws-reflection" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Laws
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Laws of Reflection
                </h2>

                <div className="mt-8 space-y-5">

                  <div className="rounded-3xl bg-blue-50 p-7">
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                      LAW 01
                    </span>

                    <h3 className="mt-4 text-xl font-black">
                      Angle of incidence equals angle of reflection
                    </h3>

                    <p className="mt-3 text-2xl font-black text-blue-700">
                      ∠i = ∠r
                    </p>
                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-7">
                    <span className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold text-white">
                      LAW 02
                    </span>

                    <h3 className="mt-4 text-xl font-black">
                      Rays and normal are coplanar
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      The incident ray, reflected ray and normal at the
                      point of incidence lie in the same plane.
                    </p>
                  </div>

                </div>
              </section>

              {/* PLANE MIRROR */}
              <section id="plane-mirror" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Mirrors
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Plane Mirror
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A plane mirror has a flat reflecting surface. It forms an
                  image that appears behind the mirror.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-50 p-8">

                  <div className="flex items-center justify-center gap-8">

                    <div className="text-center">
                      <div className="text-6xl">🙂</div>
                      <p className="mt-3 font-bold">Object</p>
                    </div>

                    <div className="h-40 w-2 rounded-full bg-slate-700" />

                    <div className="text-center opacity-60">
                      <div className="text-6xl">🙂</div>
                      <p className="mt-3 font-bold">Image</p>
                    </div>

                  </div>

                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {[
                    "Virtual image",
                    "Erect image",
                    "Same size as object",
                    "Laterally inverted",
                    "Image distance equals object distance",
                    "Image appears behind the mirror",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-green-50 p-4 text-sm font-semibold text-green-800"
                    >
                      ✓ {item}
                    </div>
                  ))}

                </div>
              </section>

              {/* SPHERICAL MIRRORS */}
              <section id="spherical-mirrors" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Mirrors
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Spherical Mirrors
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Spherical mirrors are parts of spherical reflecting
                  surfaces. They are mainly of two types.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                  <div className="rounded-3xl bg-blue-50 p-8">

                    <div className="text-6xl">🥣</div>

                    <h3 className="mt-5 text-2xl font-black">
                      Concave Mirror
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      A concave mirror has a reflecting surface curved
                      inward. It can produce real or virtual images.
                    </p>

                    <div className="mt-5 rounded-xl bg-white p-4 text-sm">
                      Used in headlights, shaving mirrors and some optical
                      instruments.
                    </div>

                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-8">

                    <div className="text-6xl">🪞</div>

                    <h3 className="mt-5 text-2xl font-black">
                      Convex Mirror
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      A convex mirror has a reflecting surface curved
                      outward and generally forms a virtual, erect and
                      diminished image.
                    </p>

                    <div className="mt-5 rounded-xl bg-white p-4 text-sm">
                      Commonly used as rear-view mirrors in vehicles.
                    </div>

                  </div>

                </div>
              </section>

              {/* MIRROR FORMULA */}
              <section id="mirror-formula" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Formula
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Mirror Formula
                </h2>

                <div className="mt-8 rounded-3xl bg-slate-900 p-10 text-center text-white">

                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                    Spherical Mirror
                  </p>

                  <p className="mt-5 text-5xl font-black">
                    1/f = 1/v + 1/u
                  </p>

                  <p className="mt-5 text-sm text-slate-300">
                    Where f is focal length, v is image distance and u is
                    object distance using the chosen sign convention.
                  </p>

                </div>

                <div className="mt-8 rounded-2xl bg-blue-50 p-6">

                  <h3 className="font-black">
                    Magnification
                  </h3>

                  <p className="mt-3 text-3xl font-black text-blue-700">
                    m = -v/u
                  </p>

                </div>
              </section>

              {/* REFRACTION */}
              <section id="refraction" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Concept 03
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Refraction of Light
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Refraction is the change in direction of light when it
                  passes obliquely from one transparent medium to another
                  because its speed changes.
                </p>

                <div className="mt-8 overflow-hidden rounded-3xl">

                  <div className="grid md:grid-cols-2">

                    <div className="bg-blue-100 p-8 text-center">

                      <div className="text-6xl">
                        💧
                      </div>

                      <h3 className="mt-4 font-black">
                        First Medium
                      </h3>

                      <p className="mt-2 text-sm text-slate-600">
                        Light travels with one speed.
                      </p>

                    </div>

                    <div className="bg-cyan-100 p-8 text-center">

                      <div className="text-6xl">
                        🔷
                      </div>

                      <h3 className="mt-4 font-black">
                        Second Medium
                      </h3>

                      <p className="mt-2 text-sm text-slate-600">
                        The speed changes and the ray may bend.
                      </p>

                    </div>

                  </div>

                </div>
              </section>

              {/* LAWS OF REFRACTION */}
              <section id="laws-refraction" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Laws
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Laws of Refraction
                </h2>

                <div className="mt-8 space-y-5">

                  <div className="rounded-3xl border border-slate-200 p-7">

                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                      LAW 01
                    </span>

                    <p className="mt-5 leading-7 text-slate-600">
                      The incident ray, refracted ray and normal at the
                      point of incidence lie in the same plane.
                    </p>

                  </div>

                  <div className="rounded-3xl border border-slate-200 p-7">

                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                      LAW 02
                    </span>

                    <p className="mt-5 text-3xl font-black text-blue-700">
                      n₁ sin i = n₂ sin r
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      This is commonly known as Snell&apos;s law.
                    </p>

                  </div>

                </div>
              </section>

              {/* REFRACTIVE INDEX */}
              <section id="refractive-index" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Important Quantity
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Refractive Index
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Refractive index describes how much the speed of light is
                  reduced in a medium compared with its speed in vacuum.
                </p>

                <div className="mt-8 rounded-3xl bg-indigo-50 p-8 text-center">

                  <p className="text-4xl font-black text-indigo-700">
                    n = c / v
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">

                    <div className="rounded-xl bg-white p-5">
                      <p className="font-black">c</p>
                      <p className="mt-1 text-sm text-slate-600">
                        Speed of light in vacuum
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-5">
                      <p className="font-black">v</p>
                      <p className="mt-1 text-sm text-slate-600">
                        Speed of light in the medium
                      </p>
                    </div>

                  </div>

                </div>
              </section>

              {/* LENSES */}
              <section id="lenses" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Lenses
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Lenses
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A lens is a transparent optical element that refracts
                  light and can form images.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                  <div className="rounded-3xl bg-blue-50 p-8 text-center">

                    <div className="text-7xl">
                      🔎
                    </div>

                    <h3 className="mt-5 text-2xl font-black">
                      Convex Lens
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Thicker at the centre and thinner near the edges.
                      It generally converges parallel rays.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-8 text-center">

                    <div className="text-7xl">
                      👓
                    </div>

                    <h3 className="mt-5 text-2xl font-black">
                      Concave Lens
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Thinner at the centre and thicker near the edges. It
                      generally diverges parallel rays.
                    </p>

                  </div>

                </div>
              </section>

              {/* LENS FORMULA */}
              <section id="lens-formula" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Formula
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Lens Formula
                </h2>

                <div className="mt-8 rounded-3xl bg-slate-900 p-10 text-center text-white">

                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                    Thin Lens
                  </p>

                  <p className="mt-5 text-5xl font-black">
                    1/f = 1/v - 1/u
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    The exact signs of u, v and f depend on the Cartesian
                    sign convention being used.
                  </p>

                </div>

                <div className="mt-8 rounded-2xl bg-blue-50 p-6">

                  <h3 className="font-black">
                    Lens Magnification
                  </h3>

                  <p className="mt-3 text-3xl font-black text-blue-700">
                    m = v/u
                  </p>

                </div>
              </section>

              {/* POWER */}
              <section id="power" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Lens Property
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Power of a Lens
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  The power of a lens indicates its ability to converge or
                  diverge light. It is measured in dioptre (D).
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-9 text-center">

                  <p className="text-5xl font-black text-blue-700">
                    P = 1/f
                  </p>

                  <p className="mt-4 text-sm text-slate-600">
                    Here f must be expressed in metres.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">

                    <div className="rounded-xl bg-white p-5">
                      <p className="text-2xl font-black text-green-600">
                        +P
                      </p>
                      <p className="mt-2 text-sm">
                        Generally indicates a converging lens.
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-5">
                      <p className="text-2xl font-black text-red-600">
                        -P
                      </p>
                      <p className="mt-2 text-sm">
                        Generally indicates a diverging lens.
                      </p>
                    </div>

                  </div>

                </div>
              </section>

              {/* HUMAN EYE */}
              <section id="eye" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Human Eye
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Human Eye
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  The human eye is a natural optical system that receives
                  light and forms an image on the retina. The brain
                  interprets the signals produced by the visual system.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                  {[
                    ["👁️", "Cornea", "Transparent front surface that helps focus incoming light."],
                    ["🔵", "Iris", "Controls the amount of light entering the eye."],
                    ["🔍", "Eye Lens", "Focuses light on the retina."],
                    ["⚫", "Pupil", "Opening through which light enters the eye."],
                    ["🧠", "Optic Nerve", "Carries visual information toward the brain."],
                    ["🎯", "Retina", "Light-sensitive layer where the image is formed."],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 p-6"
                    >

                      <div className="text-4xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 font-black">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>
              </section>

              {/* INSTRUMENTS */}
              <section id="instruments" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Applications
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Optical Instruments
                </h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  {[
                    ["📷", "Camera", "Uses lenses to form images of objects on a photosensitive sensor."],
                    ["🔬", "Microscope", "Uses lenses to produce enlarged images of very small objects."],
                    ["🔭", "Telescope", "Used to observe distant objects, especially astronomical objects."],
                    ["📽️", "Projector", "Forms and enlarges an image for viewing on a screen."],
                    ["👓", "Spectacles", "Correct certain refractive errors of the eye."],
                    ["🔍", "Magnifying Glass", "A convex lens can provide an enlarged virtual image."],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl bg-slate-50 p-7"
                    >

                      <div className="text-5xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 text-xl font-black">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>
              </section>

              {/* DISPERSION */}
              <section id="dispersion" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Colours
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Dispersion of Light
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Dispersion is the separation of white light into its
                  component colours when it passes through a suitable
                  refracting medium such as a prism.
                </p>

                <div className="mt-8 rounded-3xl bg-gradient-to-br from-red-50 via-yellow-50 to-purple-50 p-8">

                  <div className="flex flex-wrap justify-center gap-2">

                    {[
                      "Violet",
                      "Indigo",
                      "Blue",
                      "Green",
                      "Yellow",
                      "Orange",
                      "Red",
                    ].map((colour) => (
                      <span
                        key={colour}
                        className="rounded-full bg-white px-4 py-3 text-sm font-bold shadow-sm"
                      >
                        {colour}
                      </span>
                    ))}

                  </div>

                  <p className="mt-6 text-center text-xl font-black">
                    VIBGYOR
                  </p>

                </div>

                <div className="mt-8 rounded-2xl bg-blue-50 p-6">

                  <h3 className="font-black">
                    Rainbow
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    A natural rainbow involves processes including
                    refraction, internal reflection and dispersion of
                    sunlight in water droplets.
                  </p>

                </div>
              </section>

              {/* APPLICATIONS */}
              <section id="applications" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Real World
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Applications of Optics
                </h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                  {[
                    ["📷", "Photography", "Cameras use optical systems to capture images."],
                    ["👓", "Vision Correction", "Lenses are used in spectacles and contact lenses."],
                    ["🔬", "Microscopy", "Optics enables detailed observation of tiny objects."],
                    ["🔭", "Astronomy", "Telescopes help observe distant celestial objects."],
                    ["📡", "Fibre Optics", "Light can carry information through optical fibres."],
                    ["🏥", "Medical Imaging", "Optical systems are used in several medical instruments."],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                      <div className="text-5xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 font-black">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>
              </section>

              {/* FORMULAS */}
              <section id="formulas" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Optics Formulas
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">

                  <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white md:grid">

                    <div className="p-4">Quantity</div>
                    <div className="p-4">Formula</div>
                    <div className="p-4">Use</div>

                  </div>

                  {formulas.map(([name, formula, meaning], index) => (
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

                      <div className="p-5 text-xl font-black text-slate-900">
                        {formula}
                      </div>

                      <div className="p-5 text-sm leading-6 text-slate-600">
                        {meaning}
                      </div>

                    </div>
                  ))}

                </div>
              </section>

              {/* IMPORTANT */}
              <section id="important" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Exam Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Points
                </h2>

                <div className="mt-8 space-y-3">

                  {importantPoints.map((point, index) => (
                    <div
                      key={point}
                      className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
                    >

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-600">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-slate-600">
                        {point}
                      </p>

                    </div>
                  ))}

                </div>
              </section>

              {/* PRACTICE */}
              <section className="mt-16 rounded-3xl bg-gradient-to-br from-violet-700 via-blue-600 to-cyan-500 p-8 text-white shadow-2xl md:p-10">

                <p className="font-bold uppercase tracking-widest text-blue-100">
                  Test Your Knowledge
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Ready for Optics MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your knowledge of light, reflection, refraction,
                  mirrors, lenses, the human eye and optical instruments.
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
                  <div className="h-full w-[95%] rounded-full bg-blue-600" />
                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Chapter 10 of the Physics section.
                </p>

              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="border-t border-slate-200 bg-slate-50 py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 sm:flex-row lg:px-8">

          <Link
            href="/learn/physics/magnetism"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Magnetism
          </Link>

          <Link
            href="/learn/physics"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Physics Chapters →
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
                Learning, practice, AI tools and developer utilities in
                one place.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Learning
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">

                <Link href="/learn" className="block hover:text-white">
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

                <Link href="/ai-hub" className="block hover:text-white">
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