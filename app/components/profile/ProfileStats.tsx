"use client";

type Props = {
  profile: any;
};

export default function ProfileStats({ profile }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="flex flex-col items-center">

        <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-5xl font-bold">

          {(profile.full_name || profile.email || "S")
            .charAt(0)
            .toUpperCase()}

        </div>

        <h2 className="text-2xl font-bold mt-5">

          {profile.full_name || "Student"}

        </h2>

        <p className="text-gray-500 mt-1">

          {profile.email}

        </p>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-10">

        <div className="bg-blue-50 rounded-2xl p-5 text-center">

          <h3 className="text-3xl font-bold text-blue-700">

            {profile.level}

          </h3>

          <p>Level</p>

        </div>

        <div className="bg-green-50 rounded-2xl p-5 text-center">

          <h3 className="text-3xl font-bold text-green-700">

            {profile.xp}

          </h3>

          <p>XP</p>

        </div>

        <div className="bg-orange-50 rounded-2xl p-5 text-center">

          <h3 className="text-3xl font-bold text-orange-700">

            🔥 {profile.streak}

          </h3>

          <p>Streak</p>

        </div>

        <div className="bg-purple-50 rounded-2xl p-5 text-center">

          <h3 className="text-3xl font-bold text-purple-700">

            {profile.completed}

          </h3>

          <p>Completed</p>

        </div>

      </div>

    </div>
  );
}