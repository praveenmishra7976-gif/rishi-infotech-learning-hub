"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-red-600">
            Global Error
          </h1>

          <p>{error.message}</p>

          <button
            onClick={reset}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Retry
          </button>
        </div>
      </body>
    </html>
  );
}