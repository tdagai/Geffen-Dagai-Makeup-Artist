'use client'
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import styled from "styled-components";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

type AccordionCompProps = React.HTMLAttributes<HTMLDivElement>;

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  return (
    <Wrapper>
      <QuestionContainer
        type="button"
        className={`font-young ${isOpen ? "active" : ""}`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="question-content pointer-events-none">{question}</span>
        <Arrow className={`shrink-0 pointer-events-none ${isOpen ? "active" : ""}`} />
      </QuestionContainer>

      <AnswerContainer $isOpen={isOpen} aria-hidden={!isOpen}>
        <AnswerInner>
          <AnswerContent>{answer}</AnswerContent>
        </AnswerInner>
      </AnswerContainer>
    </Wrapper>
  );
};

const Accordion = ({ className: classes = "" }: AccordionCompProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
    <Container className={classes}>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 1rem;
  box-shadow: var(--shadow-small);
  border: 1px solid #000;
  overflow: hidden;
`;

const QuestionContainer = styled.button`
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: left;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 1.25rem;
  background-color: var(--secondary);
  color: var(--primary);
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 1.5rem;
    font-size: 28px;
  }

  &.active {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
`;

const Arrow = styled(RiArrowDropDownLine)`
  font-size: 2rem;
  transition: transform 0.3s ease-in-out;

  &.active {
    transform: rotate(180deg);
  }
`;

const AnswerContainer = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${(props) => (props.$isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.35s ease-in-out;
`;

const AnswerInner = styled.div`
  overflow: hidden;
`;

const AnswerContent = styled.p`
  padding: 1rem 1.25rem 1.5rem 1.25rem;
  font-size: 16px;
  line-height: 1.6;
  font-style: italic;

  @media (min-width: 768px) {
    padding: 1rem 1.5rem 2rem 1.5rem;
    font-size: 18px;
  }
`;

export default Accordion;
