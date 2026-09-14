'use client'

import { GenericGrid, SimpleAccordion } from "@components/index";
import Accordion from "../Accordion/Accordion";

const FaqSection = () => {
  return (
    <GenericGrid as="section">
      <h2 className="text-primary font-young col-span-4 text-center md:col-span-12">Frequently Asked Questions</h2>
      <SimpleAccordion className="col-span-4 col-start-1 md:col-span-10 md:col-start-2" />
      {/* <Accordion className="col-span-4 col-start-1 md:col-span-10 md:col-start-2"></Accordion> */}
    </GenericGrid>
  )
}

export default FaqSection;