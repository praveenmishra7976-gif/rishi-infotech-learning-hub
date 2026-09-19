"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600">
        Something went wrong
      </h1>

      <p className="mt-4">{error.message}</p>

      <button
        onClick={reset}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Try Again
      </button>
    </div>
  );
}