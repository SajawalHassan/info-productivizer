export type pricingTiersType = {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}[];

export const pricingTiers: pricingTiersType = [
  {
    name: "Basic",
    price: 9,
    description: "For individuals and creators just getting started.",
    features: ["1 YouTube Channel", "Basic Analytics", "Email Support"],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: 29,
    description: "For growing creators and small businesses.",
    features: ["5 YouTube Channels", "Advanced Analytics", "AI Suggestions", "Priority Support"],
    cta: "Choose Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 100,
    description: "For large teams and agencies managing multiple channels.",
    features: ["Unlimited Channels", "Full API Access", "Dedicated Manager", "24/7 Support"],
    cta: "Contact Us",
  },
];
