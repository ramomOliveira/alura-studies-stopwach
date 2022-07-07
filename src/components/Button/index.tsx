import React, { ReactNode } from 'react';
import style from './Button.module.scss';

interface IButtonProps {
  children: ReactNode,
  onClick?: () => void,
  type?: "button" | "submit" | "reset" | undefined,
}

function Button({ children, onClick, type = "button" }: IButtonProps) {
  return (
    <button type={type} onClick={onClick} className={style.btn}>
      {children}
    </button>
  )
}

export default Button;