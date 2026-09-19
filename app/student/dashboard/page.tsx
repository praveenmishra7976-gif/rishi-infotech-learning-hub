import StudentStats from "../components/StudentStats";
import StudentProfileCard from "../components/StudentProfileCard";
import ProgressOverview from "../components/ProgressOverview";
import RecentQuizResults from "../components/RecentQuizResults";
import UpcomingQuizzes from "../components/UpcomingQuizzes";

export default function StudentDashboard() {

  return (

    <main className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-blue-700">

          Student Dashboard

        </h1>

        <p className="text-gray-500 mt-2">

          Welcome back! Continue your learning journey.

        </p>

      </div>

      <StudentStats />

      <div className="grid xl:grid-cols-3 gap-8">

        <StudentProfileCard />

        <div className="xl:col-span-2">

          <ProgressOverview />

        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        <RecentQuizResults />

        <UpcomingQuizzes />

      </div>

    </main>

  );

}