'use client'
import { PropsWithChildren } from "react";
type StyledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton  = ({children, className: classes}: PropsWithChildren<StyledButtonProps>) => {
  return (
    <button className={`w-fit h-fit bg-primary font-young rounded-2xl px-8 py-6 text-xl text-white ${classes}`}>
      {children}
    </button>
  )
}

export default StyledButton;