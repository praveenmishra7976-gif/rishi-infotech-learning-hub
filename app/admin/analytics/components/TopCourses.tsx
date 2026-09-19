export default function TopCourses() {

  const courses = [
    {
      name: "Computer",
      students: 1250,
    },
    {
      name: "Physics",
      students: 980,
    },
    {
      name: "Chemistry",
      students: 860,
    },
    {
      name: "Mathematics",
      students: 820,
    },
    {
      name: "Sanskrit",
      students: 540,
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-purple-700 mb-6">
        Top Courses
      </h2>

      <div className="space-y-5">

        {courses.map((course) => (

          <div
            key={course.name}
            className="flex justify-between"
          >

            <span>{course.name}</span>

            <span className="font-bold">
              {course.students}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}