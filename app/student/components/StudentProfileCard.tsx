import { getStudentProfile } from "@/lib/student/getStudentProfile";

export default async function StudentProfileCard() {
  const student = await getStudentProfile();

  if (!student) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8">
        Student not found.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

      <img
        src={
          student.avatar_url || "/default-avatar.png"
        }
        alt="Student"
        className="w-32 h-32 rounded-full mx-auto"
      />

      <h2 className="text-2xl font-bold mt-6">
        {student.full_name}
      </h2>

      <p className="text-gray-500">
        {student.email}
      </p>

      <div className="mt-8 space-y-4">

        <div className="flex justify-between">

          <span>Role</span>

          <span className="capitalize">
            {student.role}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Status</span>

          <span className="capitalize">
            {student.status}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Joined</span>

          <span>
            {new Date(
              student.created_at
            ).toLocaleDateString("en-IN")}
          </span>

        </div>

      </div>

    </div>
  );
}