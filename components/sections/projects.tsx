import React from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
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
  index: number;
  currentIndex: number;
  isDisabled: boolean;
  isDragging: boolean;
  carouselWidth: number;
  scrollPosition: number;
}) => {
  const slideRef = useRef<ComponentRef<"li">>(null);

  const [slideOffsetLeft, setSlideOffsetLeft] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [imagePosition, setImagePosition] = useState("0%");

  useEffect(() => {
    const inputStart = slideOffsetLeft + slideWidth;
    const inputEnd = slideOffsetLeft - carouselWidth;
    const clampedPosition = gsap.utils.clamp(
      0,
      100,
      gsap.utils.mapRange(inputStart, inputEnd, 0, 100, scrollPosition)
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
        <Image src="https://placehold.co/600x400" alt="Image"></Image>
      </a>
    </li>
  );
};

const Projects = () => {
  return <div></div>;
};

export { Projects };
