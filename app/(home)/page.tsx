import { Hero } from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full rounded-md antialiased">
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <Hero />
      </div>
    </div>
  );
}
