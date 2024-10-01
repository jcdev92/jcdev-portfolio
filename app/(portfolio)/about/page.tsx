import AboutSection  from "./AboutSection"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function About() {
  const userData = await prisma.user.findFirst({
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
      }
    },
  });

  const alias = userData?.alias || 'Default Alias';
  const slogan = userData?.slogan || 'Default Slogan';
  const aboutMe = userData?.about_me || 'Default About Me';
  const aboutList = userData?.about_list || [];

  return <AboutSection alias={alias} slogan={slogan} aboutMe={aboutMe} aboutList={aboutList}/>
}
