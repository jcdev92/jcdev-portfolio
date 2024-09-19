import ContactLink from "./ContactLink";
import { Social } from "@/lib/types";
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

  
  interface LinksContainerProps {
    socials: Social[];
    phone: string;
    mail: string;
  }

export default function LinksConteiner({ socials, phone, mail }: LinksContainerProps) {

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
    )
}