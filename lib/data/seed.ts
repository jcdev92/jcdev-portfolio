import { profile } from "./data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedData() {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: profile.email },
    });

    if (existingUser) {
      console.log("User already exists");
      return;
    }

    const user = await prisma.user.create({
      data: {
        first_name: profile.firstName,
        last_name: profile.lastName,
        alias: profile.alias,
        email: profile.email,
        phone: profile.phone,
        birth_day: profile.birthDay,
        gender: profile.gender,
        city: profile.city,
        country: profile.country,
        profile_img: profile.profileImg,
        job_title: profile.jobTitle,
        about_me: profile.aboutMe,
        slogan: profile.slogan,
      },
    });

    const aboutListPromises = profile.aboutList.map(async (item) => {
      return await prisma.aboutList.create({
        data: {
          title: item.title,
          description: item.description,
          icon: item.icon,
          user_id: user.id,
        },
      });
    });

    await Promise.all(aboutListPromises);

    const socialsPromises = profile.socials.map(async (social) => {
      return await prisma.social.create({
        data: {
          label: social.label,
          link: social.link,
          user_id: user.id,
        },
      });
    });
    await Promise.all(socialsPromises);

    const skillsPromises = profile.skills.map(async (skill) => {
      let foundSkill = await prisma.skill.findFirst({
        where: { label: skill.label },
      });

      if (!foundSkill) {
        foundSkill = await prisma.skill.create({
          data: {
            label: skill.label,
            user_id: user.id,
          },
        });
      }

      return foundSkill;
    });
    await Promise.all(skillsPromises);

    const projectsPromises = profile.projects.map(async (project) => {
      try {
        const createdProject = await prisma.project.create({
          data: {
            title: project.title,
            description: project.description,
            categories: project.categories,
            cover_image: project.coverImage,
            link: project.link,
            github: project.github,
            user_id: user.id,
          },
        });

        const projectSkillsPromises = project.projectSkills.map(
          async ({ skill }) => {
            let foundSkill = await prisma.skill.findFirst({
              where: { label: skill.label },
            });

            if (!foundSkill) {
              foundSkill = await prisma.skill.create({
                data: {
                  label: skill.label,
                  user_id: user.id,
                },
              });
            }

            console.log(
              `Creating relation between Project: ${createdProject.title} and Skill: ${foundSkill.label}`,
            );

            return await prisma.projectSkill.create({
              data: {
                project_id: createdProject.id,
                skill_id: foundSkill.id,
              },
            });
          },
        );
        await Promise.all(projectSkillsPromises);
      } catch (error) {
        console.error(`Error creating project: ${project.title}`, error);
      }
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
