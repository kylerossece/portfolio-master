'use client';
import React, {useEffect, useState, useRef}  from 'react'
import Image from "next/image";
import styles from '@/assets/css/sections/hero.module.scss';
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import { Container } from '../ui/container';
const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  return (
    <section className={styles.hero}>

        <Container>
            <div className={styles.title}>
                <h1 ref={titleRef}>
                    I'm Kyle <br/> A Front End Developer
                </h1>
            </div>
        </Container>
    </section>
  )
}

export {Hero};