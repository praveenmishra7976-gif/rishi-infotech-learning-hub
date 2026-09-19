import Link from "next/link";

const cpuParts = [
  {
    icon: "➕",
    title: "ALU",
    description:
      "The Arithmetic Logic Unit performs arithmetic calculations and logical operations.",
  },
  {
    icon: "🎛️",
    title: "Control Unit",
    description:
      "The Control Unit controls and coordinates the activities of the processor and other components.",
  },
  {
    icon: "⚡",
    title: "Registers",
    description:
      "Registers are very small and extremely fast storage locations inside the CPU.",
  },
];

const memoryTypes = [
  {
    icon: "🧠",
    title: "RAM",
    full: "Random Access Memory",
    description:
      "RAM temporarily stores programs and data currently being used by the computer.",
    feature: "Volatile memory",
  },
  {
    icon: "📖",
    title: "ROM",
    full: "Read Only Memory",
    description:
      "ROM stores important instructions required for basic computer operations.",
    feature: "Non-volatile memory",
  },
  {
    icon: "⚡",
    title: "Cache Memory",
    full: "High-Speed Memory",
    description:
      "Cache is very fast memory that stores frequently used data and instructions close to the CPU.",
    feature: "Very high speed",
  },
];

const memoryUnits = [
  ["Bit", "Smallest unit of data"],
  ["Byte", "8 bits"],
  ["KB", "1,024 bytes"],
  ["MB", "1,024 KB"],
  ["GB", "1,024 MB"],
  ["TB", "1,024 GB"],
];

const comparisons = [
  ["RAM", "Temporary", "Fast", "Data is generally lost when power is removed"],
  ["ROM", "Permanent", "Slower than RAM", "Data is retained"],
  ["Cache", "Temporary", "Very Fast", "Stores frequently used data"],
  ["HDD", "Permanent", "Moderate", "Large storage capacity"],
  ["SSD", "Permanent", "Fast", "Fast storage with no moving parts"],
];

const importantPoints = [
  "CPU stands for Central Processing Unit.",
  "CPU is responsible for processing instructions.",
  "ALU performs arithmetic and logical operations.",
  "The Control Unit coordinates computer operations.",
  "Registers are very fast storage locations inside the CPU.",
  "RAM is volatile memory.",
  "ROM is non-volatile memory.",
  "Cache memory is faster than RAM.",
  "Primary memory is directly accessible by the CPU.",
  "HDD and SSD are examples of secondary storage.",
];

