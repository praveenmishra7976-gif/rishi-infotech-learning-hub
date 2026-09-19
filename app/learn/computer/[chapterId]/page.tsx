"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Monitor,
  Sparkles,
  Trophy,
} from "lucide-react";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type Chapter = {
  title: string;
  description: string;
  icon: string;
  concepts: string[];
  keyPoints: string[];
  facts: string[];
  questions: Question[];
};

const chapters: Record<string, Chapter> = {
  "computer-fundamentals": {
    title: "Computer Fundamentals",
    description:
      "Learn the basic concepts, characteristics, applications and generations of computers.",
    icon: "💻",
    concepts: [
      "A computer is an electronic device that accepts data, processes it and produces useful information.",
      "The basic working cycle of a computer is Input → Processing → Output → Storage.",
      "Computers can perform calculations and process large amounts of information quickly.",
      "Computers are used in education, business, banking, medicine, communication and entertainment.",
    ],
    keyPoints: [
      "Data is raw facts and figures.",
      "Information is processed and meaningful data.",
      "CPU is responsible for processing instructions.",
      "Input devices are used to enter data.",
      "Output devices present processed information.",
      "Storage devices save data for future use.",
    ],
    facts: [
      "Computer works according to instructions given by a program.",
      "Computers are highly accurate when instructions and data are correct.",
      "Modern computers can perform millions or billions of operations per second.",
    ],
    questions: [
      {
        question: "What is a computer?",
        options: [
          "An electronic data processing device",
          "Only a calculating machine",
          "A communication cable",
          "A type of printer",
        ],
        answer: "An electronic data processing device",
      },
      {
        question: "Which unit processes data?",
        options: ["Monitor", "CPU", "Keyboard", "Printer"],
        answer: "CPU",
      },
    ],
  },

  "computer-hardware": {
    title: "Computer Hardware",
    description:
      "Understand the physical components of a computer system.",
    icon: "🖥️",
    concepts: [
      "Hardware refers to the physical parts of a computer that can be seen and touched.",
      "The motherboard connects many major components of a computer.",
      "The CPU processes instructions and controls computer operations.",
      "Keyboard, mouse, monitor and printer are common hardware devices.",
    ],
    keyPoints: [
      "CPU is the central processing unit.",
      "Motherboard connects major components.",
      "Monitor displays output.",
      "Keyboard is an input device.",
      "Printer produces physical output.",
      "Ports are used to connect external devices.",
    ],
    facts: [
      "Hardware needs software instructions to perform useful tasks.",
      "CPU contains important processing components such as ALU and Control Unit.",
    ],
    questions: [
      {
        question: "Which component is called the brain of the computer?",
        options: ["Monitor", "CPU", "Keyboard", "Mouse"],
        answer: "CPU",
      },
      {
        question: "Which is a hardware device?",
        options: ["Windows", "Keyboard", "MS Word", "Android"],
        answer: "Keyboard",
      },
    ],
  },

  "computer-software": {
    title: "Computer Software",
    description:
      "Learn system software, application software and utility programs.",
    icon: "⚙️",
    concepts: [
      "Software is a collection of programs and instructions used to operate a computer.",
      "System software manages computer hardware and provides a platform for applications.",
      "Application software helps users perform specific tasks.",
      "Utility software helps maintain, protect and manage computer systems.",
    ],
    keyPoints: [
      "Windows and Linux are operating systems.",
      "MS Word is application software.",
      "Antivirus software helps protect computers.",
      "Software cannot be physically touched.",
    ],
    facts: [
      "Software provides instructions to hardware.",
      "A computer system normally requires both hardware and software.",
    ],
    questions: [
      {
        question: "Which is an example of system software?",
        options: ["Windows", "Keyboard", "Monitor", "Mouse"],
        answer: "Windows",
      },
      {
        question: "Which is application software?",
        options: ["MS Word", "CPU", "RAM", "Motherboard"],
        answer: "MS Word",
      },
    ],
  },

  "input-output": {
    title: "Input & Output Devices",
    description:
      "Learn the common devices used to enter data and display results.",
    icon: "⌨️",
    concepts: [
      "Input devices allow users to enter data and instructions into a computer.",
      "Output devices present processed information to the user.",
      "Keyboard and mouse are common input devices.",
      "Monitor and printer are common output devices.",
    ],
    keyPoints: [
      "Keyboard → Input",
      "Mouse → Input",
      "Scanner → Input",
      "Monitor → Output",
      "Printer → Output",
      "Speaker → Output",
    ],
    facts: [
      "Touchscreens can provide both input and output functionality.",
      "A scanner converts physical documents into digital data.",
    ],
    questions: [
      {
        question: "Which is an input device?",
        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
        answer: "Keyboard",
      },
      {
        question: "Which is an output device?",
        options: ["Mouse", "Keyboard", "Scanner", "Monitor"],
        answer: "Monitor",
      },
    ],
  },

  "cpu-memory": {
    title: "CPU & Memory",
    description:
      "Learn CPU components, RAM, ROM, registers and cache memory.",
    icon: "🧠",
    concepts: [
      "CPU is responsible for executing instructions and processing data.",
      "The ALU performs arithmetic and logical operations.",
      "The Control Unit coordinates computer operations.",
      "RAM stores data temporarily while programs are running.",
      "ROM stores instructions that are retained when power is removed.",
    ],
    keyPoints: [
      "CPU = Central Processing Unit",
      "ALU = Arithmetic Logic Unit",
      "RAM = Random Access Memory",
      "ROM = Read Only Memory",
      "Cache is high-speed memory close to the processor.",
      "Registers are very fast storage locations inside the CPU.",
    ],
    facts: [
      "RAM is generally volatile memory.",
      "ROM is generally non-volatile memory.",
      "More RAM can allow more programs to run simultaneously.",
    ],
    questions: [
      {
        question: "Which memory is temporary?",
        options: ["ROM", "RAM", "DVD", "Hard disk"],
        answer: "RAM",
      },
      {
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Program Utility",
          "Computer Processing Utility",
        ],
        answer: "Central Processing Unit",
      },
    ],
  },

  "storage": {
    title: "Computer Storage",
    description:
      "Learn hard disks, SSDs, optical disks, pen drives and storage units.",
    icon: "💾",
    concepts: [
      "Storage devices are used to save data and programs for future use.",
      "Hard disk drives use magnetic storage.",
      "SSDs use flash memory and have no moving mechanical disks.",
      "Pen drives use flash memory and connect through USB ports.",
      "Optical discs such as CDs and DVDs use laser technology to read and write data.",
      "External storage devices can be used for backup, portability and data transfer.",
    ],
    keyPoints: [
      "Bit is a basic unit of digital information.",
      "8 bits = 1 byte.",
      "KB, MB, GB and TB are common storage units.",
      "HDD uses magnetic storage.",
      "SSD uses flash storage.",
      "Pen drives commonly use USB connections.",
      "SSD generally provides faster access than a traditional HDD.",
    ],
    facts: [
      "SSD has no spinning magnetic disks or moving read/write heads.",
      "HDDs are commonly available in large capacities at relatively low cost.",
      "External drives can be used for backup and data transfer.",
      "Cloud storage is another way to store data remotely.",
    ],
    questions: [
      {
        question: "Which storage device uses flash memory?",
        options: ["SSD", "Keyboard", "Monitor", "Printer"],
        answer: "SSD",
      },
      {
        question: "How many bits make one byte?",
        options: ["4", "8", "16", "32"],
        answer: "8",
      },
      {
        question: "Which storage device uses magnetic storage?",
        options: ["HDD", "SSD", "Pen drive", "CD"],
        answer: "HDD",
      },
      {
        question: "Which device is commonly used for portable USB storage?",
        options: ["Pen drive", "Monitor", "Speaker", "Keyboard"],
        answer: "Pen drive",
      },
    ],
  },

  "operating-system": {
    title: "Operating System",
    description:
      "Understand operating systems and their important functions.",
    icon: "🪟",
    concepts: [
      "An operating system is system software that manages computer hardware and software resources.",
      "It provides an interface between users and computer hardware.",
      "It manages files, memory, processes and connected devices.",
      "Examples include Windows, Linux, Android and macOS.",
    ],
    keyPoints: [
      "Windows is widely used on personal computers.",
      "Linux is an open-source operating system family.",
      "Android is widely used on mobile devices.",
      "Operating systems manage files and memory.",
    ],
    facts: [
      "Without an operating system, using a general-purpose computer would be difficult.",
      "Operating systems can provide graphical user interfaces.",
    ],
    questions: [
      {
        question: "Which is an operating system?",
        options: ["Windows", "Keyboard", "CPU", "Printer"],
        answer: "Windows",
      },
      {
        question: "What does an operating system manage?",
        options: [
          "Only the keyboard",
          "Hardware and software resources",
          "Only the monitor",
          "Only internet cables",
        ],
        answer: "Hardware and software resources",
      },
    ],
  },

  "internet-networking": {
    title: "Internet & Networking",
    description:
      "Learn computer networks, internet, LAN, WAN, IP addresses and networking devices.",
    icon: "🌐",
    concepts: [
      "A computer network connects devices so they can communicate and share resources.",
      "The Internet is a worldwide network of interconnected networks.",
      "LAN is generally used within a limited geographical area.",
      "WAN covers larger geographical areas.",
      "Routers help forward data between networks.",
    ],
    keyPoints: [
      "LAN = Local Area Network",
      "WAN = Wide Area Network",
      "IP address identifies a device or network interface.",
      "Router connects and forwards traffic between networks.",
      "Wi-Fi provides wireless network connectivity.",
    ],
    facts: [
      "The Internet supports services such as websites, email and online communication.",
      "Networking allows resource and information sharing.",
    ],
    questions: [
      {
        question: "What does LAN stand for?",
        options: [
          "Local Area Network",
          "Large Area Network",
          "Local Access Node",
          "Linked Area Network",
        ],
        answer: "Local Area Network",
      },
      {
        question: "Which device forwards traffic between networks?",
        options: ["Router", "Keyboard", "Monitor", "Scanner"],
        answer: "Router",
      },
    ],
  },

  "cyber-security": {
    title: "Cyber Security",
    description:
      "Learn safe computing, passwords, malware, phishing and online privacy.",
    icon: "🔐",
    concepts: [
      "Cyber security protects computers, networks, systems and data from unauthorized access and attacks.",
      "Strong passwords help protect user accounts.",
      "Phishing attempts to trick users into revealing sensitive information.",
      "Malware is malicious software designed to harm, disrupt or gain unauthorized access.",
    ],
    keyPoints: [
      "Use strong and unique passwords.",
      "Enable multi-factor authentication where available.",
      "Do not open suspicious links or attachments.",
      "Keep software updated.",
      "Use trusted security software.",
      "Avoid sharing passwords and sensitive information.",
    ],
    facts: [
      "Phishing commonly uses fake messages or websites.",
      "Regular backups can help reduce the impact of data loss.",
    ],
    questions: [
      {
        question: "What is phishing?",
        options: [
          "A type of printer",
          "A fraudulent attempt to obtain sensitive information",
          "A computer processor",
          "A storage device",
        ],
        answer: "A fraudulent attempt to obtain sensitive information",
      },
      {
        question: "Which is a good security practice?",
        options: [
          "Sharing passwords",
          "Opening every email attachment",
          "Using strong unique passwords",
          "Disabling all updates",
        ],
        answer: "Using strong unique passwords",
      },
    ],
  },

  "ms-office": {
    title: "MS Office",
    description:
      "Learn the basic uses of Word, Excel and PowerPoint.",
    icon: "📊",
    concepts: [
      "Microsoft Office is a collection of productivity applications.",
      "Word is commonly used for documents.",
      "Excel is used for spreadsheets, calculations and data analysis.",
      "PowerPoint is used for creating presentations.",
    ],
    keyPoints: [
      "Word → Documents",
      "Excel → Spreadsheets",
      "PowerPoint → Presentations",
      "Excel formulas can perform calculations.",
      "PowerPoint uses slides.",
    ],
    facts: [
      "Office applications are widely used in education and workplaces.",
      "Spreadsheets can organize data in rows and columns.",
    ],
    questions: [
      {
        question: "Which application is mainly used for spreadsheets?",
        options: ["Word", "Excel", "PowerPoint", "Paint"],
        answer: "Excel",
      },
      {
        question: "Which application is used to create presentations?",
        options: ["Excel", "Word", "PowerPoint", "Notepad"],
        answer: "PowerPoint",
      },
    ],
  },

  "programming-basics": {
    title: "Programming Basics",
    description:
      "Learn algorithms, programming languages, variables, conditions and loops.",
    icon: "👨‍💻",
    concepts: [
      "Programming is the process of writing instructions that computers can execute.",
      "A programming language provides rules for writing computer programs.",
      "Variables are used to store values.",
      "Conditions allow programs to make decisions.",
      "Loops allow repeated execution of instructions.",
    ],
    keyPoints: [
      "Algorithm → Step-by-step solution.",
      "Variable → Stores a value.",
      "Condition → Makes a decision.",
      "Loop → Repeats instructions.",
      "Function → Reusable block of code.",
    ],
    facts: [
      "JavaScript, Python, Java and C++ are examples of programming languages.",
      "Good programs are usually designed, tested and debugged.",
    ],
    questions: [
      {
        question: "What is an algorithm?",
        options: [
          "A step-by-step procedure",
          "A monitor",
          "A storage device",
          "A network cable",
        ],
        answer: "A step-by-step procedure",
      },
      {
        question: "What is used to repeat instructions?",
        options: ["Loop", "Monitor", "Printer", "Router"],
        answer: "Loop",
      },
    ],
  },

  "number-system": {
    title: "Number System",
    description:
      "Learn binary, decimal, octal and hexadecimal number systems.",
    icon: "🔢",
    concepts: [
      "A number system is a method of representing numbers using specific symbols and a base.",
      "Decimal uses base 10.",
      "Binary uses base 2 and is fundamental to digital computers.",
      "Octal uses base 8 and hexadecimal uses base 16.",
    ],
    keyPoints: [
      "Binary digits are 0 and 1.",
      "Decimal base = 10.",
      "Binary base = 2.",
      "Octal base = 8.",
      "Hexadecimal base = 16.",
    ],
    facts: [
      "Computer hardware works with binary digital states.",
      "Hexadecimal provides a compact representation of binary values.",
    ],
    questions: [
      {
        question: "Which number system uses only 0 and 1?",
        options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
        answer: "Binary",
      },
      {
        question: "What is the base of hexadecimal?",
        options: ["2", "8", "10", "16"],
        answer: "16",
      },
    ],
  },

  "digital-technology": {
    title: "Digital Technology",
    description:
      "Explore digital devices, communication technology and modern computing.",
    icon: "📱",
    concepts: [
      "Digital technology represents information using digital signals.",
      "Smartphones, computers and many modern devices use digital technology.",
      "Digital communication allows information to be transmitted electronically.",
      "Cloud services and mobile applications are examples of modern digital technology.",
    ],
    keyPoints: [
      "Digital devices process digital information.",
      "Smartphones combine computing and communication features.",
      "Digital technology supports online education and banking.",
      "Cloud services provide remote computing resources.",
    ],
    facts: [
      "Digital technology is used in education, healthcare, banking and communication.",
      "Modern digital systems can process text, images, audio and video.",
    ],
    questions: [
      {
        question: "Which is a digital device?",
        options: ["Smartphone", "Stone", "Paper", "Chair"],
        answer: "Smartphone",
      },
      {
        question: "Which technology provides remote computing resources?",
        options: ["Cloud computing", "Keyboard", "Printer", "Scanner"],
        answer: "Cloud computing",
      },
    ],
  },

  "artificial-intelligence": {
    title: "Artificial Intelligence",
    description:
      "Learn the basics of artificial intelligence, machine learning and generative AI.",
    icon: "🤖",
    concepts: [
      "Artificial Intelligence is a field of computing focused on systems that perform tasks requiring capabilities associated with human intelligence.",
      "Machine learning allows systems to learn patterns from data.",
      "Generative AI can create content such as text, images, audio and code.",
      "AI is used in search, recommendations, automation and many other applications.",
    ],
    keyPoints: [
      "AI → Artificial Intelligence",
      "ML → Machine Learning",
      "Generative AI → Creates new content",
      "Training data is important for machine learning.",
      "AI systems should be used responsibly.",
    ],
    facts: [
      "AI is used across many industries.",
      "Machine learning is one area within the broader field of AI.",
    ],
    questions: [
      {
        question: "What does AI stand for?",
        options: [
          "Artificial Intelligence",
          "Automatic Internet",
          "Advanced Input",
          "Applied Information",
        ],
        answer: "Artificial Intelligence",
      },
      {
        question: "What is one capability of generative AI?",
        options: [
          "Creating content",
          "Only printing documents",
          "Only storing files",
          "Only connecting cables",
        ],
        answer: "Creating content",
      },
    ],
  },

  "cloud-computing": {
    title: "Cloud Computing",
    description:
      "Understand cloud services, remote servers, storage and applications.",
    icon: "☁️",
    concepts: [
      "Cloud computing provides computing resources and services over a network, commonly the Internet.",
      "Cloud storage allows users to store data on remote servers.",
      "Cloud services can provide computing power, storage and applications.",
      "Users can often access cloud services from multiple devices.",
    ],
    keyPoints: [
      "Cloud storage → Remote data storage.",
      "Cloud computing → Remote computing resources.",
      "Internet connectivity is commonly used to access cloud services.",
      "Cloud services can scale according to demand.",
    ],
    facts: [
      "Cloud computing is widely used by individuals and organizations.",
      "Cloud backups can provide an additional way to protect data.",
    ],
    questions: [
      {
        question: "What is cloud computing?",
        options: [
          "Computing services delivered over a network",
          "A type of keyboard",
          "A monitor technology",
          "A printer type",
        ],
        answer: "Computing services delivered over a network",
      },
      {
        question: "What is cloud storage used for?",
        options: [
          "Storing data remotely",
          "Printing documents",
          "Typing only",
          "Scanning only",
        ],
        answer: "Storing data remotely",
      },
    ],
  },
};

