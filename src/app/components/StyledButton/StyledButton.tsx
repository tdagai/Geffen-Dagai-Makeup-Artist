'use client'
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type StyledButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
} & ComponentProps<"button">;

const StyledButton = ({ children, className = "", href, ...props }: StyledButtonProps) => {
  const baseClasses = `inline-flex items-center justify-center w-fit h-fit bg-primary font-young rounded-2xl px-8 py-6 text-xl border border-black text-white transition-all hover:bg-green-800 hover:cursor-pointer hover:shadow-small ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default StyledButton;