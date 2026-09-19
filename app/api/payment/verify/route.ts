import { getCurrentUser } from "@/app/lib/auth/getCurrentUser";
import { saveMembership } from "@/lib/payment/saveMembership";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET!;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment signature",
        },
        {
          status: 400,
        }
      );
    }

    // Save membership after successful verification
   const user = await getCurrentUser();

if (!user) {
  return NextResponse.json(
    {
      success: false,
      message: "User not logged in",
    },
    {
      status: 401,
    }
  );
}

await saveMembership({
  userId: user.id,
  paymentId: razorpay_payment_id,
  orderId: razorpay_order_id,
  amount: 299,
  plan: "Monthly",
});

    return NextResponse.json({
      success: true,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      message: "Payment verified successfully",
    });

  } catch (error) {
    console.error("Payment Verification Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Verification failed",
      },
      {
        status: 500,
      }
    );
  }
}