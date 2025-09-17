import { type ComponentProps } from 'react';
import styles from '@/assets/css/ui/typography.module.scss'
import clsx from 'clsx';

const Caption = ({children, className, ...props} : ComponentProps<'p'>) => {
   return (<p className={clsx(styles.caption, className)} {...props}>{children}</p>)
}

export {Caption}