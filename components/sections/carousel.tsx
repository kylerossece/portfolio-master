"use client";
import React, { RefObject, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { Pagination, FreeMode } from "swiper/modules";
import Link from "next/link";
// import Image from "next/image";
import { Icons } from "../ui/icons";
import styles from "@/assets/css/sections/projects.module.scss";
import { Container } from "../ui/container";

type CarouselProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

const Carousel = ({ sectionRef }: CarouselProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const scrollPreviousSlide = () => {
    swiperRef.current?.slidePrev();
  };
  const scrollNextSlide = () => {
    swiperRef.current?.slideNext();
  };
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
      {[...Array(10).keys()].map((item, index) => {
        return (
          <SwiperSlide key={index} className={styles.swiperSlide}>
  
            <img src="http://picsum.photos/200/300" width="400" height="500" />

          </SwiperSlide>
        );
      })}
      <button type="button" onClick={scrollPreviousSlide} className={clsx(styles.button, styles.left)}>
        <Icons.ChevronLeft />
      </button>
      <button type="button" onClick={scrollNextSlide} className={clsx(styles.button, styles.right)}>
        <Icons.ChevronRight />
      </button>
    </Swiper>
  );
};

export { Carousel };
