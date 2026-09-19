import { getClasses } from "./lib/getClasses";
import CreateClass from "./components/CreateClass";
import ClassCard from "./components/ClassCard";

export default async function LiveClassesPage() {
  const classes = await getClasses();

  return (
    <main className="max-w-7xl mx-auto py-10 px-6 space-y-10">

      <h1 className="text-5xl font-bold text-blue-700">
        🎥 Live Classes
      </h1>

      <CreateClass />

      <div className="grid md:grid-cols-2 gap-6">
        {classes.map((liveClass: any) => (
          <ClassCard
            key={liveClass.id}
            liveClass={liveClass}
          />
        ))}
      </div>

    </main>
  );
}