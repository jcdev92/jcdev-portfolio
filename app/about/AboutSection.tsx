import { profile } from "@/lib/data/data";
import { TypewriterEffect } from "@/components/ui/effects/typewriter-effect";

export default function AboutSection() {
  const {
    aboutMe,
    jobTitle,
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
        <TypewriterEffect words={words} className="p-10"/>
        <div className="flex flex-col gap-10">
          <div className="p-4 md:p-10">
            <h2 className="text-bold text-2xl mb-3 text-primary-foreground">{jobTitle}</h2>
            <p className="mb-5 text-sm text-secondary-foreground">
              Providing web solutions
            </p>
            <p className="text-secondary-foreground text-justify leading-10">
              {`${aboutMe}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

