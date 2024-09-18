import Image from "next/image";
import { profile } from "@/lib/data/data";
import { IconPhone, IconMail, IconBrandWhatsapp, IconBrandLinkedin, IconBrandTwitter, IconBrandGithub, IconBrandInstagram, IconBrandVercel } from "@tabler/icons-react"

export default function ContactSection() {
  const { alias, firstName, lastName, city, country, birthDay, gender, phone, email } = profile;
  
  const formatedBirthday = new Date(birthDay).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col border relative z-50">
          <div className="flex flex-col md:flex-row justify-center items-center border gap-10 p-10">
            <Image
              alt="hero"
              src="/hero.jpg"
              width={300}
              height={300}
              className="rounded-full object-cover max-w-full h-auto shadow-md shadow-primary-foreground"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-yellow-500 text-shadow-custom">{`${alias}`}</h1>
              <h1 className="text-3xl font-bold text-gray-900">{`${firstName}`}</h1>
              <h1 className="text-3xl font-bold text-gray-900">{`${lastName}`}</h1>
              <p className="text-sm text-gray-500">{`${city}, ${country} `}</p>
              <p className="text-sm text-gray-400">{`${formatedBirthday} `}</p>
              <p className="text-sm text-gray-500">{`${gender} `}</p>
            </div>
          </div>
          <div className="flex border items-center justify-around p-5">
            <a href={`tel:${phone}`} className="flex items-center hover:text-yellow-300">
              <IconPhone size={20} />
            </a>
            <a href={`mailto:${email}`} className="flex items-center hover:text-yellow-300">
              <IconMail size={20} />
            </a>
            <a href={`XXXXXXXXXXXXXX${phone}`} className="flex items-center hover:text-yellow-300">
              <IconBrandWhatsapp size={20} />
            </a>
            <a href={`XXXXXXXXXXXXXXXXXXXXXXXXXXXX${alias}`} className="flex items-center hover:text-yellow-300">
              <IconBrandLinkedin size={20} />
            </a>
            <a href={`XXXXXXXXXXXXXXXXXXXXXXXXXXXX${alias}`} className="flex items-center hover:text-yellow-300">
              <IconBrandTwitter size={20} />
            </a>
            <a href={`XXXXXXXXXXXXXXXXXXXXXXXXXXXX${alias}`} className="flex items-center hover:text-yellow-300">
              <IconBrandInstagram size={20} />
            </a>
            <a href={`XXXXXXXXXXXXXXXXXXXXXXXXXXXX${alias}`} className="flex items-center hover:text-yellow-300">
              <IconBrandGithub size={20} />
            </a>
            <a href={`XXXXXXXXXXXXXXXXXXXXXXXXXXXX${alias}`} className="flex items-center hover:text-yellow-300">
              <IconBrandVercel size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
