export function getPlans() {
  return [
    {
      id: "basic",
      name: "Basic",
      price: 299,
      duration: "1 Month",
      features: [
        "Premium Courses",
        "Certificates",
        "AI Teacher",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: 999,
      duration: "6 Months",
      features: [
        "Everything in Basic",
        "Unlimited AI",
        "Downloads",
        "Priority Support",
      ],
    },
    {
      id: "lifetime",
      name: "Lifetime",
      price: 2999,
      duration: "Lifetime",
      features: [
        "Everything",
        "Future Updates",
        "Unlimited Access",
      ],
    },
  ];
}