"use client";
import React, { RefObject, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
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
// breakpoints={{
//     768: {
//       slidesPerView: 1.8,
//       spaceBetween: 60,
//       slidesOffsetAfter: 60,
//       slidesOffsetBefore: 60,
//     },
//     992: {
//       slidesPerView: 2.5,
//       spaceBetween: 60,
//       slidesOffsetAfter: 60,
//       slidesOffsetBefore: 60,
//     },
//     1600: {
//       slidesPerView: "auto",
//       spaceBetween: 90,
//       slidesOffsetAfter: 90,
//       slidesOffsetBefore: 90,
//     },
//   }}
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
      spaceBetween={0}
      slidesOffsetAfter={0}
      slidesOffsetBefore={0}
      freeMode={true}
      modules={[FreeMode]}
    >
      {[...Array(10).keys()].map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <img src="http://picsum.photos/200/300" />
          </SwiperSlide>
        );
      })}
      <button type="button" onClick={scrollPreviousSlide}>
        <Icons.ChevronLeft />
      </button>
      <button type="button" onClick={scrollNextSlide}>
        <Icons.ChevronRight />
      </button>
    </Swiper>
  );
};

export { Carousel };
