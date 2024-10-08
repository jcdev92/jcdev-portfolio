import IconCloud from "@/components/ui/icons/icon-cloud";
import { skill } from "@/lib/types";

interface SkillsProps {
  skills: skill[]
}

export default function SkillsSection({skills}: SkillsProps) {

  const slugs: string[] = skills?.map(({label}) => {
    return label
  }) || [];
  
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="relative flex flex-col w-full items-center justify-center overflow-hidden rounded-lg bg-background/30 px-5">
        <h1 className="p-10 lg:p-0 text-center text-5xl md:text-6xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-indigo-900">
          SKILLS
        </h1>
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
}
