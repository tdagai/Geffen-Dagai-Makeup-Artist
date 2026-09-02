'use client'
import { PropsWithChildren } from "react";

type GenericGridProps = {
  as: "section" | "div";
  className?: string;
};

const GenericGrid = ({ children, as, className }: PropsWithChildren<GenericGridProps>) => {
  if (as === "section") {
    return (
      <section className={`grid w-full gap-4 sm:grid-cols-4 md:grid-cols-12 ${className ?? ""}`}>
        {children}
      </section>
    )
  }

  return (
    <div className={`grid w-full gap-4 sm:grid-cols-4 md:grid-cols-12 ${className ?? ""}`}>
      {children}
    </div>
  )
}

export default GenericGrid