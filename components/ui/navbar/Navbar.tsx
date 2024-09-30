"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/navbar/floating-dock";
import {
  IconHome,
  IconInfoCircleFilled,
  IconBriefcaseFilled,
  IconCode,
} from "@tabler/icons-react";
import ShineBorder from "@/components/ui/effects/shine-border";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Who is JC DEV?",
      icon: (
        <IconInfoCircleFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/skills",
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcaseFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
  ];
  return (
    <div className="sticky bottom-0 z-20 p-10 flex items-center justify-center w-full">
      <FloatingDock items={links} desktopClassName="md:hidden" mobileClassName="bg-transparent"/>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={2} className="hidden md:flex md:rounded-lg">
          <FloatingDock items={links} desktopClassName="bg-secondary/20 w-full flex justify-center rounded-md backdrop-blur-sm" mobileClassName="hidden"/>
        </ShineBorder>
      </div>
  );
}
