import Link from "next/link";

const storageTypes = [
  {
    icon: "💽",
    title: "Hard Disk Drive",
    short: "HDD",
    description:
      "A hard disk drive is a magnetic storage device used to store operating systems, applications, documents, videos and other files.",
    points: ["Large capacity", "Magnetic storage", "Moving parts", "Lower cost"],
  },
  {
    icon: "⚡",
    title: "Solid State Drive",
    short: "SSD",
    description:
      "An SSD stores data using flash memory. It has no moving mechanical parts and provides faster performance than traditional HDDs.",
    points: ["Very fast", "No moving parts", "Quiet operation", "Lower power use"],
  },
  {
    icon: "🔌",
    title: "Pen Drive",
    short: "USB Flash Drive",
    description:
      "A pen drive is a small portable storage device that connects to a computer through a USB port.",
    points: ["Portable", "USB connection", "Easy file transfer", "Reusable"],
  },
  {
    icon: "📱",
    title: "Memory Card",
    short: "Flash Storage",
    description:
      "Memory cards are small removable storage devices commonly used in smartphones, cameras and other portable devices.",
    points: ["Small size", "Portable", "Flash memory", "Removable"],
  },
  {
    icon: "💿",
    title: "Optical Disc",
    short: "CD / DVD / Blu-ray",
    description:
      "Optical discs use laser technology to read and write digital information.",
    points: ["Laser technology", "Removable", "CD/DVD/Blu-ray", "Easy distribution"],
  },
  {
    icon: "☁️",
    title: "Cloud Storage",
    short: "Online Storage",
    description:
      "Cloud storage allows users to save and access files through internet-connected servers.",
    points: ["Online access", "Backup", "Multiple devices", "Internet required"],
  },
];

const storageComparison = [
  ["HDD", "Magnetic", "Moderate", "High", "Low"],
  ["SSD", "Flash", "Very Fast", "High", "Medium"],
  ["Pen Drive", "Flash", "Fast", "Medium", "Low"],
  ["Memory Card", "Flash", "Fast", "Medium", "Low"],
  ["CD/DVD", "Optical", "Slow", "Low", "Very Low"],
  ["Cloud", "Online", "Depends on Internet", "Very High", "Varies"],
];

const storageUnits = [
  ["Bit", "Smallest unit of digital data"],
  ["Byte", "8 bits"],
  ["KB", "1,024 bytes"],
  ["MB", "1,024 KB"],
  ["GB", "1,024 MB"],
  ["TB", "1,024 GB"],
  ["PB", "1,024 TB"],
];

const importantPoints = [
  "Storage devices are used to save digital data.",
  "HDD uses magnetic technology to store data.",
  "SSD uses flash memory and has no moving parts.",
  "SSD is generally faster than HDD.",
  "Pen drives use USB connections.",
  "Memory cards are commonly used in smartphones and cameras.",
  "CD, DVD and Blu-ray are examples of optical discs.",
  "Cloud storage stores data on remote servers.",
  "Secondary storage is generally non-volatile.",
  "Storage capacity is commonly measured in GB and TB.",
];

const storageUses = [
  ["📄", "Documents", "Store PDFs, Word files, spreadsheets and other documents."],
  ["🎬", "Videos", "Store movies, recorded videos and other media files."],
  ["🎵", "Music", "Store songs, audio recordings and sound files."],
  ["📸", "Photos", "Store photographs and digital images."],
  ["🎮", "Games", "Store games and their required files."],
  ["💻", "Software", "Store operating systems and application programs."],
];

