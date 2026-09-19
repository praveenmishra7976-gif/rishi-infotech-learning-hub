export default function RecentActivity() {

  const activities = [

    "New user registered",

    "Physics notes updated",

    "Chemistry quiz added",

    "AI Tool published",

    "Dictionary module updated",

  ];

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-blue-700">

        Recent Activity

      </h2>

      <ul className="mt-8 space-y-4">

        {activities.map((activity, index) => (

          <li
            key={index}
            className="border-b pb-3"
          >

            {activity}

          </li>

        ))}

      </ul>

    </div>

  );

}