import React from "react";
import { Popover as PopoverPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import styles from "@/assets/css/ui/popover.module.scss";
import clsx from "clsx";
const Popover = ({
  ...props
}: ComponentProps<typeof PopoverPrimitive.Root>) => {
  return <PopoverPrimitive.Root {...props} />;
};

const PopoverTrigger = ({
  ...props
}: ComponentProps<typeof PopoverPrimitive.Root>) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
};

const PopoverContent = ({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Content>) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={clsx(styles.popoverContent, className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
};

const PopoverAnchor = ({
  ...props
}: ComponentProps<typeof PopoverPrimitive.Root>) => {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
};

export { Popover, PopoverTrigger, PopoverAnchor, PopoverContent };
