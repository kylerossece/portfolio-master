import { type ComponentProps } from 'react';
import styles from '@/assets/css/ui/typography.module.scss'
import clsx from 'clsx';

const Caption = ({children, className, ...props} : ComponentProps<'p'>) => {
   return (<p className={clsx(styles.caption, className)} {...props}>{children}</p>)
}

const Header = ({children,className, ...props} : ComponentProps<'h2'>) => {
   return (<h2 className={clsx(styles.header, className)} {...props}>{children}</h2>)
}

export {Caption, Header}