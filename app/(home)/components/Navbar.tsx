import React from "react";
import { profile } from "@/lib/data/data";
import Link from "next/link";
import { SiLinkedin, SiGithub, SiInstagram, SiX } from "react-icons/si";

export const Navbar = () => {
  const { socials } = profile;

  return (
    <nav className="py-10 flex justify-between">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 rotate-2">JESUS CLEMENTE 🧑🏻‍💻</h1>
      <div className="flex items-center gap-5">
        {socials.map((social) => {
          return (
            <Link className="w-5 h-5 hover:scale-125 transition-all" key={social.label} href={social.link} target="_blank">
                {social.label === "LinkedIn" && <SiLinkedin />}
                {social.label === "GitHub" && <SiGithub />}
                {social.label === "Instagram" && <SiInstagram />}
                {social.label === "X" && <SiX />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
