import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
    </main>
  );
}
