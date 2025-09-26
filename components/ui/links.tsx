import React from "react";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import styles from "@/assets/css/ui/links.module.scss";

type SocialKey = "Linkedin" | "Github" | "Mail";

const UrlLinks: Record<SocialKey, string> = {
  Linkedin: "https://www.linkedin.com/in/kyle-ross-prestado",
  Github: "https://github.com/kylerossece",
  Mail: "https://mail.google.com/mail/?view=cm&fs=1&to=kylerossprestado@gmail.com",
};

const IconLinks: Record<SocialKey, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Linkedin: Icons.LinkedIn,
  Github: Icons.Github,
  Mail: Icons.Mail,
};

const SocialLinks = () => {
  return (
    <ul className={styles.link}>
      {Object.entries(UrlLinks).map(([item, value], index) => {
        const key = item as SocialKey;
        const IconComponent = IconLinks[key];
        return (
          <li key={index} className={styles.icon}>
            <Link href={value} target="_blank" rel="noopener noreferrer">
              <IconComponent />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { SocialLinks };
