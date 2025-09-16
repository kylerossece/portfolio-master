import React from 'react'

import { type ComponentProps } from 'react';
import clsx from 'clsx';
import styles from '@/assets/css/ui/textarea.module.scss'
const TextArea = ({className, ...props} : ComponentProps<'textarea'>) => {
  return (
    <textarea
    className={clsx(styles.textarea, className)}
    {...props}
    />
  )
}

export {TextArea}