export default function ComputerChapterPage() {
  const params = useParams();
  const chapterId = params.chapterId as string;
  const chapter = chapters[chapterId];

  if (!chapter) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center">
          <div className="text-6xl">💻</div>

          <h1 className="mt-5 text-3xl font-black text-gray-900">
            Chapter Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            The computer chapter you are looking for does not exist.
          </p>

          <Link
            href="/learn/computer"
            className="mt-7 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            <ArrowLeft size={18} />
            Back to Computer
          </Link>
        </div>
      </main>
    );
  }

  const chapterIds = Object.keys(chapters);
  const currentIndex = chapterIds.indexOf(chapterId);

  const previousChapterId =
    currentIndex > 0 ? chapterIds[currentIndex - 1] : null;

  const nextChapterId =
    currentIndex >= 0 && currentIndex < chapterIds.length - 1
      ? chapterIds[currentIndex + 1]
      : null;

  const previousChapter = previousChapterId
    ? chapters[previousChapterId]
    : null;

  const nextChapter = nextChapterId ? chapters[nextChapterId] : null;

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-cyan-700 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

          <Link
            href="/learn/computer"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Computer
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="text-5xl">
              {chapter.icon}
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
              {chapter.title}
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              {chapter.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold">
                📚 Learning
              </span>

              <span className="rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold">
                🧠 Concepts
              </span>

              <span className="rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold">
                📝 Practice
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* MAIN */}
          <div className="lg:col-span-2 space-y-8">

            {/* CONCEPTS */}
            <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-9">

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <BookOpen
                    className="text-blue-600"
                    size={25}
                  />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                    Concepts
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Understand the basic ideas of this chapter.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {chapter.concepts.map((concept, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl bg-gray-50 border border-gray-100 p-4"
                  >
                    <CheckCircle2
                      className="text-green-500 mt-1 shrink-0"
                      size={20}
                    />

                    <p className="text-gray-700 leading-relaxed">
                      {concept}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* IMPORTANT POINTS */}
            <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-9">

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <Monitor
                    className="text-cyan-600"
                    size={25}
                  />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                    Important Points
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Remember these key points for revision.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                {chapter.keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-gray-50 border border-gray-100 p-5 hover:border-blue-200 hover:bg-blue-50/40 transition"
                  >
                    <div className="text-sm font-black text-blue-600">
                      Point {index + 1}
                    </div>

                    <p className="mt-2 text-gray-700 font-semibold leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* QUICK FACTS */}
            <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-9">

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                  <Lightbulb
                    className="text-yellow-500"
                    size={25}
                  />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                    Quick Facts
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Useful facts to remember.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {chapter.facts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-yellow-100 bg-yellow-50/50 p-5"
                  >
                    <span className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center font-black shrink-0">
                      💡
                    </span>

                    <p className="text-gray-700 leading-relaxed font-medium">
                      {fact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* PRACTICE QUESTIONS */}
            <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-9">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                  <Trophy
                    className="text-yellow-500"
                    size={25}
                  />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                    Practice Questions
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Test your understanding of this chapter.
                  </p>
                </div>

              </div>

              <div className="mt-8 space-y-7">

                {chapter.questions.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
                  >

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0">
                        {index + 1}
                      </div>

                      <p className="font-black text-gray-900 leading-relaxed pt-1">
                        {item.question}
                      </p>
                    </div>

                    <div className="mt-5 grid sm:grid-cols-2 gap-3">

                      {item.options.map((option, optionIndex) => (
                        <div
                          key={option}
                          className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 font-medium"
                        >
                          <span className="font-black text-blue-600 mr-2">
                            {String.fromCharCode(65 + optionIndex)}.
                          </span>

                          {option}
                        </div>
                      ))}

                    </div>

                    <div className="mt-5 rounded-xl bg-green-50 border border-green-100 px-4 py-3">
                      <span className="font-black text-green-700">
                        Correct Answer:
                      </span>{" "}

                      <span className="text-green-800 font-semibold">
                        {item.answer}
                      </span>
                    </div>

                  </div>
                ))}

              </div>
            </section>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">

            {/* CHAPTER INFO */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">

              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">
                {chapter.icon}
              </div>

              <h2 className="mt-5 text-2xl font-black text-gray-900">
                Quick Study
              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Read the concepts first, revise the important points,
                remember the facts and then attempt the practice questions.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Read concepts",
                  "Revise important points",
                  "Remember quick facts",
                  "Practice MCQs",
                  "Repeat difficult topics",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-black">
                      {index + 1}
                    </div>

                    <span className="text-gray-700 font-semibold">
                      {item}
                    </span>

                  </div>
                ))}

              </div>
            </div>

            {/* STUDY TIP */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-3xl p-7">

              <Lightbulb size={30} />

              <h2 className="mt-4 text-2xl font-black">
                Study Tip
              </h2>

              <p className="mt-3 text-white/90 leading-relaxed">
                Do not only memorize computer terms. Try to understand
                how each component or technology is used in real life.
              </p>

            </div>

            {/* PROGRESS STYLE CARD */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">

              <h2 className="text-xl font-black text-gray-900">
                Chapter Overview
              </h2>

              <div className="mt-5 space-y-4">

                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-semibold">
                      Concepts
                    </span>

                    <span className="font-black text-blue-600">
                      {chapter.concepts.length}
                    </span>
                  </div>

                  <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-blue-500 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-semibold">
                      Important Points
                    </span>

                    <span className="font-black text-cyan-600">
                      {chapter.keyPoints.length}
                    </span>
                  </div>

                  <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-cyan-500 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-semibold">
                      Questions
                    </span>

                    <span className="font-black text-yellow-600">
                      {chapter.questions.length}
                    </span>
                  </div>

                  <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-yellow-500 rounded-full" />
                  </div>
                </div>

              </div>
            </div>

          </aside>

        </div>

      </section>

      {/* CHAPTER NAVIGATION */}
      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-8">

          <div className="flex items-center gap-3 mb-7">

            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <ArrowRight size={23} />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Continue Learning
              </h2>

              <p className="text-gray-500 mt-1">
                Continue to another Computer chapter.
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-4">

            {/* PREVIOUS */}
            {previousChapter && previousChapterId ? (
              <Link
                href={`/learn/computer/${previousChapterId}`}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 hover:border-blue-300 hover:bg-blue-50 transition"
              >

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm">
                    {previousChapter.icon}
                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-black text-gray-400 uppercase">
                      Previous Chapter
                    </p>

                    <h3 className="mt-1 font-black text-gray-900 group-hover:text-blue-600">
                      {previousChapter.title}
                    </h3>

                  </div>

                  <ArrowLeft
                    size={20}
                    className="ml-auto text-gray-400 group-hover:text-blue-600 shrink-0"
                  />

                </div>

              </Link>
            ) : (
              <Link
                href="/learn/computer"
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 hover:border-blue-300 hover:bg-blue-50 transition"
              >

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
                    <BookOpen
                      size={22}
                      className="text-blue-600"
                    />
                  </div>

                  <div>

                    <p className="text-xs font-black text-gray-400 uppercase">
                      Back
                    </p>

                    <h3 className="mt-1 font-black text-gray-900 group-hover:text-blue-600">
                      All Computer Chapters
                    </h3>

                  </div>

                  <ArrowLeft
                    size={20}
                    className="ml-auto text-gray-400 group-hover:text-blue-600 shrink-0"
                  />

                </div>

              </Link>
            )}

            {/* NEXT */}
            {nextChapter && nextChapterId ? (
              <Link
                href={`/learn/computer/${nextChapterId}`}
                className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-5 hover:border-blue-300 hover:bg-blue-50 transition"
              >

                <div className="flex items-center gap-4">

                  <div className="min-w-0">

                    <p className="text-xs font-black text-blue-500 uppercase">
                      Next Chapter
                    </p>

                    <h3 className="mt-1 font-black text-gray-900 group-hover:text-blue-600">
                      {nextChapter.title}
                    </h3>

                  </div>

                  <div className="ml-auto w-11 h-11 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm">
                    {nextChapter.icon}
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-blue-500 group-hover:translate-x-1 transition shrink-0"
                  />

                </div>

              </Link>
            ) : (
              <Link
                href="/learn/computer"
                className="group rounded-2xl border border-green-100 bg-green-50/50 p-5 hover:border-green-300 hover:bg-green-50 transition"
              >

                <div className="flex items-center gap-4">

                  <div>
                    <p className="text-xs font-black text-green-600 uppercase">
                      Completed
                    </p>

                    <h3 className="mt-1 font-black text-gray-900 group-hover:text-green-600">
                      All Computer Chapters
                    </h3>
                  </div>

                  <CheckCircle2
                    size={28}
                    className="ml-auto text-green-600"
                  />

                </div>

              </Link>
            )}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="rounded-3xl bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 p-8 md:p-12 text-white text-center">

          <div className="mx-auto w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
            <Sparkles size={28} />
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-black">
            Keep Learning Computer 🚀
          </h2>

          <p className="mt-3 text-white/85 max-w-2xl mx-auto leading-relaxed">
            Understand the concept, revise the important points,
            practice MCQs and continue to the next chapter.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">

            <Link
              href="/learn/computer"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-black hover:bg-gray-100 transition"
            >
              <BookOpen size={19} />
              All Computer Chapters
            </Link>

            {nextChapterId && (
              <Link
                href={`/learn/computer/${nextChapterId}`}
                className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-6 py-3 rounded-xl font-black hover:bg-white/25 transition"
              >
                Next Chapter
                <ArrowRight size={19} />
              </Link>
            )}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <Sparkles
            className="mx-auto text-cyan-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Rishi Infotech Learning Hub
          </h2>

          <p className="mt-3 text-gray-400">
            Learn • Practice • Build • Grow
          </p>

        </div>

      </section>

    </main>
  );
}
