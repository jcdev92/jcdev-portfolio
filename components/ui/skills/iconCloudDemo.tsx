import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nestjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background/30 p-5 md:px-20 md:pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
