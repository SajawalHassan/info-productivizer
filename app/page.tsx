import Header from "@/components/header";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <main className="flex-grow">
        {/* <Hero /> */}
        {/* <About /> */}
        {/* <Features /> */}
        {/* <Pricing /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
