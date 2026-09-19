import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                RI
              </div>

              <div>
                <h2 className="font-bold text-blue-700">
                  Rishi Infotech
                </h2>
                <p className="text-xs text-gray-500">
                  Learning Hub
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
              Learn, practice, create and explore everything in one
              professional learning platform.
            </p>
          </div>

          {/* Learning */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">
              Learning
            </h3>

            <div className="space-y-3 text-sm">
              <Link
                href="/learn/computer"
                className="block text-gray-600 hover:text-blue-600"
              >
                Computer
              </Link>

              <Link
                href="/learn/physics"
                className="block text-gray-600 hover:text-blue-600"
              >
                Physics
              </Link>

              <Link
                href="/learn/chemistry"
                className="block text-gray-600 hover:text-blue-600"
              >
                Chemistry
              </Link>

              <Link
                href="/learn/maths"
                className="block text-gray-600 hover:text-blue-600"
              >
                Mathematics
              </Link>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">
              Tools
            </h3>

            <div className="space-y-3 text-sm">
              <Link
                href="/ai-hub"
                className="block text-gray-600 hover:text-blue-600"
              >
                AI Hub
              </Link>

              <Link
                href="/developer-hub"
                className="block text-gray-600 hover:text-blue-600"
              >
                Developer Hub
              </Link>

              <Link
                href="/dictionary"
                className="block text-gray-600 hover:text-blue-600"
              >
                Dictionary
              </Link>

              <Link
                href="/translator"
                className="block text-gray-600 hover:text-blue-600"
              >
                Translator
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">
              Resources
            </h3>

            <div className="space-y-3 text-sm">
              <Link
                href="/practice"
                className="block text-gray-600 hover:text-blue-600"
              >
                Practice
              </Link>

              <Link
                href="/downloads"
                className="block text-gray-600 hover:text-blue-600"
              >
                Downloads
              </Link>

              <Link
                href="/blog"
                className="block text-gray-600 hover:text-blue-600"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="block text-gray-600 hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Rishi Infotech Learning Hub.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}