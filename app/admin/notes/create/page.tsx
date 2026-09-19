import NoteEditor from "../components/NoteEditor";

export default function CreateNotePage() {
  return (
    <main className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-blue-700">
          Create New Note
        </h1>

        <p className="text-gray-500 mt-2">
          Create professional study notes for students.
        </p>

      </div>

      <NoteEditor />

    </main>
  );
}