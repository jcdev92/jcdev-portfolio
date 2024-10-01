import SkillsSection from "./SkillsSection";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function Skills() {
    const skills = await prisma.skill.findMany({
        select: {
            label: true
        }
    });

    return (
        <SkillsSection skills={skills} />
    )
}