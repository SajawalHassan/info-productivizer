import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Basic",
    price: "$9",
    description: "For individuals and creators just getting started.",
    features: ["1 YouTube Channel", "Basic Analytics", "Email Support"],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing creators and small businesses.",
    features: ["5 YouTube Channels", "Advanced Analytics", "AI Suggestions", "Priority Support"],
    cta: "Choose Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams and agencies managing multiple channels.",
    features: ["Unlimited Channels", "Full API Access", "Dedicated Manager", "24/7 Support"],
    cta: "Contact Us",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Flexible Plans for Every Creator</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that's right for you. All plans come with a 14-day free trial.
          </p>
        </div>
        <div className="mx-auto grid max-w-md items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-6 rounded-lg shadow-lg bg-background transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
                tier.popular ? "border-2 border-primary animate-glow" : "border border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <div className="inline-block bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">Most Popular</div>
                </div>
              )}
              <h3 className="text-2xl font-bold text-center">{tier.name}</h3>
              <div className="mt-4 text-center text-muted-foreground">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price.startsWith("$") && <span className="text-lg">/month</span>}
              </div>
              <p className="mt-4 text-center text-muted-foreground h-12">{tier.description}</p>
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button className="w-full" variant={tier.popular ? "default" : "secondary"}>
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
