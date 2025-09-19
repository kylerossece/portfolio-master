import {
  IoChevronBackOutline,
  IoChevronForward,
  IoLogoFigma,
} from "react-icons/io5";
import {
  FaVuejs,
  FaReact,
  FaLaravel,
  FaNode,
  FaPhp,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMysql,
  SiNextdotjs,
  SiMongodb,
  SiAdobephotoshop,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

import React from "react";

type IconProps = React.SVGAttributes<SVGElement>;

const Icons = {
  ChevronLeft: IoChevronBackOutline,
  ChevronRight: IoChevronForward,
  Vue: FaVuejs,
  React: FaReact,
  Laravel: FaLaravel,
  Node: FaNode,
  PHP: FaPhp,
  Bootstrap: FaBootstrap,
  MySQL: SiMysql,
  Next: SiNextdotjs,
  MongoDB: SiMongodb,
  Tailwind: RiTailwindCssFill,
  Git: FaGitAlt,
  Photoshop: SiAdobephotoshop,
  Figma: IoLogoFigma,
} as const;

export { Icons, type IconProps };
