import Link from "next/link";

const inputDevices = [
  {
    icon: "⌨️",
    title: "Keyboard",
    description:
      "A keyboard is an input device used to enter letters, numbers, symbols and commands into a computer.",
    examples: "Typing, shortcuts, commands",
  },
  {
    icon: "🖱️",
    title: "Mouse",
    description:
      "A mouse is a pointing device used to move the pointer, select items, click buttons and interact with graphical interfaces.",
    examples: "Clicking, selecting, dragging",
  },
  {
    icon: "📷",
    title: "Scanner",
    description:
      "A scanner captures text, photographs or documents and converts them into digital form.",
    examples: "Documents, photos, images",
  },
  {
    icon: "🎙️",
    title: "Microphone",
    description:
      "A microphone captures sound and converts it into signals that a computer can process.",
    examples: "Voice recording, calls, speech",
  },
  {
    icon: "📹",
    title: "Webcam",
    description:
      "A webcam captures video and sends it to a computer for communication, recording or streaming.",
    examples: "Video calls, meetings, streaming",
  },
  {
    icon: "🎮",
    title: "Joystick",
    description:
      "A joystick is an input device commonly used to control movement in games and simulations.",
    examples: "Gaming, simulation, control",
  },
];

const outputDevices = [
  {
    icon: "🖥️",
    title: "Monitor",
    description:
      "A monitor is an output device that displays text, images, videos and other visual information.",
    examples: "Text, graphics, video",
  },
  {
    icon: "🖨️",
    title: "Printer",
    description:
      "A printer produces a physical copy of digital documents, images or other information.",
    examples: "Documents, photographs",
  },
  {
    icon: "🔊",
    title: "Speaker",
    description:
      "Speakers convert audio signals into sound that can be heard by the user.",
    examples: "Music, alerts, audio",
  },
  {
    icon: "🎧",
    title: "Headphones",
    description:
      "Headphones allow a user to listen to computer-generated audio privately.",
    examples: "Music, calls, videos",
  },
  {
    icon: "📽️",
    title: "Projector",
    description:
      "A projector displays computer content onto a larger surface such as a screen or wall.",
    examples: "Presentations, classrooms",
  },
  {
    icon: "🖥️",
    title: "Plotter",
    description:
      "A plotter is used to produce high-quality large drawings, designs and technical graphics.",
    examples: "CAD drawings, maps, designs",
  },
];

const inputOutputComparison = [
  ["Input Device", "Sends data to the computer", "Keyboard, Mouse, Scanner"],
  ["Output Device", "Receives information from the computer", "Monitor, Printer, Speaker"],
];

const importantPoints = [
  "Input devices are used to enter data and instructions into a computer.",
  "Output devices present processed information to the user.",
  "Keyboard is one of the most common input devices.",
  "Mouse is a pointing input device.",
  "Scanner converts physical documents into digital form.",
  "Microphone is used to input sound.",
  "Monitor displays visual output.",
  "Printer produces a hard copy of digital information.",
  "Speakers produce audio output.",
  "A touchscreen can work as both an input and output device.",
];

