import Link from "next/link";

const soundProperties = [
  {
    icon: "〰️",
    title: "Frequency",
    description:
      "Frequency is the number of vibrations completed by a vibrating body in one second.",
    formula: "f = 1 / T",
    unit: "Hertz (Hz)",
  },
  {
    icon: "📏",
    title: "Wavelength",
    description:
      "Wavelength is the distance between two successive points in the same phase of a wave.",
    formula: "λ = v / f",
    unit: "Metre (m)",
  },
  {
    icon: "⚡",
    title: "Amplitude",
    description:
      "Amplitude is the maximum displacement of a vibrating particle from its mean position.",
    formula: "Maximum displacement",
    unit: "Metre (m)",
  },
  {
    icon: "🏎️",
    title: "Speed",
    description:
      "The speed of sound depends on the medium through which the sound travels.",
    formula: "v = fλ",
    unit: "m/s",
  },
];

const soundTypes = [
  {
    icon: "👂",
    title: "Audible Sound",
    description:
      "Sound that can normally be heard by the human ear.",
    range: "20 Hz to 20,000 Hz",
  },
  {
    icon: "🐘",
    title: "Infrasound",
    description:
      "Sound having a frequency below the normal audible range of humans.",
    range: "Below 20 Hz",
  },
  {
    icon: "🦇",
    title: "Ultrasound",
    description:
      "Sound having a frequency above the normal audible range of humans.",
    range: "Above 20,000 Hz",
  },
];

const waveCharacteristics = [
  ["Frequency", "Number of vibrations per second", "Hz"],
  ["Time Period", "Time taken for one complete vibration", "Second (s)"],
  ["Wavelength", "Distance between corresponding points of waves", "Metre (m)"],
  ["Amplitude", "Maximum displacement from mean position", "Metre (m)"],
  ["Speed", "Distance travelled by wave per unit time", "m/s"],
];

const dailyExamples = [
  [
    "🎸",
    "Musical Instruments",
    "Vibrating strings, air columns or membranes produce sound in musical instruments.",
  ],
  [
    "📢",
    "Loudspeaker",
    "A loudspeaker converts electrical signals into mechanical vibrations that produce sound.",
  ],
  [
    "🗣️",
    "Human Voice",
    "Sound is produced when the vocal cords vibrate as air passes through them.",
  ],
  [
    "🦇",
    "Bats",
    "Bats use ultrasonic sounds for navigation and locating objects.",
  ],
  [
    "🏥",
    "Ultrasound",
    "Ultrasonic waves are used in medical imaging and some medical treatments.",
  ],
  [
    "🚢",
    "SONAR",
    "SONAR uses sound waves to detect underwater objects and measure distances.",
  ],
];

const importantPoints = [
  "Sound is produced by vibrating objects.",
  "Sound requires a material medium for propagation.",
  "Sound cannot travel through a vacuum.",
  "Sound is generally a mechanical wave.",
  "Sound travels as a longitudinal wave through air.",
  "Frequency determines the pitch of sound.",
  "Amplitude is related to the loudness of sound.",
  "The SI unit of frequency is Hertz (Hz).",
  "The SI unit of wavelength is metre (m).",
  "The relation between speed, frequency and wavelength is v = fλ.",
  "Human beings can normally hear sounds between 20 Hz and 20,000 Hz.",
  "Ultrasound has a frequency above 20,000 Hz.",
  "Infrasound has a frequency below 20 Hz.",
  "Echo is caused by reflection of sound.",
  "SONAR uses reflection of sound waves to locate underwater objects.",
];

const chapterContents = [
  ["01", "What is Sound?", "#sound"],
  ["02", "Production of Sound", "#production"],
  ["03", "Propagation of Sound", "#propagation"],
  ["04", "Sound Waves", "#waves"],
  ["05", "Characteristics of Sound", "#characteristics"],
  ["06", "Frequency & Time Period", "#frequency"],
  ["07", "Amplitude & Loudness", "#amplitude"],
  ["08", "Pitch", "#pitch"],
  ["09", "Speed of Sound", "#speed"],
  ["10", "Audible, Infrasound & Ultrasound", "#types"],
  ["11", "Reflection & Echo", "#echo"],
  ["12", "Applications of Ultrasound", "#ultrasound"],
  ["13", "SONAR", "#sonar"],
  ["14", "Important Formulas", "#formulas"],
  ["15", "Important Points", "#important-points"],
];

