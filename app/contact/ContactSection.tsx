import { profile } from "@/lib/data/data";
import {
  IconPhone,
  IconMail,
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandVercel,
  IconProps,
} from "@tabler/icons-react";
import ContactLink from "./components/ContactLink";
import ProfileCard from "./components/ProfileCard";

export default function ContactSection() {
  const {
    alias,
    firstName,
    lastName,
    birthDay,
    city,
    country,
    gender,
    phone,
    mail,
    socials,
  } = profile;

  type SocialLabels = "Instagram" | "LinkedIn" | "X" | "GitHub" | "Vercel";

  const iconMap: Record<SocialLabels, React.ComponentType<IconProps>> = {
    Instagram: IconBrandInstagram,
    LinkedIn: IconBrandLinkedin,
    X: IconBrandX,
    GitHub: IconBrandGithub,
    Vercel: IconBrandVercel,
  };

  type ContactLabels = "Phone" | "Mail" | "Whatsapp";

  interface ContactLink {
    href: string;
    icon: React.ComponentType<IconProps>;
  }

  const contactMap: Record<ContactLabels, ContactLink> = {
    Phone: {
      href: `tel:${phone}`,
      icon: IconPhone,
    },
    Mail: {
      href: `mailto:${mail}`,
      icon: IconMail,
    },
    Whatsapp: {
      href: `https://wa.me/${phone}`,
      icon: IconBrandWhatsapp,
    },
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col border rounded-md bg-foreground/40 backdrop-blur-lg shadow-lg">
          <ProfileCard
            alias={alias}
            firstName={firstName}
            lastName={lastName}
            birthDay={birthDay}
            city={city}
            country={country}
            gender={gender}
          />
          <div className="flex items-center justify-around p-5">
            {socials.map((social) => {
              const IconComponent =
                iconMap[social.label as keyof typeof iconMap];
              return (
                IconComponent && (
                  <ContactLink
                    key={social.label}
                    href={social.link}
                    icon={IconComponent}
                  />
                )
              );
            })}
            {Object.entries(contactMap).map(([key, value]) => {
              const IconComponent = value.icon;
              return (
                <ContactLink key={key} href={value.href} icon={IconComponent} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
