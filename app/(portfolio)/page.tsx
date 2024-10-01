import { HeroSection } from "./HeroSection";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function Home() {
  
  const userData = await prisma.user.findFirst({
    select: {
      alias: true,
    },
  });

  const alias = userData?.alias || 'Default Alias';

  return (
    <div className="h-screen mx-auto relative z-10 rounded-md antialiased">
        <HeroSection alias={alias}/>
    </div>
  );
}