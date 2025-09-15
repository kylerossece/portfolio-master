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
const Hero = () => {
  const [preloader, setPreloader] = useState(false);

  const handlePreloaderComplete = () => {
    setPreloader(true);

  };

  useGSAP(() => {
    if(!preloader) return;
    gsap.registerPlugin(ScrollTrigger,SplitText);

    titleTextRef.current!.style.opacity = "1";
    const splitText = new SplitText(titleTextRef.current, {
      type: 'words, lines',
      linesClass: `${styles.linesClass}`
    })

    const tl= gsap.timeline({
      scrollTrigger: {
        trigger: titleTextRef.current,
        toggleActions: "restart pause resume reverse",
        start: "top 90%",
      }
    })

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
            start: 'top top',
            end: 'bottom top',
        }
    });

  }, [preloader]);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const titleTextRef = useRef<HTMLHeadingElement | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const fakeContainer = useRef<HTMLDivElement>(null);
  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <section className={styles.hero}>
        <Background />
        <Container ref={container}>
          <div className={styles.title} ref={titleRef}>
            <h1 ref={titleTextRef} className={styles.titleText}>
              Kyle Prestado <br /> Front End Developer
            </h1>
          </div>
        </Container>
        <div className={styles.fakeContainer} ref={fakeContainer}></div>
      </section>
    </>
  );
};

export { Hero };
