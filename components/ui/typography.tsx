import { type ComponentProps } from "react";
import styles from "@/assets/css/ui/typography.module.scss";
import clsx from "clsx";

const Caption = ({ children, className, ...props }: ComponentProps<"p">) => {
  return (
    <p className={clsx(styles.caption)} {...props}>
      {children}
    </p>
  );
};

const Header = ({ children, className, ...props }: ComponentProps<"h2">) => {
  return (
    <h2 className={clsx(styles.header)} {...props}>
      {children}
    </h2>
  );
};

const Paragraph = ({ children, className, ...props }: ComponentProps<"p">) => {
  return (
    <p className={clsx(styles.paragraph)} {...props}>
      {children}
    </p>
  );
};

export { Caption, Header, Paragraph };
