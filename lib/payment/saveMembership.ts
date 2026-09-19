import { createClient } from "@/app/lib/supabase/server";

export async function saveMembership({
  userId,
  paymentId,
  orderId,
  amount,
  plan,
}: {
  userId: string;
  paymentId: string;
  orderId: string;
  amount: number;
  plan: string;
}) {
  const supabase = await createClient();

  // Save payment history
  await supabase.from("payments").insert({
    user_id: userId,
    payment_id: paymentId,
    order_id: orderId,
    amount,
    currency: "INR",
    status: "paid",
  });

  // Activate membership
  await supabase.from("memberships").upsert({
    user_id: userId,
    payment_id: paymentId,
    order_id: orderId,
    amount,
    plan,
    status: "active",
  });

  return true;
}