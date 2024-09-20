import React from "react";
import { TextHoverEffect } from "@/components/aceternityui/effects/text-hover-effect";
import { profile } from '@/lib/data/data'

export const HeroSection = () => {
  const { alias } = profile;

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-10 overflow-hidden rounded-md">
      <div className="h-[40rem] flex items-center justify-center">
        <TextHoverEffect text={alias} duration={0.5} />
      </div>
    </div>
  );
};
