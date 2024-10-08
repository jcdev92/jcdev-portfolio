import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { fetchSimpleIcons, SimpleIcon } from "react-icon-cloud";
import { renderCustomIcon } from "./icon-cloud"; 

export type SkillIconsProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function SkillIcons({ iconSlugs }: SkillIconsProps) {
  const [data, setData] = useState<IconData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoading(true);
    fetchSimpleIcons({ slugs: iconSlugs }).then((fetchedData) => {
      setData(fetchedData);
      setIsLoading(false);
    });
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon: SimpleIcon) =>
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme]);

  if (isLoading) {
    return <div>Loading icons...</div>;
  }

  return <div className="flex space-x-2">{renderedIcons}</div>;
}
