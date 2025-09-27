"use client";
import { type ComponentProps } from "react";
import styles from "@/assets/css/ui/typography.module.scss";
import clsx from "clsx";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const Caption = ({ children, className, ...props }: ComponentProps<"p">) => {
  return (
    <p className={clsx(styles.caption)} {...props}>
      {children}
    </p>
  );
};

const Header = ({ children, className, ...props }: ComponentProps<"h2">) => {
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    if (headerRef.current) {
      headerRef.current.style.opacity = 1;
      const splitText = new SplitText(headerRef.current, {
        type: "words, chars",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          toggleActions: "restart pause resume reverse",
          start: "top 90%",
        },
      });

      tl.from(splitText.chars, {
        duration: 0.4,
        opacity: 0,
        y: 120,
        ease: "power1.out",
        stagger: 0.01,
        onComplete: () => {
          headerRef.current.classList.add(`animated`);
        },
      });
    }
  });
  return (
    <h2 className={clsx(styles.header)} ref={headerRef} {...props}>
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
