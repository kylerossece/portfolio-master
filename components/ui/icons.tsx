import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import React from "react";

type IconProps = React.SVGAttributes<SVGElement>;

const Icons = {
  ChevronLeft: IoChevronBackOutline,
  ChevronRight: IoChevronForward,
} as const;

export { Icons, type IconProps };
