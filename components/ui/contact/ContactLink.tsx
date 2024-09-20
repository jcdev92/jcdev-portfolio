import { IconProps } from "@tabler/icons-react";

interface ContactLinkProps {
  href: string;
  icon: React.ComponentType<IconProps>; // Define el tipo del icono
}

export default function ContactLink({ href, icon: Icon }: ContactLinkProps) {
  return (
    <a href={href} target="_blank" className="flex items-center hover:text-yellow-300 hover:scale-125 transition-all ease-in-out">
      <Icon size={30} />
    </a>
  );
}
