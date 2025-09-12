import React from "react";
import { type ComponentProps, type ReactNode } from "react";
import Link from "next/link";
type ButtonProps = (
  | (ComponentProps<"button"> & {
      as?: "button";
      type: "button" | "submit" | "reset";
    })
  | (ComponentProps<"a"> & {
      as: "link";
      href: string;
    })
) & { children: ReactNode };

const Button = (props: ButtonProps) => {
  if (props.as === "link") {
    const { className, ref, children, ...restProps } = props;
    return (
      <Link className={className} {...restProps}>
        {children}
      </Link>
    );
  }
  const { className, ref, children, ...restProps } = props;
  return (
    <button className={className} {...restProps} ref={ref}>
      {children}
    </button>
  );
};

export default { Button };
