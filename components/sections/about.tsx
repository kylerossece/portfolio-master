import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Caption, Paragraph, Header } from "@/components/ui/typography";
import styles from "@/assets/css/sections/about.module.scss";

const About = () => {
  return (
    <Section>
      <Container>
        <div className={styles.about}>
          <Caption>About</Caption>
        </div>
      </Container>
    </Section>
  );
};

export { About };
