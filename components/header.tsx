"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <Youtube className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">SaaSify</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">
            About
          </a>
          <a href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Log in</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
