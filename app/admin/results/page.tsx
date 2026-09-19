import ResultsStats from "./components/ResultsStats";
import PerformanceChart from "./components/PerformanceChart";
import RecentAttempts from "./components/RecentAttempts";
import ResultsTable from "./components/ResultsTable";

export default function ResultsPage() {
  return (
    <main className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-blue-700">
          Quiz Results
        </h1>

        <p className="text-gray-500 mt-2">
          Student performance and analytics.
        </p>

      </div>

      <ResultsStats />

      <PerformanceChart />

      <RecentAttempts />

      <ResultsTable />

    </main>
  );
}