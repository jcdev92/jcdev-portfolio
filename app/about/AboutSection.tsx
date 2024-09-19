import { profile } from "@/lib/data/data";
import { TypewriterEffect } from "@/components/ui/effects/typewriter-effect";
import { TextGenerateEffect } from '../../components/ui/effects/text-generate-effect';

export default function AboutSection() {
  const {
    aboutMe,
  } = profile;

  const words = [
    {
      text: "Who",
    },
    {
      text: "is",
    },
    {
      text: "JC",
      className: "text-blue-500 text-shadow-alias dark:text-yellow-500",
    },
    {
      text: "DEV",
      className: "text-blue-500 text-shadow-alias dark:text-yellow-500",
    },
    {
      text: "?",
    },
  ];


  return (
    <section
      id="about"
      className="p-5 md:p-20 relative z-10 md:h-screen flex items-center overflow-y-auto"
    >
      <div className="container mx-auto">
        <TypewriterEffect words={words} className="p-10 text-2xl"/>
        <div className="flex flex-col gap-10">
          <div className="md:p-10">
            {/* <p className="text-secondary-foreground text-justify leading-10">
              {`${aboutMe}`}
            </p> */}
            <TextGenerateEffect words={aboutMe} className="text-center text-xs" />
          </div>
        </div>
      </div>
    </section>
  );
}

