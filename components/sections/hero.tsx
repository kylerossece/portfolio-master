"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "@/assets/css/sections/hero.module.scss";
import { useGSAP } from "@gsap/react";
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

  useGSAP(() => {}, [preloader]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <section className={styles.hero}>
        <Background />
        <Container>
          <div className={styles.title}>
            <h1 ref={titleRef} className={styles.titleText}>
              Kyle Prestado <br /> Front End Developer
            </h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export { Hero };
