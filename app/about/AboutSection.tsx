import Image from "next/image";
import { profile } from "@/lib/data/data";

export default function AboutSection() {
  const {
    profileImg,
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

  const formatedBirthday = new Date(birthDay).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <section
      id="about"
      className="sm:p-10 lg:p-20 relative z-10 h-fit flex items-center overflow-y-auto"
    >
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-8xl text-center font-bold mb-5 p-5"> Who am i? </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-fit">
          <div className="flex flex-col md:flex-row justify-center items-center p-10">
            <div className="p-5 sm:p-0">
              <Image
                className="rounded-full object-cover max-w-full h-auto"
                src={profileImg}
                alt="about"
                width={200}
                height={200} 
              />
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
            <h2 className="text-bold text-2xl mb-3">
              {jobTitle}
            </h2>
            <p className="mb-5 text-sm text-gray-400">
              Providing web solutions
            </p>
            <p className="text-gray-500 text-justify leading-10">
              Hello there! nice to meet you! Im a full stack web developer, and
              Im very passionate and dedicated to my work. With more than 2
              years of experience as a professional web developer, With this
              time period I have acquired the skills and knowledge necessary to
              make your project a success. I enjoy every step of the development
              process, from discussion and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
