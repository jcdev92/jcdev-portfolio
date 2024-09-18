"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/navbar/floating-dock";
import {
  IconHome,
  IconInfoCircleFilled,
  IconId,
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
      title: "Contact",
      icon: (
        <IconId className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    }
  ];
  return (
    <div className="sticky bottom-0 reltive z-20 p-10 flex items-center justify-center w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
