import React from "react";
import { TextHoverEffect } from "@/components/aceternityui/effects/text-hover-effect";
import { profile } from "@/lib/data/data";

export const HeroSection = () => {
  const { alias } = profile;

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-10 overflow-hidden rounded-md">
      <div className="hidden h-[40rem] md:flex items-center justify-center">
        <TextHoverEffect text={alias} duration={0.5} />
      </div>
        <h1 className="flex text-center md:hidden mb-4 text-9xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-indigo-900">
            {alias}
          </span>
        </h1>
    </div>
  );
};
