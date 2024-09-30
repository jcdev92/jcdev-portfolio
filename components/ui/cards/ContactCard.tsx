import { profile } from "@/lib/data/data";
import Image from "next/image";
import { IconCode, IconMail, IconGift, IconMapPinFilled, IconPhone } from "@tabler/icons-react"

export default function ContactCard() {
  const {
    alias,
    firstName,
    lastName,
    jobTitle,
    birthDay,
    city,
    country,
    phone,
    email,
  } = profile;

  const formatedBirthday = new Date(birthDay).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="w-full max-w-sm overflow-hidden bg-secondary rounded-lg shadow-lg">
      <Image
        className="object-cover object-center w-full h-56"
        src="/profile-removebg-preview.png"
        alt="avatar"
        width={500}
        height={500}
      />
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <IconCode className="w-6 h-6 text-white" />
        <h1 className="mx-3 text-lg font-semibold text-white">Developing</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          { `${firstName} ${lastName}` } 
        </h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">
          { `${jobTitle}`}
        </p>
        <p className="py-2 text-gray-700 dark:text-gray-400">
          { `@${alias}`}
        </p>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <IconGift className="w-6 h-6" />
          <h1 className="px-2 text-sm">{formatedBirthday}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <IconMapPinFilled className="w-6 h-6" />
          <h1 className="px-2 text-sm">{`${city}, ${country}`}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <IconPhone className="w-6 h-6" />
          <h1 className="px-2 text-sm">{phone}</h1>
        </div>        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <IconMail className="w-6 h-6" />
          <h1 className="px-2 text-sm">{email}</h1>
        </div>
      </div>
    </div>
  );
}
