import { Suspense } from "react";
import AboutSection from "./AboutSection";
import { PrismaClient } from "@prisma/client";
import Loading from "@/app/loading";
const prisma = new PrismaClient();

export default async function About() {
  const aboutData = await prisma.user.findFirst({
    select: {
      alias: true,
      slogan: true,
      about_me: true,
      about_list: {
        select: {
          title: true,
          description: true,
          icon: true,
        },
      },
    },
  });

  const profile = await prisma.user.findFirst({
    select: {
      first_name: true,
      last_name: true,
      alias: true,
      job_title: true,
      city: true,
      country: true,
      birth_day: true,
      gender: true,
      phone: true,
      email: true,
    },
  });

  const socials = await prisma.social.findMany({
    select: {
      id: true,
      label: true,
      link: true,
    },
  });

  const mappedAboutData = aboutData
    ? {
        alias: aboutData.alias,
        slogan: aboutData.slogan,
        aboutMe: aboutData.about_me,
        aboutList: aboutData.about_list.map(({title, description, icon}) => ({
          title,
          description,
          icon,
        })),
      }
    : null;

  const mappedProfile = profile
    ? {
        firstName: profile.first_name,
        lastName: profile.last_name,
        alias: profile.alias,
        jobTitle: profile.job_title,
        city: profile.city,
        country: profile.country,
        birthDay: profile.birth_day,
        gender: profile.gender,
        phone: profile.phone,
        email: profile.email,
      }
    : null;
    

  return (
    <Suspense fallback={<Loading />}>
      <AboutSection aboutData={mappedAboutData} profile={mappedProfile} socials={socials} />
    </Suspense>
  );
}
