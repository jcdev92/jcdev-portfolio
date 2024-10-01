import ContactCard from "@/components/ui/cards/ContactCard";
import { IconBook, IconUsersGroup, IconCode } from "@tabler/icons-react";
import ShineBorder from "@/components/ui/effects/shine-border";

interface AboutSectionProps {
  slogan: string;
  aboutMe: string;
  aboutList: {
    icon: string;
    title: string;
    description: string;
  }[];
  alias: string;
}

export default function AboutSection({ slogan, aboutMe, aboutList, alias }: AboutSectionProps) {
  
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="flex w-full items-center justify-center">
      <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
        <div className="bg-secondary/60 backdrop-blur-sm p-5 rounded-t-lg rounded-b-none lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:p-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                WHO IS <span className="text-yellow-300 text-shadow-alias">{alias}</span> ?
              </h1>
              <p className="mt-6 text-xl leading-8 text-card-foreground/65">
                {slogan}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-secondary/60 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none w-full p-5 lg:p-12 z-10 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex justify-center items-center">
          <ContactCard />
        </div>
        <div className="bg-secondary/60 backdrop-blur-sm w-full p-5 rounded-b-lg rounded-t-none lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:p-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-card-foreground/65 lg:max-w-lg">
              <p>
                {aboutMe}
              </p>
              <ul role="list" className="my-8 space-y-8 text-foreground/65">
              {
                aboutList.map(({title, description, icon}, index) => (
                  <li key={index} className="flex gap-x-3">
                    {
                      icon === 'code' && <IconCode aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                      || icon === 'users' && <IconUsersGroup aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                      || icon === 'book-open' && <IconBook aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                    }
                    <span>
                      <strong className="font-semibold text-secondary-foreground">
                        {title}
                      </strong>{" "}
                      {description}
                    </span>
                  </li>
                ))
              }
              </ul>
            </div>
          </div>
        </div>
        </ShineBorder>
      </div>
    </div>
  );
}
