import IconCloud from "@/components/magicui/icon-cloud";
import { profile } from '@/lib/data/data'

export function IconCloudDemo() {
  const { skills } = profile

  const slugs: string[] = skills?.map(({label}) => {
    return label
  }) || [];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background/30 p-5 md:px-20 md:pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
