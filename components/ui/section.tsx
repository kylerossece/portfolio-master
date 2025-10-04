import React from "react";
import { type ComponentProps } from "react";
import styles from "@/assets/css/ui/section.module.scss";
import clsx from "clsx";
const Section = ({
  id,
  className,
  children,
  ...props
}: ComponentProps<"section">) => {
  return (
    <section id={id} className={clsx(styles.section, className)} {...props}>
      {children}
    </section>
  );
};

export { Section };
