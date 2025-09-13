import React from "react";
import { type ComponentProps } from "react";
import styles from "@/assets/css/ui/section.module.scss";
const Section = ({ children, ...props }: ComponentProps<"section">) => {
  return (
    <section className={styles.section} {...props}>
      {children}
    </section>
  );
};

export { Section };
