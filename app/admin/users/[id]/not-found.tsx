import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex justify-center items-center">

      <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

        <h1 className="text-6xl font-bold text-blue-700">

          404

        </h1>

        <h2 className="text-3xl mt-5 font-bold">

          User Not Found

        </h2>

        <p className="mt-4 text-gray-500">

          This user does not exist.

        </p>

        <Link
          href="/admin/users"
          className="inline-block mt-8 bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          Back to Users
        </Link>

      </div>

    </div>
  );
}