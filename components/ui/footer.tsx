import React from "react";
import { type ComponentProps } from "react";
import styles from "@/assets/css/ui/footer.module.scss"
const Footer = ({ children, ...props }: ComponentProps<"section">) => {
  return (
    <footer className={styles.footer} {...props}>
      {children}
    </footer>
  );
};

export { Footer };
