import Link from "next/link";
import {
  QrCode,
  Calculator,
  KeyRound,
  FileJson,
  Globe,
  Palette,
  FileCode,
  Braces,
  Lock,
  Hash,
  Binary,
  Type,
} from "lucide-react";

const tools = [
  {
    title: "QR Generator",
    icon: <QrCode size={42} className="text-blue-600" />,
    href: "/developer-hub/qr-generator",
  },
  {
    title: "Calculator",
    icon: <Calculator size={42} className="text-green-600" />,
    href: "/calculator",
  },
  {
    title: "Password Generator",
    icon: <KeyRound size={42} className="text-red-600" />,
    href: "/developer-hub/password-generator",
  },
  {
    title: "JSON Formatter",
    icon: <FileJson size={42} className="text-yellow-600" />,
    href: "/developer-hub/json-formatter",
  },
  {
    title: "HTML Formatter",
    icon: <Globe size={42} className="text-purple-600" />,
    href: "/developer-hub/html-formatter",
  },
  {
    title: "Color Picker",
    icon: <Palette size={42} className="text-pink-600" />,
    href: "/developer-hub/color-picker",
  },
  {
    title: "CSS Formatter",
    icon: <FileCode size={42} className="text-cyan-600" />,
    href: "/developer-hub/css-formatter",
  },
  {
    title: "JavaScript Formatter",
    icon: <Braces size={42} className="text-orange-600" />,
    href: "/developer-hub/js-formatter",
  },
  {
    title: "Base64 Encoder",
    icon: <Binary size={42} className="text-indigo-600" />,
    href: "/developer-hub/base64",
  },
  {
    title: "Hash Generator",
    icon: <Hash size={42} className="text-teal-600" />,
    href: "/developer-hub/hash-generator",
  },
  {
    title: "Text Tools",
    icon: <Type size={42} className="text-blue-500" />,
    href: "/developer-hub/text-tools",
  },
  {
    title: "Security Tools",
    icon: <Lock size={42} className="text-gray-700" />,
    href: "/developer-hub/security-tools",
  },
  {
  title: "UUID Generator",
  icon: <Hash size={42} className="text-indigo-600" />,
  href: "/developer-hub/uuid-generator",
},
{
  title: "URL Encoder",
  icon: <Globe size={42} className="text-blue-500" />,
  href: "/developer-hub/url-encoder",
},
{
  title: "Word Counter",
  icon: <Type size={42} className="text-green-600" />,
  href: "/developer-hub/word-counter",
},
{
  title: "Markdown Preview",
  icon: <FileCode size={42} className="text-orange-600" />,
  href: "/developer-hub/markdown-preview",
},
{
  title: "Regex Tester",
  icon: <Braces size={42} className="text-red-600" />,
  href: "/developer-hub/regex-tester",
},
{
  title: "Timestamp Converter",
  icon: <Calculator size={42} className="text-purple-600" />,
  href: "/developer-hub/timestamp",
},
{
  title: "JSON Validator",
  icon: <FileJson size={42} className="text-pink-600" />,
  href: "/developer-hub/json-validator",
},
{
  title: "Lorem Ipsum",
  icon: <Type size={42} className="text-cyan-600" />,
  href: "/developer-hub/lorem-ipsum",
},
];

export default function DeveloperHub() {
  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-blue-700">
          Developer Hub
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Professional developer tools in one place.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {tool.icon}

              <h2 className="text-xl font-bold mt-5">
                {tool.title}
              </h2>

              <p className="mt-3 text-gray-600">
                Open Tool →
              </p>

            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}