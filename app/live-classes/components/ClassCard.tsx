export default function ClassCard({
  liveClass,
}: {
  liveClass: any;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">

      <h2 className="text-2xl font-bold">
        {liveClass.title}
      </h2>

      <p className="mt-3 text-gray-600">
        {liveClass.description}
      </p>

      <p className="mt-4">
        👨‍🏫 {liveClass.teacher_name}
      </p>

      <p>
        🕒 {new Date(liveClass.start_time).toLocaleString()}
      </p>

      <a
        href={liveClass.meeting_link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 bg-blue-700 text-white px-6 py-3 rounded-xl"
      >
        Join Class
      </a>

    </div>
  );
}