import React from 'react'
import clsx from 'clsx'
import styles from "@/assets/css/ui/label.module.scss"
import { type ComponentProps } from 'react';
const Label = ({children,className, ...props}  : ComponentProps<'label'>) => {
  return (
    <label className={clsx(styles.label, className)} {...props}>
        {children}
    </label>
  )
}

export {Label}