import React from "react";
import { type ComponentProps } from "react";
import styles from "@/assets/css/ui/footer.module.scss";
import clsx from "clsx";
const footer = ({
  className,
  children,
  ...props
}: ComponentProps<"footer">) => {
  return (
    <footer className={clsx(styles.footer, className)} {...props}>
      {children}
    </footer>
  );
};

export { footer };
