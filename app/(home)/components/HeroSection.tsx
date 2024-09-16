import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";
import { TypewriterEffect } from '../../../components/ui/typewriter-effect';

export const Hero = () => {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "JC",
      className: "text-blue-500 text-shadow-custom dark:text-yellow-500",
    },
    {
      text: "DEV",
      className: "text-blue-500 text-shadow-custom dark:text-yellow-500",
    },
    {
      text: "Portfolio",
    },
  ];

  return (
    <div className="h-[40rem] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        <TypewriterEffect words={words} />
      </h1>
    </div>
  );
};
