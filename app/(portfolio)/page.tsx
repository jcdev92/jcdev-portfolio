import { Suspense } from "react";
import { HeroSection } from "./HeroSection";
import { PrismaClient } from "@prisma/client";
import Loading from "../loading";
import Error from "./error";
import onreset from "@/lib/util";

export default async function Home() {
  const prisma = new PrismaClient();
  let alias = "";

  try {
    const userData = await prisma.user.findFirst({
      select: {
        alias: true,
      },
    });

    alias = userData?.alias || alias;

    return (
      <Suspense fallback={<Loading />}>
        <div className="h-screen mx-auto relative z-10 rounded-md antialiased">
          <HeroSection alias={alias} />
        </div>
      </Suspense>
    );
  } catch (error) {
    return (
      <Suspense fallback={<Loading />}>
        <Error error={error as Error} reset={onreset}/>
      </Suspense>
    );
  }
}
