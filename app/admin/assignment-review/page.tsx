import SubmissionTable from "./components/SubmissionTable";
import { getSubmissions } from "./lib/getSubmissions";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ReviewPage() {
  const submissions = await getSubmissions();

  return (
    <main className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-5xl font-bold text-blue-700 mb-10">
        Assignment Reviews
      </h1>

      <SubmissionTable submissions={submissions} />
    </main>
  );
}
