export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">

      <div className="h-12 w-80 bg-gray-300 rounded-xl" />

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="h-80 rounded-3xl bg-gray-300" />

        <div className="lg:col-span-2 h-80 rounded-3xl bg-gray-300" />

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="h-64 rounded-3xl bg-gray-300" />

        <div className="h-64 rounded-3xl bg-gray-300" />

      </div>

    </div>
  );
}