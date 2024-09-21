import Image from "next/image";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";

interface PortfolioCardProps {
  showCard: string;
  categories: string[];
  coverImage: string;
  label: string;
  description: string;
  github: string;
  link: string;
}

export default function PortfolioCard({
  showCard,
  categories,
  coverImage,
  label,
  description,
  github,
  link,
}: PortfolioCardProps) {
  const category = categories?.find((category) => category === showCard);
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "All" || showCard === category
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <Image
              src={coverImage}
              alt="portfolio"
              className="w-full"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col text-center gap-5 p-5 bg-secondary/80 shadow-lg rounded-b-lg backdrop-blur-sm relative z-10 mx-7 -mt-20 rounded-lg py-[34px] px-3">
            <h1 className="font-semibold text-xl">{label}</h1>
            <p>{description}</p>
            <div className="w-full flex justify-around p-4">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="text-xl text-white hover:text-yellow-500"
              >
                <IconBrandGithub />
              </a>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-xl text-white hover:text-yellow-500"
              >
                <IconLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
