import React from "react";
import { BarChart, Bot, Rocket, Youtube } from "lucide-react";

const features = [
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Advanced Analytics",
    description: "Gain deep insights into your video performance and audience engagement with our comprehensive analytics dashboard.",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI-Powered Suggestions",
    description: "Receive AI-driven recommendations for titles, descriptions, and tags to maximize your video's reach and impact.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Competitor Tracking",
    description: "Monitor your competitors, track their strategies, and stay ahead of the curve in your niche.",
  },
  {
    icon: <Youtube className="h-8 w-8 text-primary" />,
    title: "Content Strategy",
    description: "Develop a winning content strategy with tools that help you identify trending topics and video ideas.",
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our platform is packed with powerful features designed to help you grow your YouTube channel faster than ever before.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 p-4 rounded-lg transition-all hover:bg-secondary/50">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
