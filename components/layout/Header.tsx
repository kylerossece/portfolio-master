"use client";
import React from "react";
import { Container } from "@/components/ui/container";
import { useScrollNav } from "@/hooks/use-scroll-nav";
import clsx from "clsx";
import styles from "@/assets/css/layout/header.module.scss";

const Header = () => {
  const { isScrolled } = useScrollNav();

  const links = [
    {
      label: "About",
      href: "/#about",
    },
    {
      label: "Work",
      href: "/#work",
    },
    {
      label: "Services",
      href: "/#services",
    },
  ] as const;

  return (
    <header aria-label="Primary" className={styles.header}>
      <Container>
        <div
          className={clsx(
            styles["header-container"],
            isScrolled ? styles["header-bg"] : styles["header-clear"]
          )}
        >
          <div className={styles.navGrid}>
            <nav aria-label="Primary" className={styles.nav}>
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export { Header };
