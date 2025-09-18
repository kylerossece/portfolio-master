import React from "react";
import styles from "@/assets/css/ui/container.module.scss";
import { type ComponentProps } from "react";

const Container = ({
  ref,
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div ref={ref} className={styles.container} {...props}>
      {children}
    </div>
  );
};

export { Container };
