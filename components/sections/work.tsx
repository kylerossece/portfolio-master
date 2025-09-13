"use client";
import React, { useRef } from "react";

import { Section } from "../ui/section";
import { Container } from "../ui/container";
import { Carousel } from "./carousel";

const Work = () => {
  const sectionRef = useRef(null);
  return (
    <Section ref={sectionRef}>
      <Container></Container>
      <Carousel sectionRef={sectionRef} />
    </Section>
  );
};

export { Work };
