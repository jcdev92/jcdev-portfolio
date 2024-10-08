import { Suspense } from "react";
import SkillsSection from "./SkillsSection";
import { PrismaClient } from "@prisma/client";
import Loading from "@/app/loading";
const prisma = new PrismaClient();

export default async function Skills() {
  const skills = await prisma.skill.findMany({
    select: {
      id: true,
      label: true,
    },
  });

  return (
    <Suspense fallback={<Loading />}>
      <SkillsSection skills={skills} />
    </Suspense>
  );
}