export default function SoundPage() {
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
              🔊
            </div>

            <div>
              <p className="font-semibold text-blue-100">
                PHYSICS CHAPTER 06
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Sound
              </h2>
            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn how sound is produced and propagated, sound waves,
            frequency, amplitude, pitch, loudness, echo, ultrasound,
            infrasound and SONAR.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#sound"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              🔊 Start Learning
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
            Sound
          </span>

        </div>

      </div>

      {/* MAIN */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            <article>

              {/* INTRO */}
              <section id="sound">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 06
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What is Sound?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Sound is a form of energy that produces the sensation of
                  hearing. It is produced when an object vibrates and travels
                  through a suitable material medium such as air, water or
                  solids.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-6xl">
                    🔊
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Sound is produced by vibrations
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    A vibrating source transfers energy to the surrounding
                    medium and produces sound waves.
                  </p>

                </div>

              </section>

              {/* PRODUCTION */}
              <section id="production" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Basic Concept
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Production of Sound
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Sound is produced by the vibration of an object. When the
                  object vibrates, it causes nearby particles of the medium
                  to vibrate. These vibrations travel through the medium as
                  sound waves.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  {[
                    ["🎸", "Guitar String", "A vibrating string produces sound."],
                    ["🥁", "Drum", "A vibrating stretched membrane produces sound."],
                    ["🗣️", "Human Voice", "Vibrating vocal cords produce sound."],
                  ].map(([icon, title, description]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >

                      <div className="text-4xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 text-xl font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {description}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* PROPAGATION */}
              <section id="propagation" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Wave Propagation
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  How Does Sound Travel?
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Sound needs a material medium to travel. It can travel
                  through solids, liquids and gases, but it cannot travel
                  through a vacuum.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-3">

                  {[
                    ["💨", "Gas", "Sound travels through air."],
                    ["💧", "Liquid", "Sound can travel through water."],
                    ["🧱", "Solid", "Sound can travel through solids."],
                  ].map(([icon, title, description]) => (
                    <div
                      key={title}
                      className="rounded-2xl bg-blue-50 p-6 text-center"
                    >

                      <div className="text-4xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                      </p>

                    </div>
                  ))}

                </div>

                <div className="mt-7 rounded-2xl border border-red-100 bg-red-50 p-6">

                  <h3 className="font-black text-red-800">
                    Important
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-red-700">
                    Sound cannot travel through a vacuum because there are
                    no particles available to transmit the vibrations.
                  </p>

                </div>

              </section>

              {/* WAVES */}
              <section id="waves" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Sound Waves
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Sound as a Longitudinal Wave
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  In air, sound travels as a longitudinal wave. The particles
                  of the medium vibrate back and forth parallel to the
                  direction in which the wave travels.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-8">

                  <div className="overflow-hidden rounded-2xl bg-white p-6">

                    <div className="flex items-center gap-2">

                      {Array.from({ length: 12 }).map((_, index) => (
                        <div
                          key={index}
                          className={`h-16 rounded-full ${
                            index % 3 === 0
                              ? "w-3 bg-blue-600"
                              : index % 3 === 1
                              ? "w-8 bg-blue-200"
                              : "w-4 bg-blue-400"
                          }`}
                        />
                      ))}

                    </div>

                    <p className="mt-5 text-center text-sm font-semibold text-slate-600">
                      Compressions and rarefactions form during propagation.
                    </p>

                  </div>

                </div>

              </section>

              {/* CHARACTERISTICS */}
              <section id="characteristics" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Wave Properties
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Characteristics of Sound Waves
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {soundProperties.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-3xl">
                        {item.icon}
                      </div>

                      <h3 className="mt-5 text-xl font-black text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-5 rounded-xl bg-slate-50 p-4">

                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                          Formula / Definition
                        </p>

                        <p className="mt-1 font-black text-slate-900">
                          {item.formula}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Unit: {item.unit}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* FREQUENCY */}
              <section id="frequency" className="mt-16">

                <div className="rounded-3xl bg-indigo-50 p-8">

                  <p className="font-bold uppercase tracking-widest text-indigo-600">
                    Important Quantity
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-slate-900">
                    Frequency & Time Period
                  </h2>

                  <p className="mt-5 leading-8 text-slate-600">
                    Frequency is the number of complete vibrations or
                    oscillations made in one second. Time period is the time
                    required for one complete vibration.
                  </p>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">

                    <div className="rounded-2xl bg-white p-6">

                      <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                        Frequency
                      </p>

                      <p className="mt-3 text-4xl font-black">
                        f = 1 / T
                      </p>

                      <p className="mt-3 text-sm text-slate-600">
                        SI unit: Hertz (Hz)
                      </p>

                    </div>

                    <div className="rounded-2xl bg-white p-6">

                      <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                        Time Period
                      </p>

                      <p className="mt-3 text-4xl font-black">
                        T = 1 / f
                      </p>

                      <p className="mt-3 text-sm text-slate-600">
                        SI unit: Second (s)
                      </p>

                    </div>

                  </div>

                </div>

              </section>

              {/* AMPLITUDE */}
              <section id="amplitude" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Loudness
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Amplitude & Loudness
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Amplitude is the maximum displacement of a vibrating
                  particle from its mean position. Greater amplitude
                  generally produces a louder sound.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div className="rounded-3xl bg-blue-50 p-7">

                    <div className="text-5xl">
                      🔊
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      Large Amplitude
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Produces a louder sound.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-slate-50 p-7">

                    <div className="text-5xl">
                      🔉
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      Small Amplitude
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Produces a softer sound.
                    </p>

                  </div>

                </div>

              </section>

              {/* PITCH */}
              <section id="pitch" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Frequency
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Pitch of Sound
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Pitch is the characteristic of sound that helps us
                  distinguish between high and low sounds. Pitch depends
                  mainly on frequency.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">

                    <div className="text-4xl">
                      🎵
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      High Pitch
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      High frequency produces a high-pitched sound.
                    </p>

                  </div>

                  <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-7">

                    <div className="text-4xl">
                      🎶
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      Low Pitch
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Low frequency produces a low-pitched sound.
                    </p>

                  </div>

                </div>

              </section>

              {/* SPEED */}
              <section id="speed" className="mt-16">

                <div className="rounded-3xl bg-slate-900 p-8 text-white">

                  <p className="font-bold uppercase tracking-widest text-cyan-400">
                    Wave Motion
                  </p>

                  <h2 className="mt-3 text-3xl font-black">
                    Speed of Sound
                  </h2>

                  <p className="mt-5 leading-8 text-slate-300">
                    The speed of sound depends on the nature and properties
                    of the medium. Sound generally travels faster through
                    solids than through liquids and gases.
                  </p>

                  <div className="mt-7 rounded-2xl bg-white/5 p-6">

                    <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                      Wave Equation
                    </p>

                    <p className="mt-2 text-4xl font-black">
                      v = fλ
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">

                      <div className="rounded-xl bg-white/5 p-4">
                        <p className="text-xs text-slate-400">
                          v
                        </p>
                        <p className="font-bold">
                          Wave Speed
                        </p>
                      </div>

                      <div className="rounded-xl bg-white/5 p-4">
                        <p className="text-xs text-slate-400">
                          f
                        </p>
                        <p className="font-bold">
                          Frequency
                        </p>
                      </div>

                      <div className="rounded-xl bg-white/5 p-4">
                        <p className="text-xs text-slate-400">
                          λ
                        </p>
                        <p className="font-bold">
                          Wavelength
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </section>

              {/* TYPES */}
              <section id="types" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Frequency Range
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Audible, Infrasound & Ultrasound
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  {soundTypes.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                      <div className="text-4xl">
                        {item.icon}
                      </div>

                      <h3 className="mt-4 text-xl font-black text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-5 rounded-xl bg-blue-50 p-4">

                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                          Frequency
                        </p>

                        <p className="mt-1 font-black text-blue-800">
                          {item.range}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* ECHO */}
              <section id="echo" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Reflection of Sound
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Reflection of Sound & Echo
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Sound can be reflected when it strikes a suitable surface.
                  A repeated sound heard after reflection from a distant
                  surface is called an echo.
                </p>

                <div className="mt-8 rounded-3xl bg-indigo-50 p-8">

                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                      <div className="text-4xl">
                        🗣️
                      </div>
                      <p className="mt-2 font-black">
                        Source
                      </p>
                    </div>

                    <div className="text-3xl text-indigo-600">
                      ➡️
                    </div>

                    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                      <div className="text-4xl">
                        🧱
                      </div>
                      <p className="mt-2 font-black">
                        Reflecting Surface
                      </p>
                    </div>

                    <div className="text-3xl text-indigo-600">
                      ➡️
                    </div>

                    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                      <div className="text-4xl">
                        👂
                      </div>
                      <p className="mt-2 font-black">
                        Listener
                      </p>
                    </div>

                  </div>

                </div>

              </section>

              {/* ULTRASOUND */}
              <section id="ultrasound" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Applications
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Applications of Ultrasound
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Ultrasound has a frequency above the upper limit of human
                  hearing. It is widely used in medicine, industry and
                  technology.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {[
                    ["🏥", "Medical Imaging", "Ultrasound is used to create images of internal organs and monitor a developing fetus."],
                    ["🦷", "Cleaning", "Ultrasonic vibrations can be used for cleaning delicate objects and equipment."],
                    ["🔧", "Industrial Testing", "Ultrasound can help detect internal cracks or defects in materials."],
                    ["🩺", "Medical Treatment", "Ultrasonic energy is used in certain medical procedures and treatments."],
                  ].map(([icon, title, description]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                      <div className="text-4xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 text-xl font-black">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {description}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* SONAR */}
              <section id="sonar" className="mt-16">

                <div className="rounded-3xl bg-blue-50 p-8">

                  <p className="font-bold uppercase tracking-widest text-blue-600">
                    Technology
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-slate-900">
                    SONAR
                  </h2>

                  <p className="mt-5 leading-8 text-slate-600">
                    SONAR stands for Sound Navigation and Ranging. It uses
                    sound waves to detect objects underwater and determine
                    their distance or location.
                  </p>

                  <div className="mt-7 rounded-2xl bg-white p-6">

                    <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                      Basic Principle
                    </p>

                    <p className="mt-3 text-lg font-black text-slate-900">
                      Transmit → Reflection → Receive → Calculate Distance
                    </p>

                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl bg-white p-5 text-center">
                      <div className="text-3xl">
                        🚢
                      </div>
                      <p className="mt-3 font-bold">
                        Ships
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center">
                      <div className="text-3xl">
                        🌊
                      </div>
                      <p className="mt-3 font-bold">
                        Ocean Mapping
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center">
                      <div className="text-3xl">
                        🐟
                      </div>
                      <p className="mt-3 font-bold">
                        Underwater Objects
                      </p>
                    </div>

                  </div>

                </div>

              </section>

              {/* DAILY EXAMPLES */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Real Life
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Sound in Daily Life
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {dailyExamples.map(([icon, title, description]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >

                      <div className="text-4xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 text-xl font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {description}
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
                  Important Sound Formulas
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                  <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white md:grid">

                    <div className="p-4">
                      Quantity
                    </div>

                    <div className="p-4">
                      Formula
                    </div>

                    <div className="p-4">
                      SI Unit
                    </div>

                  </div>

                  {[
                    ["Frequency", "f = 1 / T", "Hz"],
                    ["Time Period", "T = 1 / f", "s"],
                    ["Wave Speed", "v = fλ", "m/s"],
                    ["Wavelength", "λ = v / f", "m"],
                    ["Frequency", "f = v / λ", "Hz"],
                  ].map(([name, formula, unit], index) => (
                    <div
                      key={`${name}-${formula}`}
                      className={`grid grid-cols-1 md:grid-cols-3 ${
                        index !== 4
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
                          Unit:
                        </span>
                        {unit}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* WAVE CHARACTERISTICS TABLE */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Quick Reference
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Sound Wave Characteristics
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">

                  <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white md:grid">

                    <div className="p-4">
                      Quantity
                    </div>

                    <div className="p-4">
                      Meaning
                    </div>

                    <div className="p-4">
                      Unit
                    </div>

                  </div>

                  {waveCharacteristics.map((row, index) => (
                    <div
                      key={row[0]}
                      className={`grid grid-cols-1 md:grid-cols-3 ${
                        index !== waveCharacteristics.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-4 font-black text-blue-600">
                        {row[0]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="mr-2 font-bold md:hidden">
                          Meaning:
                        </span>
                        {row[1]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="mr-2 font-bold md:hidden">
                          Unit:
                        </span>
                        {row[2]}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* IMPORTANT POINTS */}
              <section id="important-points" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
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

              {/* PRACTICE */}
              <section className="mt-16 rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white shadow-2xl md:p-10">

                <p className="font-bold uppercase tracking-widest text-blue-100">
                  Test Your Knowledge
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Ready for Sound MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your understanding of sound waves, frequency,
                  amplitude, pitch, echo, ultrasound and SONAR.
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

                  {chapterContents.map(([number, title, href]) => (
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
                  Chapter Progress
                </h3>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-blue-200">

                  <div className="h-full w-4/5 rounded-full bg-blue-600" />

                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Keep learning to complete this chapter.
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
            href="/learn/physics/heat-temperature"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Heat & Temperature
          </Link>

          <Link
            href="/learn/physics/light"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Light →
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