import React from "react";
import { type ComponentProps, type ReactNode } from "react";

import styles from "@/assets/css/ui/button.module.scss";
import clsx from "clsx";
type ButtonProps = (
  | (ComponentProps<"button"> & {
      as?: "button";
      type: "button" | "submit" | "reset";
    })
  | (ComponentProps<"a"> & {
      as: "link";
      href: string;
    })
) & {
  children: ReactNode;
  variant?: "green" | "ghost-green";
  size?: "sm" | "md" | "lg";
};

const Button = (props: ButtonProps) => {
  if (props.as === "link") {
    const { size, variant, className, ref, href, children, ...restProps } =
      props;
    const variantClass = variant ? styles[`${variant}`] : "";
    const sizeClass = size ? styles[`${size}`] : "";

    const linkClass = clsx(styles.button, variantClass, sizeClass, className);
    return (
      <a className={linkClass} {...restProps} href={href} target="_blank">
        {children}
      </a>
    );
  }
  const { size, variant, className, ref, children, ...restProps } = props;
  const variantClass = variant ? styles[`${variant}`] : "";
  const sizeClass = size ? styles[`${size}`] : "";

  const buttonClass = clsx(styles.button, variantClass, sizeClass, className);
  return (
    <button className={buttonClass} {...restProps} ref={ref}>
      {children}
    </button>
  );
};

export { Button };
