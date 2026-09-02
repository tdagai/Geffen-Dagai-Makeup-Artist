/* eslint-disable @typescript-eslint/no-explicit-any */
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, ...rest } = props;
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img src={typeof src === 'object' ? src.src : src} alt={alt} {...rest} />;
  },
}));

import { render, screen } from "@testing-library/react";
import PortfolioSection from "./PortfolioSection";

describe("PortfolioSection", () => {
  it("renders the section heading", () => {
    render(<PortfolioSection />);

    expect(
      screen.getByRole("heading", { name: /my work speaks for itself/i })
    ).toBeInTheDocument();
  });

  it("renders all three portfolio category labels", () => {
    render(<PortfolioSection />);

    expect(screen.getByText("Film")).toBeInTheDocument();
    expect(screen.getByText("Commercial")).toBeInTheDocument();
    expect(screen.getByText("Photography")).toBeInTheDocument();
  });

  it("renders all three portfolio thumbnail images with correct alt text", () => {
    render(<PortfolioSection />);

    expect(
      screen.getByAltText("Portfolio Film Thumbnail")
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Portfolio Commercial Thumbnail")
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Portfolio Photography Thumbnail")
    ).toBeInTheDocument();
  });

  it("renders the 'See My Portfolio Here' call to action button", () => {
    render(<PortfolioSection />);

    expect(
      screen.getByRole("button", { name: /see my portfolio here →/i })
    ).toBeInTheDocument();
  });

  it("renders links pointing to /portfolio for each category and the CTA", () => {
    render(<PortfolioSection />);

    const links = screen.getAllByRole("link");
    // 3 category links + 1 CTA link
    expect(links).toHaveLength(4);
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "/portfolio");
    });
  });
});