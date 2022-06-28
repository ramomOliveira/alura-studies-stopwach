import React, { ReactNode } from 'react';
import style from './Button.module.scss';

interface IButtonProps {
  children: ReactNode,
  onClick?: () => void,
}

function Button({ children, onClick }: IButtonProps) {
  return (
    <button onClick={onClick} className={style.btn}>
      {children}
    </button>
  )
}

export default Button;