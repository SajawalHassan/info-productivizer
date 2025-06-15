import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart, Smile, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-between items-start lg:gap-y-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium animate-fade-in [animation-delay:0.2s]">About Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in [animation-delay:0.4s]">
                From Data to Dominance
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in [animation-delay:0.6s]">
                SaaSify was born from a simple observation: creators have the passion, but lack the data-driven tools to truly break through. We're a
                team of engineers, data scientists, and YouTube veterans dedicated to building the ultimate toolkit for channel growth. We turn
                complex analytics into actionable insights, so you can focus on what you do best: creating.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 animate-fade-in [animation-delay:0.8s]">
              <div className="text-center">
                <Users className="mx-auto h-10 w-10 text-primary" />
                <p className="mt-2 text-xl font-bold">10,000+</p>
                <p className="text-sm text-muted-foreground">Creators Empowered</p>
              </div>
              <div className="text-center">
                <BarChart className="mx-auto h-10 w-10 text-primary" />
                <p className="mt-2 text-xl font-bold">5M+</p>
                <p className="text-sm text-muted-foreground">Insights Generated</p>
              </div>
              <div className="text-center">
                <Smile className="mx-auto h-10 w-10 text-primary" />
                <p className="mt-2 text-xl font-bold">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fade-in [animation-delay:1s]">
            <Skeleton className="w-full" />
            <Skeleton className="w-full" />
            <Skeleton className="w-full" />
            <Skeleton className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
