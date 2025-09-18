import React from "react";
import { type ComponentProps, type ReactNode } from "react";
import Link from "next/link";
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
    const { className, ref, children, ...restProps } = props;

    return (
      <Link className={className} {...restProps}>
        {children}
      </Link>
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
