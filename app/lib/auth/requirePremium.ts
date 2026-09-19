import { checkPremium } from "./checkPremium";

export async function requirePremium(userId: string) {
  const premium = await checkPremium(userId);

  if (!premium) {
    throw new Error("Premium Membership Required");
  }

  return premium;
}