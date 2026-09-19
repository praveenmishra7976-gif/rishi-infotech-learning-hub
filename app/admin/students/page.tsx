import StudentsTable from "./components/StudentsTable";
import { getStudents } from "./lib/getStudents";

export default async function StudentsPage() {
  const students = await getStudents();

  return (
    <main className="space-y-8">

      <div>

        <h1 className="text-5xl font-bold text-blue-700">
          Student Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all registered students.
        </p>

      </div>

      <StudentsTable students={students} />

    </main>
  );
}