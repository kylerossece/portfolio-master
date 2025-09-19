import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "../ui/container";
import styles from "@/assets/css/sections/contact.module.scss";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { TextArea } from "../ui/textarea";
import { Caption, Header, Paragraph } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return (
    <Section>
      <Container>
        <div className={styles.contact}>
          <div className={styles.desc}>
            <Caption>Contact</Caption>
            <Header>Let's connect</Header>
            <Paragraph>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Paragraph>
          </div>

          <form className={styles.form}>
            <fieldset className={styles.fieldset}>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" />
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" />
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" />
            </fieldset>
            <div className={styles.submit}>
              <Button type="submit" variant="green" size="md">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export { Contact };
