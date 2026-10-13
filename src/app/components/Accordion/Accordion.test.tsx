/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

jest.mock("styled-components", () => {
  const createStyledTag = (tag: string) => (...templateArgs: any[]) => {
    void templateArgs;
    const Component = React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement(tag, { ...props, ref }, children)
    );
    Component.displayName = `styled.${tag}`;
    return Component;
  };

  const styled: any = new Proxy(
    (WrappedComponent: any) => (...templateArgs: any[]) => {
      void templateArgs;
      const Component = React.forwardRef(({ children, ...props }: any, ref: any) =>
        React.createElement(WrappedComponent, { ...props, ref }, children)
      );
      Component.displayName = "styled(Component)";
      return Component;
    },
    {
      get: (target, prop: string) => {
        if (typeof prop === "string") {
          return createStyledTag(prop);
        }
        return (target as any)[prop];
      },
    }
  );

  return { __esModule: true, default: styled };
});

jest.mock("react-icons/ri", () => ({
  RiArrowDropDownLine: (props: any) => <svg data-testid="arrow-icon" {...props} />,
}));

import { render, screen } from "@testing-library/react";
import Accordion from "./Accordion";

describe("Accordion", () => {
  const questions = [
    "What type of Makeup work do you do?",
    "Where do you work?",
    "What are your rates?",
  ];

  const answers = [
    /my work spans commercials/i,
    /while i work the most frequently/i,
    /my rates vary depending/i,
  ];

  it("renders all questions", () => {
    render(<Accordion />);
    questions.forEach((question) => {
      expect(screen.getByText(question)).toBeInTheDocument();
    });
  });

  it("renders all answers", () => {
    render(<Accordion />);
    answers.forEach((answer) => {
      expect(screen.getByText(answer)).toBeInTheDocument();
    });
  });

  it("renders three accordion items with details tags", () => {
    const { container } = render(<Accordion />);
    const details = container.querySelectorAll("details");
    expect(details).toHaveLength(3);
  });

  it("renders an arrow icon for each question", () => {
    render(<Accordion />);
    const icons = screen.getAllByTestId("arrow-icon");
    expect(icons).toHaveLength(3);
  });

  it("applies the passed className along with default classes", () => {
    const { container } = render(<Accordion className="custom-class" />);
    const topContainer = container.firstChild as HTMLElement;
    expect(topContainer).toHaveClass("px-4");
    expect(topContainer).toHaveClass("md:p-0");
    expect(topContainer).toHaveClass("custom-class");
  });

  it("applies default classes when no className is passed", () => {
    const { container } = render(<Accordion />);
    const topContainer = container.firstChild as HTMLElement;
    expect(topContainer).toHaveClass("px-4");
    expect(topContainer).toHaveClass("md:p-0");
  });
});