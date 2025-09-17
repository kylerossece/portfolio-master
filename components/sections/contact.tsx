import React from 'react'
import { Section} from '@/components/ui/section'
import { Container } from '../ui/container'
import styles from "@/assets/css/sections/contact.module.scss";
import { Input } from '../ui/input';
import {Label} from "../ui/label"
import {TextArea} from "../ui/textarea"
import {Caption, Header} from "@/components/ui/typography"
const Contact = () => {
  return (
   <Section>
        <Container>
            <div className={styles.contact}>
              <div className={styles.desc}>
                  <Caption>Contact</Caption>
                  <Header>Let's connect</Header>
              </div>
            
              <form className={styles.form} > 
                <fieldset className={styles.fieldset}>
                  <Label htmlFor='email'>Email</Label>
                  <Input type='email' id="email" />
                  <Label htmlFor='subject'>Subject</Label>
                  <Input type='text' id="subject" />
                  <Label htmlFor='message'>Message</Label>
                  <TextArea id="message" />
                </fieldset>
              </form>
       
            </div>
        </Container>
   </Section>
  )
}

export {Contact}