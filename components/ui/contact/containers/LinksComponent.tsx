import { IconProps } from "@tabler/icons-react";

interface LinksCompoentProps {
  href: string;
  icon: React.ComponentType<IconProps>; // Define el tipo del icono
}

export default function LinksCompoent({ href, icon: Icon }: LinksCompoentProps) {
  return (
    <a href={href} target="_blank" className="flex items-center hover:text-yellow-300 hover:scale-125 transition-all ease-in-out">
      <Icon size={30} />
    </a>
  );
}
