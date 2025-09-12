"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "@/assets/css/preloader.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrambleTextPlugin);
      if (!container.current) return;

      const tl = gsap.timeline();
      const tl2 = gsap.timeline();

      tl.to(
        `.${styles.progress}`,
        {
          duration: 0.8,
          scrambleText: {
            text: "Kyle Prestado Portfolio",
            revealDelay: 0.1,
            oldClass: `${styles.old}`,
          },
          onComplete: () => {
            tl2.to(container.current, {
              yPercent: -100,
              duration: 0.8,
              ease: "sine.out",
              onUpdate: () => {
                if (tl2.progress() >= 0.4) {
                  onComplete();
                }
              },
            });
          },
        },
        0
      );
    },
    {
      scope: container,
    }
  );

  return (
    <div className={styles.preloader} ref={container}>
      <div className={styles.progress}></div>
    </div>
  );
};

export { Preloader };
