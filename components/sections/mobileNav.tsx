import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import styles from "@/assets/css/sections/mobileNav.module.scss";
import clsx from "clsx";

type NavLink = {
  readonly label: string;
  readonly href: string;
};

type MobileNavProps = {
  links: readonly NavLink[];
  className?: string;
  handleNav: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    link: NavLink
  ) => void;
};

const MobileNav = ({ links, className, handleNav }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      {/* @ts-ignore */}
      <PopoverTrigger asChild>
        <button type="button" className={styles.buttonPopover}>
          <div className={styles.buttonContainer}>
            <span
              className={clsx(
                styles.buttonNav,
                isOpen ? styles.rotate : styles.topOne
              )}
            ></span>
            <span
              className={clsx(
                styles.buttonNav,
                isOpen ? styles.reverseRotate : styles.topThree
              )}
            ></span>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        side="bottom"
        sideOffset={18}
        alignOffset={-8}
      >
        <nav className={styles.mobileNav}>
          {links.map((link) => (
            <button
              key={link.href}
              className={styles.navLink}
              onClick={(e) => handleNav(e, link)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  );
};

export { MobileNav };
