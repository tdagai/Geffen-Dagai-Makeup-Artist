'use client'

import { GenericGrid, Accordion, StyledButton } from "@components/index";

const FaqSection = () => {
  return (
    <GenericGrid as="section">
      <h2 className="text-primary font-young col-span-4 text-center md:col-span-12">Frequently Asked Questions</h2>
      <Accordion className="col-span-4 col-start-1 mb-8 mt-4 md:col-span-10 md:col-start-2" />
      <StyledButton className="text-base! md:text-xl! col-span-4 col-start-1 justify-self-center md:col-span-12" >For Additional Questions →</StyledButton>
    </GenericGrid>
  )
}

export default FaqSection;