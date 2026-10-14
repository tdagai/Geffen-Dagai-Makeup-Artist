/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialsSection from "./TestimonialsSection";

jest.mock("../UI/GenericGrid", () => ({
  __esModule: true,
  default: ({ children, as, ...props }: any) => {
    const Tag = as ?? "section";
    return <Tag {...props}>{children}</Tag>;
  },
}));

jest.mock("../StyledButton/StyledButton", () => ({
  __esModule: true,
  default: ({ children, href, className }: any) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

describe("TestimonialsSection", () => {
  it("renders the section heading", () => {
    render(<TestimonialsSection />);

    expect(
      screen.getByRole("heading", { name: /people love working with me/i })
    ).toBeInTheDocument();
  });

  it("renders the first testimonial's text and author in its own container", () => {
    const { container } = render(<TestimonialsSection />);

    const firstContainer = container.querySelector("#testimonial-1");
    expect(firstContainer).toBeInTheDocument();
    expect(firstContainer).toHaveTextContent(
      /I have worked with Geffen in a variety of positions/i
    );
    expect(firstContainer).toHaveTextContent(/Sydney Rincón/i);
  });

  it("renders the first testimonial's company name when provided", () => {
    const { container } = render(<TestimonialsSection />);

    const firstContainer = container.querySelector("#testimonial-1");
    const companySpan = firstContainer?.querySelector("span.italic");

    expect(companySpan).toBeInTheDocument();
    expect(companySpan).toHaveTextContent("FemmeFields Productions");
  });

  it("renders the remaining testimonials via the map branch", () => {
    const { container } = render(<TestimonialsSection />);

    const secondContainer = container.querySelector("#testimonial-2");
    const thirdContainer = container.querySelector("#testimonial-3");

    expect(secondContainer).toBeInTheDocument();
    expect(secondContainer).toHaveTextContent(
      /I’ve had the pleasure of working with Geffen on two projects/i
    );
    expect(secondContainer).toHaveTextContent(/Isabella Doherty/i);

    expect(thirdContainer).toBeInTheDocument();
    expect(thirdContainer).toHaveTextContent(
      /Geffen is a delight to work with/i
    );
    expect(thirdContainer).toHaveTextContent(/Madison Mendez/i);
  });

  it("does not render a company span for testimonials without a company field", () => {
    const { container } = render(<TestimonialsSection />);

    const secondContainer = container.querySelector("#testimonial-2");
    const thirdContainer = container.querySelector("#testimonial-3");

    expect(secondContainer?.querySelector("span.italic")).not.toBeInTheDocument();
    expect(thirdContainer?.querySelector("span.italic")).not.toBeInTheDocument();
  });

  it("renders exactly three testimonial containers", () => {
    const { container } = render(<TestimonialsSection />);

    expect(container.querySelector("#testimonial-1")).toBeInTheDocument();
    expect(container.querySelector("#testimonial-2")).toBeInTheDocument();
    expect(container.querySelector("#testimonial-3")).toBeInTheDocument();
  });

  it("renders the StyledButton CTA with a link to the contact page", () => {
    render(<TestimonialsSection />);

    const cta = screen.getByRole("link", {
      name: /become my next satisfied client →/i,
    });
    expect(cta).toHaveAttribute("href", "/contact");
  });

  it("renders without throwing", () => {
    expect(() => render(<TestimonialsSection />)).not.toThrow();
  });
});
