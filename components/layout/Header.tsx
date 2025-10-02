"use client";
import React from "react";
import { Container } from "@/components/ui/container";
import { useScrollNav } from "@/hooks/use-scroll-nav";
import clsx from "clsx";
import styles from "@/assets/css/layout/header.module.scss";
import { MobileNav } from "@/components/sections/mobileNav";

const Header = () => {
  const { isScrolled } = useScrollNav();

  const links = [
    {
      label: "About",
      href: "/#about",
    },
    {
      label: "Works",
      href: "/#work",
    },
    {
      label: "Skills",
      href: "/#skills",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ] as const;

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    link: {
      label: string;
      href: string;
    }
  ) => {
    e.preventDefault();
    const targetId = link.href.replace("/#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <div>
              <a href="/" className={styles.logo}>
                {" "}
                KP
              </a>
            </div>
            <div className={styles.mobileNav}>
              <MobileNav links={links} handleNav={handleNav} />
            </div>

            <nav aria-label="Primary" className={styles.nav}>
              {links.map((link) => (
                <button key={link.href} onClick={(e) => handleNav(e, link)}>
                  <a className={styles.navLink}>{link.label}</a>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export { Header };
