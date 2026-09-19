import EditCourseForm from "../../components/EditCourseForm";
import { getCourse } from "../../lib/getCourse";

export default async function EditCoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const course = await getCourse(id);

  return (
    <main className="max-w-5xl mx-auto py-10">

      <EditCourseForm
        course={course}
      />

    </main>
  );
}