import React from "react";
import { Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 md:py-8 border-t">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2">
          <Youtube className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">SaaSify</span>
        </a>
        <p className="text-sm text-muted-foreground">&copy; 2025 SaaSify. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <a href="#" className="text-sm hover:underline underline-offset-4">
            Terms of Service
          </a>
          <a href="#" className="text-sm hover:underline underline-offset-4">
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
