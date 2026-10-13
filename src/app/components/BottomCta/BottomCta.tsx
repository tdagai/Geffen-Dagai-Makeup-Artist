"use client"

import { StyledButton, GenericGrid } from "@components/index";
import Link from "next/link";

const BottomCta = () => {

  return (
    <GenericGrid as="section">
      <div className="bg-secondary shadow-big md:py-22.5 md:px-42.5 col-span-4 flex flex-col items-center gap-4 rounded-2xl p-8 md:col-span-10 md:col-start-2 md:gap-8">
        <h2 className="font-young text-primary whitespace-pre-wrap text-center">
          {`Have Any Of Your Questions Gone Unanswered?`}
        </h2>
        <Link href="/contact">
          <StyledButton>
            {`Talk To Me →`}
          </StyledButton>
        </Link>
      </div>
    </GenericGrid>
  )
}

export default BottomCta;