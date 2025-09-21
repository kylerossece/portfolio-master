import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Caption, Paragraph, Header } from "@/components/ui/typography";
import Image from "next/image";
import styles from "@/assets/css/sections/about.module.scss";
import Profile from "@/assets/image/profile.jpg";
const About = () => {
  return (
    <Section id="about">
      <Container>
        <div className={styles.about}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={Profile}
              alt="Profile Picture"
            />
          </div>
          <div className={styles.textContainer}>
            <Caption>About</Caption>
            <Header>My story</Header>
            <Paragraph>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It w
            </Paragraph>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { About };
