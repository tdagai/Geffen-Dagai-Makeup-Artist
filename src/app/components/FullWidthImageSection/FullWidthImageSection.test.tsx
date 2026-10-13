import { render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import FullWidthImageSection from "./FullWidthImageSection";

// Type-safe, reusable mocks (consider moving to jest.setup.ts)
jest.mock("next/link", () => {
  return function MockLink({ href, children, ...rest }: ComponentProps<"a"> & { href: string }) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  };
});

jest.mock("next/image", () => {
  return function MockImage({ src, alt, ...rest }: ComponentProps<"img">) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={typeof src === "object" ? (src as unknown as { src: string }).src : src} alt={alt} {...rest} />;
  };
});

jest.mock("@assets/homepage/FullWidthImageSection/SectionBg.png", () => ({
  src: "/mock-bg.png",
}));

describe("FullWidthImageSection", () => {
  it("renders key layout elements: section, heading, and background image", () => {
    render(<FullWidthImageSection />);

    // Target by accessible semantic roles and level
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("alt");
  });

  it("provides navigation to the about page", () => {
    render(<FullWidthImageSection />);

    // Ensures the user can find the link and it points to the right destination
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/about");
    expect(link).not.toBeEmptyDOMElement();
  });
});