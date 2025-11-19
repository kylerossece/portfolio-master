"use client";
import React, { useRef } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Caption, Header, Paragraph } from "@/components/ui/typography";
import { Icons } from "@/components/ui/icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/assets/css/sections/skills.module.scss";

const Skills = () => {
  const skillsContainerRef = useRef(null);
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

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const skills = document.querySelectorAll(`.${styles.skillsIcon}`);
    if (skillsContainerRef.current) {
      // @ts-ignore
      skillsContainerRef.current.style.opacity = "1";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsContainerRef.current,
          toggleActions: "restart pause resume reverse",
          start: "top 90%",
        },
      });

      tl.from(skills, {
        duration: 0.4,
        opacity: 0,
        delay: 0.4,
        y: 120,
        ease: "power1.out",
        stagger: 0.1,
        // onComplete: () => {
        //   skillsContainerRef.current?.classList.add(`animated`);
        // }
      });
    }
  });
  return (
    <Section id="skills">
      <Container>
        <div className={styles.skills}>
          <Caption>Skills & Experience</Caption>
          <Header>Technologies I'm using</Header>
          <Paragraph>
            I'm fond of learning anything to enhance my Front-end development
            skills from performance improvement to animation. Right now, these
            are the technologies I'm comfortable working with.
          </Paragraph>
          <div className={styles.skillsContainer} ref={skillsContainerRef}>
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
