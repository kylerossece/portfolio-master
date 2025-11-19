import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "../ui/container";
import styles from "@/assets/css/sections/contact.module.scss";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { TextArea } from "../ui/textarea";
import { Caption, Header, Paragraph } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/links";
const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <div className={styles.contact}>
          <div className={styles.desc}>
            <Caption>Contact</Caption>
            <Header>Let's connect</Header>
            <Paragraph>
              {" "}
              Send me a message through here or visit my personal links below.
            </Paragraph>
            <SocialLinks />
          </div>

          <form
            className={styles.form}
            action="mailto:kylerossprestado@gmail.com"
            method="POST"
          >
            <fieldset className={styles.fieldset}>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" required />

              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" name="subject" required />

              <Label htmlFor="message">Message</Label>
              <TextArea id="message" name="message" required />
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
