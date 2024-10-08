import React from "react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandVercel,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { social } from "@/lib/types";
interface SocialsProps {
  socials: social[] | null;
}

export const SocialIcons = ({ socials }: SocialsProps) => {
  return (
    <>
      {socials?.map(
        ({ id, label, link }: { id: string; label: string; link: string }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            className="text-primary hover:text-secondary-foreground hover:scale-110 transition-all ease-in-out"
          >
            {label === "linkedin" && <IconBrandLinkedin className="w-6 h-6" />}
            {label === "github" && <IconBrandGithub className="w-6 h-6" />}
            {label === "vercel" && <IconBrandVercel className="w-6 h-6" />}
            {label === "instagram" && (
              <IconBrandInstagram className="w-6 h-6" />
            )}
            {label === "x" && <IconBrandX className="w-6 h-6" />}
          </a>
        ),
      )}
    </>
  );
};
