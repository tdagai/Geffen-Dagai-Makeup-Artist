'use client'
import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import styled from "styled-components";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

type AccordionCompProps = React.HTMLAttributes<HTMLDivElement>;

//  accordionitem component
const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <Wrapper>
      <QuestionContainer
        className={`font-young ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <Arrow className={`${isOpen ? "active" : ""}`} />
      </QuestionContainer>

      <AnswerContainer
        ref={contentRef}
        style={{ height: `${height}px` }}
      >
        <AnswerContent>{answer}</AnswerContent>
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
    <Container className={`${classes}`}>
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
`;

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  overflow: hidden;
`;

const QuestionContainer = styled.button`
  width: 100%;
  text-align: left;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Arrow = styled(RiArrowDropDownLine)`
  font-size: 2rem;
  transition: transform 0.3s ease-in-out;

  &.active {
    transform: rotate(180deg);
  }
`;

const AnswerContainer = styled.div`
  overflow: hidden;
  padding: 0 1rem;
  transition: height 0.4s ease-in-out;
`;

const AnswerContent = styled.p`
  padding-bottom: 1.25rem;
  font-size: 18px;
  font-style: italic;
`;

export default Accordion;
