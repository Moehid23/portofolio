import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const socialLinks = [
  { icon: Github, href: "https://github.com/Moehid23", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdul-muhid-muhthado-964b951a3/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/abdullmoehid_/", label: "Instagram" },
  { icon: Mail, href: "mailto:muthadoabdul23@gmail.com", label: "Email" },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <Button
          key={link.label}
          variant="ghost"
          size="icon"
          asChild
          className="hover:scale-110 transition-transform"
        >
          <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            <link.icon className="h-5 w-5" />
          </Link>
        </Button>
      ))}
    </div>
  );
}
