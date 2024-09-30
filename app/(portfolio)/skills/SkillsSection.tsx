import IconCloud from "@/components/ui/icons/icon-cloud";
import { profile } from '@/lib/data/data'

export default function SkillsSection() {
  const { skills } = profile

  const slugs: string[] = skills?.map(({label}) => {
    return label
  }) || [];
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="relative flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background/30 px-5">
        <h1 className="p-10 text-center text-5xl md:text-6xl  font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-indigo-900">
          SKILLS
        </h1>
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
}
