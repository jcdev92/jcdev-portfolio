"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/navbar/floating-dock";
import {
  IconHome,
  IconTextCaption
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
        <IconTextCaption className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
  ];
  return (
    <div className="sticky bottom-0 z-50 p-10 flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
