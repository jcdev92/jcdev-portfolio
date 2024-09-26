import { profile } from "./data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedData() {
  try {
    const user = await prisma.user.create({
      data: {
        firstName: profile.firstName,
        lastName: profile.lastName,
        alias: profile.alias,
        email: profile.email,
        phone: profile.phone,
        birthDay: profile.birthDay,
        gender: profile.gender,
        city: profile.city,
        country: profile.country,
        profileImg: profile.profileImg,
        jobTitle: profile.jobTitle,
        aboutMe: profile.aboutMe,
        slogan: profile.slogan,
      },
    });

    const aboutListPromises = profile.aboutList.map(async (item) => {
      return await prisma.aboutList.create({
        data: {
          title: item.title,
          description: item.description,
          icon: item.icon,
          userId: user.id,
        },
      });
    });

    await Promise.all(aboutListPromises);

    const socialsPromises = profile.socials.map(async (social) => {
      return await prisma.social.create({
        data: {
          label: social.label,
          link: social.link,
          userId: user.id,
        },
      });
    });
    await Promise.all(socialsPromises);

    const skillsPromises = profile.skills.map(async (skill) => {
      return await prisma.skill.create({
        data: {
          label: skill.label,
          userId: user.id,
        },
      });
    });
    await Promise.all(skillsPromises);

    const projectsPromises = profile.projects.map(async (project) => {
      const createdProject = await prisma.project.create({
        data: {
          title: project.title,
          description: project.description,
          coverImage: project.coverImage,
          link: project.link,
          github: project.github,
          userId: user.id,
        },
      });

      const projectSkillsPromises = project.projectSkills.map(
        async ({ skill }) => {
          const foundSkill = await prisma.skill.findFirst({
            where: { label: skill.label },
          });
          if (!foundSkill) return;

          return await prisma.projectSkill.create({
            data: {
              projectId: createdProject.id,
              skillId: foundSkill.id,
            },
          });
        }
      );

      await Promise.all(projectSkillsPromises);
    });

    await Promise.all(projectsPromises);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData()
  .then(() => {
    console.log("Data seeded successfully!");
  })
  .catch((error) => {
    console.error("Error seeding data:", error);
  });
