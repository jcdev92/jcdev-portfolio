"use client"
import React from "react";
import { FloatingDock } from "@/components/aceternityui/floating-dock";
import {
  IconHome,
  IconInfoCircleFilled,
  IconBriefcaseFilled,
  IconCode,
} from "@tabler/icons-react";

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
      <FloatingDock
        items={links}
      />
    </div>
  );
}
