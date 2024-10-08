import Image from "next/image";
import { IconCode, IconMail, IconGift, IconMapPinFilled, IconPhone} from "@tabler/icons-react"
import { SocialIcons } from '../icons/socialIcons';
import { profile, social } from '@/lib/types';

interface ContactCardProps {
  profile: profile | null;
  socials: social[] | null;
}

export default function ContactCard({profile, socials}: ContactCardProps) {
  const firstName = profile?.firstName || 'default value';
  const lastName = profile?.lastName || 'default value';
  const alias = profile?.alias || 'default value';
  const jobTitle = profile?.jobTitle || 'default value';
  const city = profile?.city || 'default value';
  const country = profile?.country || 'default value';
  const birthDay = profile?.birthDay || 1;
  const phone = profile?.phone || 'default value';
  const email = profile?.email || 'default value';


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
        src="/jcdev.jpg"
        alt="avatar"
        width={500}
        height={500}
      />
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <IconCode className="w-6 h-6 text-primary" />
        <h1 className="mx-3 text-lg font-semibold text-primary">Developing</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-primary">
          { `${firstName} ${lastName}` } 
        </h1>
        <div className="flex items-center gap-2">
          <IconCode className="w-6 h-6" />
          <p className="py-2 text-primary">
            { `${jobTitle}`}
          </p>
        </div>
        <p className="py-2 text-primary">
          { `@  ${alias}`}
        </p>

        <div className="flex items-center mt-4 text-primary">
          <IconGift className="w-6 h-6" />
          <h1 className="px-2 text-sm">{formatedBirthday}</h1>
        </div>
        <div className="flex items-center mt-4 text-primary">
          <IconMapPinFilled className="w-6 h-6" />
          <h1 className="px-2 text-sm">{`${city}, ${country}`}</h1>
        </div>
        <div className="flex items-center mt-4 text-primary hover:font-bold hover:text-secondary-foreground hover:scale-105 transition-all ease-in-out">
          <IconPhone className="w-6 h-6" />
          <a href={`tel:${phone}`} className="px-2 text-sm">{phone}</a>
        </div>        
        <div className="flex items-center mt-4 text-primary hover:font-bold hover:text-secondary-foreground hover:scale-105 transition-all ease-in-out">
          <IconMail className="w-6 h-6" />
          <a href={`mailto:${email}`} className="px-2 text-sm">{email}</a>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 bg-background/60 backdrop-blur-sm gap-7">
        <SocialIcons socials={socials}/>
      </div>
    </div>
  );
}
