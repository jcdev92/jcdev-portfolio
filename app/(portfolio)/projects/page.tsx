import { Suspense } from "react";
import PortfolioSection from "./ProjectSection";
import { PrismaClient } from "@prisma/client";
import Loading from "@/app/loading";
const prisma = new PrismaClient();

export default async function Project() {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      cover_image: true,
      categories: true,
      github: true,
      link: true,
      project_skills: {
        select: {
          skill: {
            select: {
              id: true,
              label: true,
            },
          },
        },
      },
      createdAt: false,
      updatedAt: false,
      user_id: false,
    },
  });

  const transformedProjects = projects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    coverImage: project.cover_image, // cover_image -> coverImage
    categories: project.categories,
    github: project.github,
    link: project.link,
    projectSkills: project.project_skills.map(({skill}) => ({
      id: skill.id,
      label: skill.label,
    })),
  }));

  return (
    <Suspense fallback={<Loading />}>
      <PortfolioSection projects={transformedProjects} />
    </Suspense>
  );
}
