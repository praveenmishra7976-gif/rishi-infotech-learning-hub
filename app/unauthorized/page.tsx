import Link from "next/link";

export default function Unauthorized() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

        <h1 className="text-5xl font-bold text-red-600">
          403
        </h1>

        <h2 className="text-3xl mt-5 font-bold">
          Access Denied
        </h2>

        <p className="text-gray-500 mt-3">
          You don't have permission to view this page.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block bg-blue-700 text-white px-8 py-4 rounded-xl"
        >
          Back Home
        </Link>

      </div>

    </main>
  );
}