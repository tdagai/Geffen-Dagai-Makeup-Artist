/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen } from "@testing-library/react";
import BottomCta from "./BottomCta";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock("@components/index", () => ({
  GenericGrid: ({ children, as, ...props }: any) => {
    const Tag = as ?? "section";
    return <Tag {...props}>{children}</Tag>;
  },
  StyledButton: ({ children, className, ...props }: any) => (
    <button className={className} {...props}>
      {children}
    </button>
  ),
}));

describe("BottomCta", () => {
  it("renders the heading text", () => {
    render(<BottomCta />);

    expect(
      screen.getByRole("heading", {
        name: /have any of your questions gone unanswered\?/i,
      })
    ).toBeInTheDocument();
  });

  it("renders a link to the contact page", () => {
    render(<BottomCta />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/contact");
  });

  it("renders the StyledButton with the expected call-to-action text", () => {
    render(<BottomCta />);

    expect(
      screen.getByRole("button", { name: /talk to me →/i })
    ).toBeInTheDocument();
  });

  it("nests the StyledButton inside the contact Link", () => {
    render(<BottomCta />);

    const link = screen.getByRole("link");
    const button = screen.getByRole("button", { name: /talk to me →/i });

    expect(link).toContainElement(button);
  });

  it("renders the GenericGrid as a section wrapping the content", () => {
    const { container } = render(<BottomCta />);

    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
    expect(section).toContainElement(screen.getByRole("heading"));
  });

  it("renders the inner content container with expected layout classes", () => {
    const { container } = render(<BottomCta />);

    const innerContainer = container.querySelector(
      "section > div"
    ) as HTMLDivElement;

    expect(innerContainer).toBeInTheDocument();
    expect(innerContainer).toHaveClass("bg-secondary");
    expect(innerContainer).toHaveClass("flex");
    expect(innerContainer).toHaveClass("flex-col");
    expect(innerContainer).toHaveClass("items-center");
    expect(innerContainer).toHaveClass("rounded-2xl");
  });

  it("renders without throwing", () => {
    expect(() => render(<BottomCta />)).not.toThrow();
  });
});
