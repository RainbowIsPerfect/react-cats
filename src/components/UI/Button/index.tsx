import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  classes?: string;
  variant?: 'bordered' | 'contained' | 'text';
}

export const Button = ({
  children,
  variant,
  classes,
  ...props
}: ButtonPropTypes) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${
        variant !== undefined ? styles[variant] : ''
      } ${classes !== undefined ? classes : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
