export default function SecurityToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-blue-700">
          Security Tools
        </h1>

        <p className="mt-3 text-gray-600">
          Useful tools for security and data protection.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            "Password Generator",
            "Hash Generator",
            "Base64 Encoder",
            "Base64 Decoder",
            "JWT Decoder",
            "URL Encoder",
          ].map((tool) => (
            <div
              key={tool}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold">
                {tool}
              </h2>

              <p className="text-gray-500 mt-2">
                Tool coming soon.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
