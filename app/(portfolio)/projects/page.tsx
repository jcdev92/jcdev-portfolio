import { Suspense } from "react";
import PortfolioSection from "./ProjectSection";
import { PrismaClient } from '@prisma/client';
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
            createdAt: false,
            updatedAt: false,
            user_id: false
        }
    });

    return (
      <Suspense fallback={<Loading />}>
        <PortfolioSection projects={projects} />
      </Suspense>
    );
}