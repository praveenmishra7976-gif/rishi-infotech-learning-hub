import PremiumBadge from "@/app/components/PremiumBadge";

export default function PremiumDashboard() {
  return (
    <main className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto py-20 px-6">

        <PremiumBadge />

        <h1 className="text-5xl font-bold mt-8 text-blue-700">
          Welcome Premium Student 🎉
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Your Premium Membership is Active.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold">
              Premium Courses
            </h2>

            <p className="mt-4 text-gray-600">
              Access every premium course without any limitation.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold">
              AI Assistant
            </h2>

            <p className="mt-4 text-gray-600">
              Unlimited AI doubt solving and smart learning assistance.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold">
              Certificates
            </h2>

            <p className="mt-4 text-gray-600">
              Download premium certificates after course completion.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-blue-600 text-white rounded-3xl p-8">

            <h2 className="text-3xl font-bold">
              Premium Benefits
            </h2>

            <ul className="mt-6 space-y-3">

              <li>✅ Unlimited Premium Courses</li>

              <li>✅ AI Learning Assistant</li>

              <li>✅ Unlimited Mock Tests</li>

              <li>✅ Download All PDFs</li>

              <li>✅ Premium Certificates</li>

              <li>✅ Priority Support</li>

            </ul>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-green-600">
              Membership Status
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">

                <span>Plan</span>

                <span className="font-bold">
                  Premium
                </span>

              </div>

              <div className="flex justify-between">

                <span>Status</span>

                <span className="text-green-600 font-bold">
                  Active
                </span>

              </div>

              <div className="flex justify-between">

                <span>Courses</span>

                <span>Unlimited</span>

              </div>

              <div className="flex justify-between">

                <span>AI Access</span>

                <span>Unlimited</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}