export default function CpuMemoryPage() {
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

            <Link
              href="/"
              className="font-medium hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/learn"
              className="font-medium text-blue-600"
            >
              Learn
            </Link>

            <Link
              href="/practice"
              className="font-medium hover:text-blue-600"
            >
              Practice
            </Link>

            <Link
              href="/ai-hub"
              className="font-medium hover:text-blue-600"
            >
              AI Hub
            </Link>

            <Link
              href="/developer-hub"
              className="font-medium hover:text-blue-600"
            >
              Developer
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500">

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">

          <Link
            href="/learn/computer"
            className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            ← Computer Chapters
          </Link>

          <div className="mt-8 flex items-center gap-5">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              🧠
            </div>

            <div>

              <p className="font-semibold text-blue-100">
                CHAPTER 02
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                CPU & Memory
              </h2>

            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Understand the CPU, ALU, Control Unit, registers, RAM, ROM,
            cache memory, storage and important memory units.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#cpu"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              🧠 Start Learning
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

          <Link
            href="/learn"
            className="text-blue-600 hover:underline"
          >
            Learn
          </Link>

          <span className="mx-2 text-slate-400">
            /
          </span>

          <Link
            href="/learn/computer"
            className="text-blue-600 hover:underline"
          >
            Computer
          </Link>

          <span className="mx-2 text-slate-400">
            /
          </span>

          <span className="text-slate-500">
            CPU & Memory
          </span>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <section
        id="cpu"
        className="py-16"
      >

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* MAIN CONTENT */}
            <article>

              {/* INTRODUCTION */}
              <section>

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 02
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What is a CPU?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  CPU stands for Central Processing Unit. It is one of the
                  most important components of a computer because it
                  executes instructions, performs calculations and
                  coordinates many computer operations.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-6xl">
                    🧠
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    CPU = Central Processing Unit
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    The CPU receives instructions, processes them and
                    produces results according to the instructions given
                    by software.
                  </p>

                </div>

              </section>

              {/* CPU PARTS */}
              <section
                id="cpu-parts"
                className="mt-16"
              >

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  CPU Components
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Main Parts of CPU
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  {cpuParts.map((item) => (

                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
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

              {/* CPU WORKING */}
              <section
                id="cpu-working"
                className="mt-16"
              >

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Basic Working
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  How Does the CPU Work?
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  The CPU generally works through a cycle of fetching an
                  instruction, decoding it and executing it.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  {[
                    ["1", "Fetch", "The CPU gets an instruction from memory."],
                    ["2", "Decode", "The instruction is interpreted and understood."],
                    ["3", "Execute", "The CPU performs the required operation."],
                  ].map(([number, title, description]) => (

                    <div
                      key={number}
                      className="rounded-2xl bg-blue-50 p-6 text-center"
                    >

                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                        {number}
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

              </section>

              {/* MEMORY */}
              <section
                id="memory"
                className="mt-16"
              >

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Computer Memory
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  What is Memory?
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Computer memory is used to store data, instructions and
                  information needed by the computer. Memory can be
                  temporary or permanent depending on its type.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  {memoryTypes.map((item) => (

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

                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                        {item.full}
                      </p>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-5 rounded-xl bg-slate-50 p-3 text-sm font-bold text-slate-700">
                        {item.feature}
                      </div>

                    </div>

                  ))}

                </div>

              </section>

              {/* RAM */}
              <section
                id="ram"
                className="mt-16 rounded-3xl bg-blue-50 p-8"
              >

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Memory Type
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  RAM — Random Access Memory
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  RAM is the temporary working memory of a computer. It
                  stores data and instructions that are actively being
                  used by the CPU.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  {[
                    "Temporary memory",
                    "Fast access",
                    "Used by running programs",
                    "Volatile memory",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white p-4"
                    >

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                        ✓
                      </span>

                      <span className="text-sm font-semibold text-slate-700">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </section>

              {/* ROM */}
              <section
                id="rom"
                className="mt-16 rounded-3xl bg-slate-900 p-8 text-white"
              >

                <p className="font-bold uppercase tracking-widest text-cyan-400">
                  Memory Type
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  ROM — Read Only Memory
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  ROM is non-volatile memory that stores important
                  instructions. The information stored in ROM remains
                  available even when the power is turned off.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  {[
                    "Non-volatile memory",
                    "Retains stored information",
                    "Used for important instructions",
                    "Generally slower than RAM",
                  ].map((item) => (

                    <div
                      key={item}
                      className="rounded-xl bg-white/5 p-4 text-sm text-slate-300"
                    >
                      ✓ {item}
                    </div>

                  ))}

                </div>

              </section>

              {/* CACHE */}
              <section
                id="cache"
                className="mt-16"
              >

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  High-Speed Memory
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Cache Memory
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Cache memory is a small amount of very fast memory
                  located close to or integrated with the CPU. It stores
                  frequently used data and instructions to reduce access
                  time.
                </p>

                <div className="mt-7 rounded-3xl border border-cyan-100 bg-cyan-50 p-7">

                  <div className="grid gap-5 sm:grid-cols-3">

                    <div className="rounded-2xl bg-white p-5 text-center">

                      <div className="text-3xl">
                        ⚡
                      </div>

                      <h3 className="mt-3 font-black">
                        Very Fast
                      </h3>

                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center">

                      <div className="text-3xl">
                        🧠
                      </div>

                      <h3 className="mt-3 font-black">
                        Near CPU
                      </h3>

                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center">

                      <div className="text-3xl">
                        🔄
                      </div>

                      <h3 className="mt-3 font-black">
                        Frequently Used Data
                      </h3>

                    </div>

                  </div>

                </div>

              </section>

              {/* MEMORY UNITS */}
              <section
                id="memory-units"
                className="mt-16"
              >

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Memory Units
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                  {memoryUnits.map(([unit, description], index) => (

                    <div
                      key={unit}
                      className={`grid grid-cols-2 ${
                        index !== memoryUnits.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-5 font-black text-blue-600">
                        {unit}
                      </div>

                      <div className="p-5 text-sm text-slate-600">
                        {description}
                      </div>

                    </div>

                  ))}

                </div>

              </section>

              {/* PRIMARY SECONDARY */}
              <section
                id="primary-secondary"
                className="mt-16"
              >

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Memory Classification
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Primary vs Secondary Memory
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">

                    <div className="text-4xl">
                      🧠
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      Primary Memory
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Memory that is directly accessible by the CPU.
                      RAM and ROM are common examples.
                    </p>

                    <div className="mt-5 space-y-2">

                      {[
                        "Directly accessed by CPU",
                        "Fast",
                        "Used during processing",
                        "RAM and ROM",
                      ].map((item) => (

                        <div
                          key={item}
                          className="text-sm font-semibold text-blue-700"
                        >
                          ✓ {item}
                        </div>

                      ))}

                    </div>

                  </div>

                  <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-7">

                    <div className="text-4xl">
                      💾
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      Secondary Memory
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Used for long-term storage of programs, files and
                      other information.
                    </p>

                    <div className="mt-5 space-y-2">

                      {[
                        "Long-term storage",
                        "Large capacity",
                        "Non-volatile",
                        "HDD, SSD, Pen Drive",
                      ].map((item) => (

                        <div
                          key={item}
                          className="text-sm font-semibold text-cyan-700"
                        >
                          ✓ {item}
                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </section>

              {/* COMPARISON */}
              <section
                id="comparison"
                className="mt-16"
              >

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Quick Comparison
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Memory & Storage Comparison
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">

                  <div className="hidden grid-cols-4 bg-slate-900 text-sm font-bold text-white md:grid">

                    <div className="p-4">
                      Component
                    </div>

                    <div className="p-4">
                      Type
                    </div>

                    <div className="p-4">
                      Speed
                    </div>

                    <div className="p-4">
                      Main Feature
                    </div>

                  </div>

                  {comparisons.map((row, index) => (

                    <div
                      key={row[0]}
                      className={`grid grid-cols-1 md:grid-cols-4 ${
                        index !== comparisons.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-4 font-black text-blue-600">
                        {row[0]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Type:{" "}
                        </span>
                        {row[1]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Speed:{" "}
                        </span>
                        {row[2]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Feature:{" "}
                        </span>
                        {row[3]}
                      </div>

                    </div>

                  ))}

                </div>

              </section>

              {/* IMPORTANT POINTS */}
              <section
                id="important-points"
                className="mt-16"
              >

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
                  Ready for CPU & Memory MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your understanding of CPU components, RAM, ROM,
                  cache memory and computer storage.
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

                  {[
                    ["01", "What is CPU?", "#cpu"],
                    ["02", "CPU Components", "#cpu-parts"],
                    ["03", "CPU Working", "#cpu-working"],
                    ["04", "Computer Memory", "#memory"],
                    ["05", "RAM", "#ram"],
                    ["06", "ROM", "#rom"],
                    ["07", "Cache Memory", "#cache"],
                    ["08", "Memory Units", "#memory-units"],
                    ["09", "Primary vs Secondary", "#primary-secondary"],
                    ["10", "Comparison", "#comparison"],
                    ["11", "Important Points", "#important-points"],
                  ].map(([number, title, href]) => (

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

                  <div className="h-full w-2/7 rounded-full bg-blue-600" />

                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Chapter 2 of 7 — CPU & Memory
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
            href="/learn/computer/introduction"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Introduction
          </Link>

          <Link
            href="/learn/computer/storage"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Storage →
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
                  href="/learn/computer"
                  className="block hover:text-white"
                >
                  Computer
                </Link>

                <Link
                  href="/learn/physics"
                  className="block hover:text-white"
                >
                  Physics
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