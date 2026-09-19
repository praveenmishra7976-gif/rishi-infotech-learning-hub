import { redirect } from "next/navigation";

export default async function CourseRedirectPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;

  redirect(`/student/course/${courseId}`);
}
