export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Contact Us
        </h1>

        <div className="space-y-6 text-lg">
          <p>
            <strong>📞 Mobile:</strong> +91 7976414318
          </p>

          <p>
            <strong>📧 Email:</strong> rishiinfotech007@gmail.com
          </p>

          <p>
            <strong>▶ YouTube:</strong><br />
            <a
              href="https://youtube.com/@rishirajaiverse?si=2vJjpVHKgTia5ETn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Rishi Aiverse
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}