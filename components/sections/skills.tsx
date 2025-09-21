import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Caption, Header, Paragraph } from "@/components/ui/typography";
import { Icons } from "@/components/ui/icons";
import styles from "@/assets/css/sections/skills.module.scss";

const Skills = () => {
  const IconList = [
    {
      id: 1,
      icon: "Vue",
    },
    {
      id: 2,
      icon: "React",
    },
    {
      id: 3,
      icon: "Node",
    },
    {
      id: 4,
      icon: "Next",
    },
    {
      id: 5,
      icon: "PHP",
    },
    {
      id: 6,
      icon: "Laravel",
    },
    {
      id: 7,
      icon: "MySQL",
    },
    {
      id: 8,
      icon: "MongoDB",
    },
    {
      id: 9,
      icon: "Tailwind",
    },
    {
      id: 10,
      icon: "Bootstrap",
    },
    {
      id: 11,
      icon: "Photoshop",
    },
    {
      id: 12,
      icon: "Figma",
    },
  ] as const;
  return (
    <Section id="skills">
      <Container>
        <div className={styles.skills}>
          <Caption>Skills & Experience</Caption>
          <Header>Technologies I'm using</Header>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It w
          </Paragraph>
          <div className={styles.skillsContainer}>
            {IconList.map((item) => {
              const IconComponent = Icons[item.icon as keyof typeof Icons];
              return (
                <p key={item.id} className={styles.skillsIcon}>
                  <IconComponent />
                  <span>{item.icon}</span>
                </p>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { Skills };