export default function InputOutputPage() {
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
              ⌨️
            </div>

            <div>

              <p className="font-semibold text-blue-100">
                CHAPTER 05
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Input & Output Devices
              </h2>

            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn how computers receive data through input devices and
            present processed information using output devices.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#input"
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
            Input & Output Devices
          </span>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <section id="input" className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* MAIN ARTICLE */}
            <article>

              {/* INTRODUCTION */}
              <section>

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 05
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What are Input & Output Devices?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Input and output devices are hardware components that
                  allow users to communicate with a computer. Input devices
                  send data and instructions to the computer, while output
                  devices present the processed results to the user.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div className="rounded-3xl bg-blue-50 p-7">

                    <div className="text-5xl">
                      📥
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      Input
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      Input is the data or instruction entered into a
                      computer for processing.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-7">

                    <div className="text-5xl">
                      📤
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      Output
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      Output is the processed information produced by a
                      computer for the user.
                    </p>

                  </div>

                </div>

              </section>

              {/* INPUT DEVICES */}
              <section id="input-devices" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Data Entry
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Input Devices
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Input devices are hardware devices used to enter data,
                  instructions and commands into a computer.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {inputDevices.map((device) => (
                    <div
                      key={device.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                        {device.icon}
                      </div>

                      <h3 className="mt-5 text-xl font-black text-slate-900">
                        {device.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {device.description}
                      </p>

                      <div className="mt-5 rounded-xl bg-slate-50 p-3 text-xs font-bold text-slate-600">
                        Examples: {device.examples}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* KEYBOARD */}
              <section
                id="keyboard"
                className="mt-16 rounded-3xl bg-slate-900 p-8 text-white"
              >

                <p className="font-bold uppercase tracking-widest text-cyan-400">
                  Input Device
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Keyboard
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  A keyboard contains keys used to enter characters,
                  numbers, symbols and commands. It is one of the most
                  commonly used input devices.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  {[
                    "Alphanumeric keys",
                    "Function keys",
                    "Control keys",
                    "Navigation keys",
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

              {/* MOUSE */}
              <section id="mouse" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Pointing Device
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Mouse
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A mouse is a pointing device used to control the pointer
                  on the screen. It allows users to click, select, drag and
                  interact with graphical interfaces.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  {[
                    ["🖱️", "Click", "Select an item or button."],
                    ["↔️", "Drag", "Move an item from one location to another."],
                    ["🔍", "Scroll", "Move through a document or webpage."],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl bg-blue-50 p-6 text-center"
                    >

                      <div className="text-3xl">
                        {icon}
                      </div>

                      <h3 className="mt-3 font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* OUTPUT DEVICES */}
              <section id="output-devices" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Presenting Results
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Output Devices
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Output devices receive processed information from the
                  computer and present it in a form that users can see,
                  hear or otherwise use.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {outputDevices.map((device) => (
                    <div
                      key={device.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-3xl">
                        {device.icon}
                      </div>

                      <h3 className="mt-5 text-xl font-black text-slate-900">
                        {device.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {device.description}
                      </p>

                      <div className="mt-5 rounded-xl bg-slate-50 p-3 text-xs font-bold text-slate-600">
                        Examples: {device.examples}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* MONITOR */}
              <section
                id="monitor"
                className="mt-16 rounded-3xl bg-cyan-50 p-8"
              >

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Output Device
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Monitor
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A monitor is a visual output device that displays
                  information generated by the computer. It can display
                  text, images, graphics, videos and user interfaces.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  {[
                    ["📝", "Text", "Displays characters and documents."],
                    ["🖼️", "Graphics", "Displays images and visual content."],
                    ["🎬", "Video", "Displays moving visual content."],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl bg-white p-5 text-center"
                    >

                      <div className="text-3xl">
                        {icon}
                      </div>

                      <h3 className="mt-3 font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-600">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* PRINTER */}
              <section id="printer" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Hard Copy Output
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Printer
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A printer creates a physical copy, called a hard copy,
                  from digital information stored or displayed on a
                  computer.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  {[
                    ["🖨️", "Inkjet", "Uses liquid ink to print documents and images."],
                    ["⚫", "Laser", "Uses toner and laser technology for fast printing."],
                    ["🧾", "Dot Matrix", "Uses pins and an ink ribbon to create printed output."],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-slate-200 p-6"
                    >

                      <div className="text-3xl">
                        {icon}
                      </div>

                      <h3 className="mt-3 font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* TOUCHSCREEN */}
              <section
                id="touchscreen"
                className="mt-16 rounded-3xl bg-blue-50 p-8"
              >

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Special Device
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Touchscreen
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A touchscreen is a special device that can perform both
                  input and output functions. It displays information while
                  also allowing the user to interact directly by touching
                  the screen.
                </p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">

                  <div className="rounded-2xl bg-white p-6">
                    <div className="text-4xl">
                      📤
                    </div>

                    <h3 className="mt-3 font-black text-slate-900">
                      Output Function
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Displays text, images, buttons, videos and other
                      visual information.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6">
                    <div className="text-4xl">
                      👆
                    </div>

                    <h3 className="mt-3 font-black text-slate-900">
                      Input Function
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Detects touches and gestures from the user.
                    </p>
                  </div>

                </div>

              </section>

              {/* COMPARISON */}
              <section id="comparison" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Input vs Output Devices
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">

                  <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white md:grid">

                    <div className="p-4">
                      Type
                    </div>

                    <div className="p-4">
                      Function
                    </div>

                    <div className="p-4">
                      Examples
                    </div>

                  </div>

                  {inputOutputComparison.map((row, index) => (
                    <div
                      key={row[0]}
                      className={`grid grid-cols-1 md:grid-cols-3 ${
                        index !== inputOutputComparison.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-5 font-black text-blue-600">
                        {row[0]}
                      </div>

                      <div className="p-5 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Function:{" "}
                        </span>
                        {row[1]}
                      </div>

                      <div className="p-5 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Examples:{" "}
                        </span>
                        {row[2]}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* DATA FLOW */}
              <section id="data-flow" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Computer Process
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Input → Processing → Output
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A computer generally follows a basic information
                  processing cycle. Data is entered through input devices,
                  processed by the computer and then presented through
                  output devices.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  {[
                    ["📥", "Input", "Data is entered into the computer."],
                    ["⚙️", "Processing", "The CPU processes the data."],
                    ["📤", "Output", "The result is presented to the user."],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                    >

                      <div className="text-4xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 text-xl font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {text}
                      </p>

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
                  Ready for Input & Output MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your knowledge of keyboards, mouse, scanners,
                  monitors, printers, speakers and other computer devices.
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
                    ["01", "Introduction", "#input"],
                    ["02", "Input Devices", "#input-devices"],
                    ["03", "Keyboard", "#keyboard"],
                    ["04", "Mouse", "#mouse"],
                    ["05", "Output Devices", "#output-devices"],
                    ["06", "Monitor", "#monitor"],
                    ["07", "Printer", "#printer"],
                    ["08", "Touchscreen", "#touchscreen"],
                    ["09", "Input vs Output", "#comparison"],
                    ["10", "Data Flow", "#data-flow"],
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
            href="/learn/computer/cpu-memory"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: CPU & Memory
          </Link>

          <Link
            href="/learn/computer/storage"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Storage Devices →
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