"use client";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RazorpayButton() {
  async function pay() {
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 299,
        }),
      });

      const order = await res.json();

      if (!order.id) {
        alert("Unable to create payment order.");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: order.amount,

        currency: order.currency,

        name: "Rishi Infotech Learning Hub",

        description: "Premium Membership",

        order_id: order.id,

        prefill: {
          name: "Student",
          email: "student@example.com",
        },

        theme: {
          color: "#2563EB",
        },

        handler: async function (response: any) {
          const verify = await fetch("/api/payment/verify", {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(response),
          });

          const result = await verify.json();

          if (result.success) {
            window.location.href = "/payment/success";
          } else {
            alert("Payment verification failed.");
          }
        },

        modal: {
          ondismiss: function () {
            window.location.href = "/payment/cancel";
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  }

  return (
    <button
      onClick={pay}
      className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition"
    >
      Buy Premium
    </button>
  );
}