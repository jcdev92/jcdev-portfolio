import React from "react";
import { TextHoverEffect } from "@/components/ui/effects/text-hover-effect";
import { profile } from '@/lib/data/data'

export const HeroSection = () => {
  const { alias } = profile;

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-10 overflow-hidden rounded-md">
      {/* <Image alt="hero" src="/hero.jpg" width={300} height={300} className="rounded-full object-cover max-w-full h-auto shadow-md shadow-primary-foreground" /> */}
      {/* <TypewriterEffect words={words} />       */}
      <div className="h-[40rem] z-20 flex items-center justify-center">
        <TextHoverEffect text={alias} />
      </div>
    </div>
  );
};
