import RazorpayButton from "./RazorpayButton";

export default function PremiumPage() {
  return (
    <main className="max-w-6xl mx-auto py-20 px-6">

      <h1 className="text-5xl font-bold text-center text-blue-700">
        Premium Membership
      </h1>

      <p className="text-center text-gray-500 mt-4">
        Unlock all premium courses, AI tools, quizzes and certificates.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        {/* Monthly */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold">
            Monthly
          </h2>

          <p className="text-5xl font-bold mt-6">
            ₹299
          </p>

          <div className="mt-8">
            <RazorpayButton />
          </div>

        </div>

        {/* Yearly */}

        <div className="bg-blue-700 text-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold">
            Yearly
          </h2>

          <p className="text-5xl font-bold mt-6">
            ₹1999
          </p>

          <div className="mt-8">
            <RazorpayButton />
          </div>

        </div>

        {/* Lifetime */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold">
            Lifetime
          </h2>

          <p className="text-5xl font-bold mt-6">
            ₹4999
          </p>

          <div className="mt-8">
            <RazorpayButton />
          </div>

        </div>

      </div>

    </main>
  );
}