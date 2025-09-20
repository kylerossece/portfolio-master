import React from "react";
import styles from "@/assets/css/ui/container.module.scss";
import { type ComponentProps } from "react";
import clsx from "clsx";
const Container = ({
  ref,
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div ref={ref} className={clsx(styles.container, className)} {...props}>
      {children}
    </div>
  );
};

export { Container };
