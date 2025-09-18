"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "@/assets/css/sections/hero.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Preloader } from "../Preloader";
import { Container } from "../ui/container";
import { Background } from "../Background";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const [preloader, setPreloader] = useState(false);

  const handlePreloaderComplete = () => {
    setPreloader(true);
  };

  useGSAP(() => {
    if (!preloader) return;

    gsap.registerPlugin(ScrollTrigger, SplitText);

    const titleEl = titleTextRef.current;
    if (!titleEl) return;

    titleEl.style.opacity = "1";

    const splitText = new SplitText(titleEl, {
      type: "words, lines",
      linesClass: styles.linesClass,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleEl,
        toggleActions: "restart pause resume reverse",
        start: "top 80%",
      },
    });

    tl.from(splitText.words, {
      duration: 0.4,
      autoAlpha: 0,
      y: 120,
      ease: "power1.out",
      stagger: 0.08,
    });

    gsap.to(`.${styles.title}`, {
      scale: 0.8,
      scrollTrigger: {
        trigger: fakeContainer.current,
        scrub: true,
        start: "top top",
        end: "bottom top",
      },
    });

    ScrollTrigger.refresh();

    return () => {
      splitText.revert();
      tl.kill();
    };
  }, [preloader]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const titleTextRef = useRef<HTMLHeadingElement | null>(null);
  const fakeContainer = useRef<HTMLDivElement>(null);
  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <section className={styles.hero} ref={sectionRef}>
        <Background />
        <Container>
          <div className={styles.title} ref={titleRef}>
            <h1 ref={titleTextRef} className={styles.titleText}>
              Kyle Prestado <br /> Front End Developer
            </h1>
            <div>
              <Button type="button" variant="green" size="lg">
                Visit Github
              </Button>
              <Button type="button" variant="ghost-green" size="lg">
                View Resume
              </Button>
            </div>
          </div>
        </Container>
        <div className={styles.fakeContainer} ref={fakeContainer}></div>
      </section>
    </>
  );
};

export { Hero };
