import Link from "next/link";

export default function QuickActions() {
  const actions = [
    "Computer Notes",
    "Physics",
    "Chemistry",
    "Mathematics",
    "AI Hub",
    "Developer Tools",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold">
        Quick Access
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-6">

        {actions.map((item) => (
          <Link
            key={item}
            href="#"
            className="bg-blue-50 hover:bg-blue-100 p-4 rounded-xl text-center font-semibold"
          >
            {item}
          </Link>
        ))}

      </div>

    </div>
  );
}