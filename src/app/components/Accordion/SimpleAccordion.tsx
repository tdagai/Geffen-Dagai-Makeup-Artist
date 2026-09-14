'use client'

import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";

type SimpleAccordionCompProps = React.HTMLAttributes<HTMLDivElement>;

const SimpleAccordion = ({ className: classes = "" }: SimpleAccordionCompProps) => {
  const data = [
    {
      question: "What type of Makeup work do you do?",
      answer:
        "My work spans commercials, film, TV, photography (editorial, commercial, and glam), corporate videos, and music videos. Basically, any type of shoot!"
    },
    {
      question: "Where do you work?",
      answer:
        "While I work the most frequently in Oakland and San Francisco, I am always willing to commute in and around the Bay Area. I've worked in San Jose and Palo Alto in the South Bay, Berkeley, Hayward, Fremont, Walnut Creek, and Pleasanton in the East Bay, San Mateo and Daly City in the Peninsula, and Marin and Mill Valley in the North Bay. I am also always open to traveling outside the Bay Area and have traveled to Stockton, Tracy, Santa Rosa, and Sacramento."
    },
    {
      question: "What are your rates?",
      answer:
        "My rates vary depending on the production, type of application, number of talent, and role. I am open to discussing sliding scale rates with microbudget film productions. Reach out to me with the details and we can discuss rates!"
    },
  ];

  return (
    <Container className={`px-4 md:p-0 ${classes}`}>
      {data.map(({ question, answer }, index) => {
        return (
          <Wrapper name="Accordion" key={`question-${index}`}>
            <QuestionContainer className="font-young">{question}<Arrow /></QuestionContainer>
            <AnswerContainer className="font-instrument tracking-[3%]">{answer}</AnswerContainer>
          </Wrapper>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Wrapper = styled.details`
  position: relative;
  width: 100%;
  border-radius: 1rem;
  box-shadow: var(--shadow-small);
  border: 1px solid #000;
  overflow: hidden;

  &::details-content {
    block-size: 0;

    transition:
      block-size .5s,
      content-visibility .5s;
    transition-behavior: allow-discrete;

  }

  &[open]::details-content {
    block-size: auto;
    block-size: calc-size(auto);
  }

  &[open] > summary {
    background-color: var(--color-green-800);
    color: #fff;
    border-bottom: 1px solid #000;

    transition:
      background-color .5s,
      color .5s;
  }

  &[open] > summary > svg {
    transform: rotate(180deg);
  }

`

const QuestionContainer = styled.summary`
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-weight: 500;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem) !important;
  font-size: 1.25rem;
  background-color: var(--secondary);
  color: var(--primary);
  cursor: pointer;
  transition:
    background-color .5s,
    color .5s;

  &:hover {
    background-color: var(--color-green-800);
    color: #fff;
  }
`;

const AnswerContainer = styled.p`
  padding: 1rem;
  font-size: 1.25rem;
`;

const Arrow = styled(RiArrowDropDownLine)`
  font-size: 2rem;
  transition: transform 0.4s ease-in-out;
`;


export default SimpleAccordion;