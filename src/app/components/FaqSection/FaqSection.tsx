'use client'

import { GenericGrid } from "@components/index";
import Accordion from "../Accordion/Accordion";

const FaqSection = () => {
  return (
    <GenericGrid as="section">
      <h2 className="text-primary font-young col-span-4 text-center md:col-span-12">Frequently Asked Questions</h2>
      <Accordion className="col-start-1 col-end-4 md:col-start-2 md:col-end-10"></Accordion>
    </GenericGrid>
  )
}

export default FaqSection;