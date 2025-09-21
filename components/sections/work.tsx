"use client";
import React, { useRef } from "react";

import { Section } from "../ui/section";
import { Container } from "@/components/ui/container";
import { Carousel } from "@/components/sections/carousel";
import { Caption, Header } from "@/components/ui/typography";
import styles from "@/assets/css/sections/work.module.scss";
const Work = () => {
  const sectionRef = useRef(null);
  return (
    <Section ref={sectionRef} id="work">
      <Container>
        <div className={styles.title}>
          <Caption>Works</Caption>
          <Header>Get a glimpse of my works</Header>
        </div>
        <Carousel sectionRef={sectionRef} />
      </Container>
    </Section>
  );
};

export { Work };
