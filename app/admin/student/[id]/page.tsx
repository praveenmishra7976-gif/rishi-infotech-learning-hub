export default async function StudentProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="max-w-5xl mx-auto py-20">

      <h1 className="text-5xl font-bold text-blue-700">
        Student Profile
      </h1>

      <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

        <p className="text-xl">
          Student ID:
        </p>

        <p className="font-bold mt-2">
          {id}
        </p>

        <p className="mt-8 text-gray-600">
          Student profile details will be loaded from Supabase in the next step.
        </p>

      </div>

    </main>
  );
}