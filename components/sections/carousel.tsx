"use client";
import React, { RefObject, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { Pagination, FreeMode } from "swiper/modules";
import { SwiperData } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { SplitText } from "gsap/SplitText";
import styles from "@/assets/css/sections/carousel.module.scss";

import { Paragraph } from "@/components/ui/typography";

type CarouselProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

const Carousel = ({ sectionRef }: CarouselProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const scrollPreviousSlide = () => {
    swiperRef.current?.slidePrev();
  };
  const scrollNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    const slides = document.querySelectorAll(`.${styles.swiperSlide}`);

    slides.forEach((slide) => {
      const text = slide.querySelector(`.${styles.swiperText}`);
      if (!text) return;

      gsap.set(text, { opacity: 1 });

      const split = new SplitText(text, {
        type: "words, chars",
      });

      const tl = gsap.timeline({ paused: true });

      tl.from(split.words, {
        duration: 0.4,
        opacity: 0,
        y: 120,
        ease: "power1.out",
      });

      const image = slide.querySelector(`.${styles.swiperImage}`);
      if (image) {
        tl.to(
          image,
          {
            duration: 0.4,
            opacity: 0.3,
            ease: "power1.out",
          },
          0
        );
      }

      slide.addEventListener("mouseenter", () => tl.play());
      slide.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);
  return (
    <Swiper
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      touchEventsTarget={"container"}
      slidesPerView="auto"
      spaceBetween={30}
      slidesOffsetAfter={30}
      slidesOffsetBefore={30}
      freeMode={true}
      modules={[FreeMode]}
    >
      {SwiperData &&
        SwiperData.length &&
        SwiperData.map((item) => {
          return (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              <Link
                href={`project/${item.link}`}
                className={styles.swiperContainer}
              >
                <Image
                  className={styles.swiperImage}
                  src={item.image}
                  width={400}
                  height={500}
                  alt={item.title}
                ></Image>
                <div className={styles.swiperText}>
                  <h1>{item.title}</h1>
                  <Paragraph>{item.description}</Paragraph>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      <button
        type="button"
        onClick={scrollPreviousSlide}
        className={clsx(styles.button, styles.left)}
      >
        <Icons.ChevronLeft />
      </button>
      <button
        type="button"
        onClick={scrollNextSlide}
        className={clsx(styles.button, styles.right)}
      >
        <Icons.ChevronRight />
      </button>
    </Swiper>
  );
};

export { Carousel };
