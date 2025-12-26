import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
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
