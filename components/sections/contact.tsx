import React from 'react'
import { Footer } from '../ui/footer'
import { Container } from '../ui/container'
import styles from "@/assets/css/sections/contact.module.scss";
import { Input } from '../ui/input';
import {Label} from "../ui/label"
import {TextArea} from "../ui/textarea"
const Contact = () => {
  return (
   <Footer>
        <Container>
            <div className={styles.contact}>
              <div className={styles.desc}>
                  <p>Let's connect</p>
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
   </Footer>
  )
}

export {Contact}