export default function StoragePage() {
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
              💾
            </div>

            <div>

              <p className="font-semibold text-blue-100">
                CHAPTER 06
              </p>

              <h1 className="text-3xl font-black text-white sm:text-5xl">
                Storage Devices
              </h1>

            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn how computers store digital information using HDDs, SSDs,
            pen drives, memory cards, optical discs and cloud storage.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#learn"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              📚 Start Learning
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
            Storage Devices
          </span>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <section id="learn" className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* MAIN */}
            <article>

              {/* INTRO */}
              <section>

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 06
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What are Storage Devices?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Storage devices are hardware components used to store
                  digital data, programs and information. They allow users
                  to save files and access them later.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-6xl">
                    💾
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Storage = Saving Information
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Photos, videos, documents, applications and operating
                    systems all require storage space to remain available
                    after the computer is turned off.
                  </p>

                </div>

              </section>

              {/* TYPES */}
              <section id="types" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Storage Technologies
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Types of Storage Devices
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {storageTypes.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >

                      <div className="flex items-start justify-between">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                          {item.icon}
                        </div>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                          {item.short}
                        </span>

                      </div>

                      <h3 className="mt-5 text-xl font-black text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-2">

                        {item.points.map((point) => (
                          <div
                            key={point}
                            className="rounded-xl bg-slate-50 p-3 text-xs font-semibold text-slate-600"
                          >
                            ✓ {point}
                          </div>
                        ))}

                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* HDD */}
              <section
                id="hdd"
                className="mt-16 rounded-3xl bg-blue-50 p-8"
              >

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Magnetic Storage
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  HDD — Hard Disk Drive
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  HDD is a traditional storage device that uses magnetic
                  platters and mechanical components to store and retrieve
                  digital information.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  {[
                    "Large storage capacity",
                    "Uses magnetic platters",
                    "Contains moving parts",
                    "Usually cheaper than SSD",
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

              {/* SSD */}
              <section
                id="ssd"
                className="mt-16 rounded-3xl bg-slate-900 p-8 text-white"
              >

                <p className="font-bold uppercase tracking-widest text-cyan-400">
                  Flash Storage
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  SSD — Solid State Drive
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  SSD is a modern storage device that uses flash memory
                  instead of mechanical moving parts. It generally provides
                  faster data access and better responsiveness.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  {[
                    "Very fast data access",
                    "No moving mechanical parts",
                    "Quiet operation",
                    "Good resistance to physical movement",
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

              {/* HDD VS SSD */}
              <section id="hdd-ssd" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Comparison
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  HDD vs SSD
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">

                  <div className="grid grid-cols-3 bg-slate-900 text-sm font-bold text-white">

                    <div className="p-4">
                      Feature
                    </div>

                    <div className="p-4">
                      HDD
                    </div>

                    <div className="p-4">
                      SSD
                    </div>

                  </div>

                  {[
                    ["Technology", "Magnetic", "Flash memory"],
                    ["Speed", "Moderate", "Fast"],
                    ["Moving Parts", "Yes", "No"],
                    ["Noise", "May produce noise", "Silent"],
                    ["Power Usage", "Higher", "Generally lower"],
                    ["Durability", "More sensitive to movement", "More resistant"],
                  ].map((row, index) => (
                    <div
                      key={row[0]}
                      className={`grid grid-cols-3 ${
                        index !== 5
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-4 text-sm font-bold text-slate-700">
                        {row[0]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        {row[1]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        {row[2]}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* PORTABLE STORAGE */}
              <section id="portable" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Portable Storage
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Pen Drives & Memory Cards
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Portable storage devices make it easy to transfer files
                  between compatible devices. Pen drives commonly use USB
                  interfaces, while memory cards are widely used in mobile
                  devices and cameras.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">

                    <div className="text-4xl">
                      🔌
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      Pen Drive
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      A small USB flash storage device used for storing and
                      transferring files.
                    </p>

                    <div className="mt-5 space-y-2">

                      {[
                        "Portable",
                        "USB connection",
                        "Easy file transfer",
                        "Available in different capacities",
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
                      📱
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      Memory Card
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      A small removable flash storage device commonly used
                      in smartphones, cameras and other portable devices.
                    </p>

                    <div className="mt-5 space-y-2">

                      {[
                        "Very small",
                        "Portable",
                        "Flash memory",
                        "Used in mobile devices",
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

              {/* OPTICAL */}
              <section
                id="optical"
                className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Optical Storage
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  CD, DVD & Blu-ray
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Optical discs use laser technology to read and sometimes
                  write digital information. CDs, DVDs and Blu-ray discs are
                  examples of optical storage.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  {[
                    ["💿", "CD", "Compact Disc"],
                    ["📀", "DVD", "Digital Versatile Disc"],
                    ["🔵", "Blu-ray", "High-capacity optical disc"],
                  ].map(([icon, title, description]) => (
                    <div
                      key={title}
                      className="rounded-2xl bg-slate-50 p-6 text-center"
                    >

                      <div className="text-4xl">
                        {icon}
                      </div>

                      <h3 className="mt-3 font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        {description}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* CLOUD */}
              <section
                id="cloud"
                className="mt-16 rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-600 p-8 text-white"
              >

                <p className="font-bold uppercase tracking-widest text-blue-100">
                  Modern Storage
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Cloud Storage
                </h2>

                <p className="mt-5 max-w-3xl leading-8 text-blue-50">
                  Cloud storage allows users to save files on remote servers
                  and access them through the internet from supported
                  devices.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                  {[
                    ["☁️", "Online"],
                    ["📱", "Multiple Devices"],
                    ["🔄", "Synchronization"],
                    ["🛡️", "Backup"],
                  ].map(([icon, title]) => (
                    <div
                      key={title}
                      className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur"
                    >

                      <div className="text-3xl">
                        {icon}
                      </div>

                      <h3 className="mt-3 font-bold">
                        {title}
                      </h3>

                    </div>
                  ))}

                </div>

              </section>

              {/* STORAGE UNITS */}
              <section id="units" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Storage Units
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                  {storageUnits.map(([unit, description], index) => (
                    <div
                      key={unit}
                      className={`grid grid-cols-2 ${
                        index !== storageUnits.length - 1
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

              {/* USES */}
              <section id="uses" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Real World
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  What Can We Store?
                </h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                  {storageUses.map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 p-6"
                    >

                      <div className="text-4xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 text-xl font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* COMPARISON */}
              <section id="comparison" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Quick Comparison
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Storage Device Comparison
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">

                  <div className="hidden grid-cols-5 bg-slate-900 text-sm font-bold text-white md:grid">

                    <div className="p-4">
                      Device
                    </div>

                    <div className="p-4">
                      Technology
                    </div>

                    <div className="p-4">
                      Speed
                    </div>

                    <div className="p-4">
                      Capacity
                    </div>

                    <div className="p-4">
                      Cost
                    </div>

                  </div>

                  {storageComparison.map((row, index) => (
                    <div
                      key={row[0]}
                      className={`grid grid-cols-1 md:grid-cols-5 ${
                        index !== storageComparison.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-4 font-black text-blue-600">
                        {row[0]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Technology:{" "}
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
                          Capacity:{" "}
                        </span>
                        {row[3]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Cost:{" "}
                        </span>
                        {row[4]}
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
                  Ready for Storage Devices MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your understanding of HDD, SSD, pen drives, memory
                  cards, optical discs and cloud storage.
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
                    ["01", "What are Storage Devices?", "#learn"],
                    ["02", "Storage Types", "#types"],
                    ["03", "HDD", "#hdd"],
                    ["04", "SSD", "#ssd"],
                    ["05", "HDD vs SSD", "#hdd-ssd"],
                    ["06", "Portable Storage", "#portable"],
                    ["07", "Optical Storage", "#optical"],
                    ["08", "Cloud Storage", "#cloud"],
                    ["09", "Storage Units", "#units"],
                    ["10", "Uses", "#uses"],
                    ["11", "Comparison", "#comparison"],
                    ["12", "Important Points", "#important-points"],
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

                  <div className="h-full w-2/3 rounded-full bg-blue-600" />

                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Continue learning to complete this chapter.
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
            href="/learn/computer/input-output"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Input & Output
          </Link>

          <Link
            href="/learn/computer/internet-networking"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Internet & Networking →
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