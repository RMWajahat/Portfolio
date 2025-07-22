import { LucideIcon, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  hoverColor: string;
}

export interface NavigationLink {
  label: string;
  sectionId: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-wajahat-hussain-0b5177225/",
    icon: Linkedin,
    hoverColor: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    url: "https://github.com/RMWajahat",
    icon: Github,
    hoverColor: "hover:text-gray-300",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/web_habibi",
    icon: Instagram,
    hoverColor: "hover:text-pink-400",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+923463336286",
    icon: MessageCircle,
    hoverColor: "hover:text-green-400",
  },
];

export const navigationLinks: NavigationLink[] = [
  {
    label: "Projects",
    sectionId: "projects-section",
  },
  {
    label: "Certs",
    sectionId: "certifications-section",
  },
  {
    label: "Contact",
    sectionId: "contactme-section",
  },
];
