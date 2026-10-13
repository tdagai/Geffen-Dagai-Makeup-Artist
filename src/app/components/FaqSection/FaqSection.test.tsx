/* eslint-disable @typescript-eslint/no-explicit-any */
jest.mock("@components/index", () => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  GenericGrid: ({ children, as: _as, ...props }: any) => (
    <section {...props}>{children}</section>
  ),
  Accordion: ({ className }: any) => (
    <div data-testid="accordion" className={className} />
  ),
  StyledButton: ({ children, href, className }: any) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

import { render, screen } from "@testing-library/react";
import FaqSection from "./FaqSection";

describe("FaqSection", () => {
  it("renders the section heading", () => {
    render(<FaqSection />);
    expect(
      screen.getByRole("heading", { name: /frequently asked questions/i })
    ).toBeInTheDocument();
  });

  it("renders the Accordion component", () => {
    render(<FaqSection />);
    expect(screen.getByTestId("accordion")).toBeInTheDocument();
  });

  it("renders the 'For Additional Questions' link pointing to /faq", () => {
    render(<FaqSection />);
    const link = screen.getByRole("link", {
      name: /for additional questions →/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/faq");
  });
});