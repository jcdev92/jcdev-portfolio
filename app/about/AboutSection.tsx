import Image from "next/image";
import { profile } from "@/lib/data/data";
import { TypewriterEffect } from "@/components/ui/effects/typewriter-effect";

export default function AboutSection() {
  const {
    aboutMe,
    alias,
    firstName,
    lastName,
    jobTitle,
    email,
    phone,
    birthDay,
    gender,
    city,
    country,
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
      className: "text-blue-500 text-shadow-custom dark:text-yellow-500",
    },
    {
      text: "DEV",
      className: "text-blue-500 text-shadow-custom dark:text-yellow-500",
    },
    {
      text: "?",
    },
  ];

  const formatedBirthday = new Date(birthDay).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <section
      id="about"
      className="p-5 md:p-20 relative z-10 md:h-screen flex items-center overflow-y-auto"
    >
      <div className="container mx-auto">
        <TypewriterEffect words={words} className="p-10"/>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-fit">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="">
              <Image alt="hero" src="/hero.jpg" width={300} height={300} className="rounded-full object-cover max-w-full h-auto shadow-md shadow-primary-foreground" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-yellow-500 text-shadow-custom">{`${alias}`}</h1>
              <h1 className="text-3xl font-bold text-gray-900">{`${firstName}`}</h1>
              <h1 className="text-3xl font-bold text-gray-900">{`${lastName}`}</h1>
              <p className="text-sm text-gray-500">{`${city}, ${country} `}</p>
              <p className="text-sm text-gray-400">{`${formatedBirthday} `}</p>
            </div>
          </div>
          <div className="p-4 md:p-10">
            <h2 className="text-bold text-2xl mb-3">{jobTitle}</h2>
            <p className="mb-5 text-sm text-gray-400">
              Providing web solutions
            </p>
            <p className="text-gray-500 text-justify leading-10">
              {`${aboutMe}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
