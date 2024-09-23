import ContactCard from "@/components/ui/contact/card/ContactCard";
import { IconCloud, IconLockAccess, IconServer } from "@tabler/icons-react";
import { profile } from "@/lib/data/data";

export default function AboutSection() {
  const { slogan, aboutMe } = profile;
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
        <div className="bg-secondary/60 backdrop-blur-sm p-5 rounded-lg lg:rounded-b-none lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:p-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                WHO IS JC DEV?
              </h1>
              <p className="mt-6 text-xl leading-8 text-card-foreground/65">
                {slogan}
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 lg:-ml-20 lg:p-12 z-10 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex justify-center items-center">
          <ContactCard />
        </div>
        <div className="bg-secondary/60 backdrop-blur-sm p-5 rounded-lg lg:rounded-t-none lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:p-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-card-foreground/65 lg:max-w-lg">
              <p>
                {aboutMe}
              </p>
              <ul role="list" className="my-8 space-y-8 text-foreground/65">
                <li className="flex gap-x-3">
                  <IconCloud
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-secondary-foreground">
                      Push to deploy.
                    </strong>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <IconLockAccess
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-secondary-foreground">
                      SSL certificates.
                    </strong>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <IconServer
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-secondary-foreground">
                      Database backups.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
