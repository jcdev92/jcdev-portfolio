import Image from "next/image";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import ShineBorder from "../../magicui/shine-border";

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
        className={`w-full px-4 sm:w-1/2 md:w-1/2 xl:w-1/3 ${
          showCard === "All" || showCard === category ? "block" : "hidden"
        }`}
      >
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={2}>
          <div className="relative h-[400px] flex flex-col">
            <div className="overflow-hidden rounded-t-md h-1/2">
              <Image
                src={coverImage}
                alt="portfolio"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col text-center gap-3 p-5 bg-secondary/60 backdrop-blur-sm shadow-lg rounded-b-lg relative flex-1">
              <h1 className="font-semibold text-xl line-clamp-1">{label}</h1>
              <p className="line-clamp-3 text-sm">
                {description.toLowerCase()}
              </p>
              <div className="w-full flex justify-around p-4 mt-auto">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className=" text-white hover:text-yellow-500"
                >
                  <IconBrandGithub />
                </a>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className=" text-white hover:text-yellow-500"
                >
                  <IconLink />
                </a>
              </div>
            </div>
          </div>
        </ShineBorder>
      </div>
    </>
  );
}
