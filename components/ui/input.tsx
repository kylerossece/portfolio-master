import React from 'react'

import { type ComponentProps } from 'react';
import clsx from 'clsx';
import styles from '@/assets/css/ui/input.module.scss'
const Input = ({type, className, ...props} : ComponentProps<'input'>) => {
  return (
    <input 
    className={clsx(styles.input, className)}
    {...props}
    />
  )
}

export {Input}