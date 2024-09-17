import React from "react";
import { TypewriterEffect } from "../../../components/ui/typewriter-effect";
import Image from "next/image";

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
    <div className="h-full border w-full flex flex-col items-center justify-center gap-10 overflow-hidden rounded-md">
      <Image alt="hero" src="/hero.jpg" width={300} height={300} className="rounded-full object-cover max-w-full h-auto shadow-md shadow-primary-foreground" />
      <TypewriterEffect words={words} />      
    </div>
  );
};
