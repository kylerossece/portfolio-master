import React from 'react'
import styles from "@/assets/css/ui/container.module.scss"
import { type ComponentProps } from 'react';

const Container = ({ children, className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={styles.container} {...props}>{children}</div>
  )
}

export { Container };