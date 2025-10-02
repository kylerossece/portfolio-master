import React from "react";
import { footer as FooterContainer } from "@/components/ui/footer";
import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/typography";
import styles from "@/assets/css/layout/footer.module.scss";
const Footer = () => {
  return (
    <FooterContainer>
      <Container className={styles.footerContainer}>
        <Paragraph>© Kyle Ross Prestado</Paragraph>
        <Paragraph>Built with Next.js and GSAP</Paragraph>
      </Container>
    </FooterContainer>
  );
};

export { Footer };
