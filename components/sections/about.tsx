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
            <Paragraph className={styles.paragraph}>
              {" "}
              I graduated with an Electronics Engineering degree but failed the
              board exam. Struggling to find work, I've decided to enroll in a
              coding bootcamp in Zuitt and Uplift Code Camp where I learned
              Full-stack development with React and Node. There I was able to
              find my passion programming, building websites from scratch and
              learning to have fun in fixing bugs in my code.
            </Paragraph>
            <Paragraph className={styles.paragraph}>
              {" "}
              I'm now currently working as a Junior Front-end Developer in
              JK2L2, provider of Surf2Sawa which is the prepaid plan of Converge
              ICT where I develop internal dashboards, public domain websites
              such as surf2sawa.com and chat.s2s.ph, and websites for their
              compartners like Sky Cable and PC Fiber.
            </Paragraph>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { About };
