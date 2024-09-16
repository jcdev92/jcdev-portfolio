import { Hero } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 antialiased">
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
