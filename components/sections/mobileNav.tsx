import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import styles from "@/assets/css/sections/mobileNav.module.scss";
import clsx from "clsx";
const MobileNav = ({
  links,
  className,
}: {
  links: readonly {
    readonly label: string;
    readonly href: string;
  }[];
  className?: any;
}) => {
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
    </Popover>
  );
};

export { MobileNav };
