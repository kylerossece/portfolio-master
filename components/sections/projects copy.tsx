  "use client";
import React, { use } from "react";
import gsap from "gsap";
import Link from "next/link";
// import Image from "next/image";
import { Icons } from "../ui/icons";
import styles from "@/assets/css/sections/projects.module.scss";
import {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentRef,
  type Dispatch,
  type MouseEvent,
  type SetStateAction,
  type UIEvent,
} from "react";

const ProjectCard = ({
  index,
  currentIndex,
  isDisabled,
  isDragging,
  carouselWidth,
  scrollPosition,
}: {
  index?: number;
  currentIndex?: number;
  isDisabled?: boolean;
  isDragging?: boolean;
  carouselWidth?: number;
  scrollPosition?: number;
}) => {
  const slideRef = useRef<ComponentRef<"li">>(null);

  const [slideOffsetLeft, setSlideOffsetLeft] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [imagePosition, setImagePosition] = useState("0%");

  useEffect(() => {
    const inputStart = slideOffsetLeft + slideWidth;
    const inputEnd = slideOffsetLeft - (carouselWidth || 0);
    const clampedPosition = gsap.utils.clamp(
      0,
      100,
      gsap.utils.mapRange(inputStart, inputEnd, 0, 100, scrollPosition || 0)
    );

    setImagePosition(`${clampedPosition}%`);
  }, [scrollPosition, slideOffsetLeft, slideWidth, carouselWidth]);

  const updateSlideConstraints = useCallback(() => {
    if (!slideRef.current) return;

    setSlideOffsetLeft(slideRef.current.offsetLeft);
    setSlideWidth(slideRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    updateSlideConstraints();

    window.addEventListener("resize", updateSlideConstraints);
    window.addEventListener("orientationchange", updateSlideConstraints);

    return () => {
      window.removeEventListener("resize", updateSlideConstraints);
      window.removeEventListener("orientationchange", updateSlideConstraints);
    };
  }, [updateSlideConstraints]);

  return (
    <li className={styles.card}>
      <a>
        <img src="https://placehold.co/600x400" alt="Image" />
      </a>
    </li>
  );
};

const Projects = () => {
  const CAROUSEL_SLIDES_GAP = 24;
  const carouselWrapperRef = useRef<ComponentRef<"div">>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselSlideWidth, setCarouselSlideWidth] = useState(0);
  const carouselRef = useRef<ComponentRef<"ul">>(null);
  const scrollToSlide = (slideIndex: number) => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollTo({
      left: slideIndex * (carouselSlideWidth + CAROUSEL_SLIDES_GAP),
      behavior: "smooth",
    });
  };

  const scrollToPreviousSlide = () => {
    scrollToSlide(currentSlide - 1);
  };

  const scrollToNextSlide = () => {
    scrollToSlide(currentSlide + 1);
  };

  return (
    <div ref={carouselWrapperRef} className={styles.wrapper}>
      <div className={styles.buttonWrapper}>
        <button type="button" className={styles.button}>
          <Icons.ChevronLeft />
        </button>
        <button type="button" className={styles.button}>
          <Icons.ChevronRight />
        </button>
      </div>
      <div>
        <ul ref={carouselRef}>
          {[...Array(10).keys()].map((_, index) => (
            <ProjectCard key={index} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Projects };
