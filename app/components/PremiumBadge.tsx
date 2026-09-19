"use client";

import { Crown } from "lucide-react";

export default function PremiumBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-5 py-2 rounded-full font-bold shadow-lg">

      <Crown size={20} />

      <span>Premium Member</span>

    </div>
  );
}