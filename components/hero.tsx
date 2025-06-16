"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import FloatingOrbs from "./floating-orbs";
import axios from "axios";
import { LoaderIcon } from "lucide-react";

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const getSummary = async () => {
    try {
      setLoading(true);
      const transcript = await axios.post(`/api/gemini`, { prompt });
      setResponse(transcript.data.text);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="hero" className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 text-center overflow-hidden">
      <FloatingOrbs />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.2),transparent_70%)]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-4 animate-fade-in [animation-delay:0.2s] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 py-2">
          Unlock Your YouTube Potential
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in [animation-delay:0.4s]">
          Analyze, optimize, and grow your channel with our powerful AI-driven tools.
        </p>

        <div className="max-w-2xl mx-auto animate-fade-in [animation-delay:0.6s]">
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="Enter a youtube link"
              className="flex-1 h-12 text-base"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <Button type="submit" size="lg" className="h-12" onClick={getSummary}>
              {loading ? <LoaderIcon className="animate-spin" /> : "Go!"}
            </Button>
          </div>
          <p className="whitespace-pre-wrap break-words text-left">{response}</p>
        </div>

        <div className="flex items-center justify-center my-6 animate-fade-in [animation-delay:0.8s]">
          <div className="flex-grow border-t border-border"></div>
          <span className="flex-shrink mx-4 text-muted-foreground">or</span>
          <div className="flex-grow border-t border-border"></div>
        </div>

        <div className="animate-fade-in [animation-delay:1s]">
          <Button variant="secondary" size="lg">
            Choose youtube channel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
