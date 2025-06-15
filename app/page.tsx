import About from "@/components/about";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
