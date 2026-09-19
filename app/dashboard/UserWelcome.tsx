import { Flame } from "lucide-react";

export default function UserWelcome() {
  return (
    <section className="mt-8 rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white p-8">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

        <div>

          <h2 className="text-4xl font-bold">
            Welcome Back 👋
          </h2>

          <p className="mt-4 text-blue-100 text-lg">
            Continue your learning journey and complete today's goals.
          </p>

        </div>

        <div className="bg-white/20 rounded-3xl p-6 flex items-center gap-4">

          <Flame
            size={42}
            className="text-orange-300"
          />

          <div>

            <h3 className="text-3xl font-bold">
              15 Days
            </h3>

            <p className="text-blue-100">
              Study Streak
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}