'use client'
import { profile } from "@/lib/data/data";
import { TypewriterEffect } from "@/components/ui/effects/typewriter-effect";
import { TextGenerateEffect } from "../../components/ui/effects/text-generate-effect";
import { motion } from "framer-motion";

export default function AboutSection() {
  const { aboutMe } = profile;

  const words = [
    { text: "Who" },
    { text: "is" },
    { text: "JC", className: "text-blue-500 text-shadow-alias dark:text-yellow-500" },
    { text: "DEV", className: "text-blue-500 text-shadow-alias dark:text-yellow-500" },
    { text: "?" },
  ];

  return (
    <section
      id="about"
      className="p-5 md:p-20 relative z-10 md:h-screen flex items-center overflow-y-auto"
    >
      <div className="container mx-auto backdrop-blur-md">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }} 
        >
          <TypewriterEffect words={words} className=" p-10 text-4xl md:text-9xl" />
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: -50, opacity: 1 }}
          transition={{ duration: 0.7, delay: 2.2 }}
          className="flex flex-col gap-10 mt-5"
        >
          <div className="p-2 md:p-10">
            <TextGenerateEffect words={aboutMe} className="text-center text-xs" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
