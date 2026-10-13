/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "usehooks-ts";
import Footer from "./Footer";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, ...props }: any) => <img alt={alt} {...props} />,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock("@assets/nav_logo.png", () => "/nav_logo.png");
jest.mock("@assets/footer_cat.svg", () => "/footer_cat.svg");

jest.mock("@components/index", () => ({
  GenericGrid: ({ children, as, ...props }: any) => {
    const Tag = as ?? "section";
    return <Tag {...props}>{children}</Tag>;
  },
}));

jest.mock("usehooks-ts", () => ({
  useMediaQuery: jest.fn(),
}));

const mockedUseMediaQuery = useMediaQuery as jest.Mock;

describe("Footer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls useMediaQuery with the expected mobile breakpoint query and options", () => {
    mockedUseMediaQuery.mockReturnValue(false);
    render(<Footer />);

    expect(mockedUseMediaQuery).toHaveBeenCalledWith("(max-width: 768px)", {
      initializeWithValue: false,
    });
  });

  it("renders the website logo image", () => {
    mockedUseMediaQuery.mockReturnValue(false);
    render(<Footer />);

    const logo = screen.getByAltText("website logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("loading", "eager");
  });

  it("renders the footer cat image", () => {
    mockedUseMediaQuery.mockReturnValue(false);
    render(<Footer />);

    const cat = screen.getByAltText("footer cat");
    expect(cat).toBeInTheDocument();
    expect(cat).toHaveAttribute("loading", "eager");
  });

  it("renders desktop dimensions for the footer cat when isMobile is false", () => {
    mockedUseMediaQuery.mockReturnValue(false);
    render(<Footer />);

    const cat = screen.getByAltText("footer cat");
    expect(cat).toHaveAttribute("height", "195");
    expect(cat).toHaveAttribute("width", "137");
  });

  it("renders mobile dimensions for the footer cat when isMobile is true", () => {
    mockedUseMediaQuery.mockReturnValue(true);
    render(<Footer />);

    const cat = screen.getByAltText("footer cat");
    expect(cat).toHaveAttribute("height", "86");
    expect(cat).toHaveAttribute("width", "60");
  });

  it("renders all footer navigation links with correct labels and hrefs", () => {
    mockedUseMediaQuery.mockReturnValue(false);
    render(<Footer />);

    const expectedLinks = [
      { label: "Instagram", href: "https://www.instagram.com/makeupbygeffen/" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Resume", href: "/resume" },
      { label: "About", href: "/about" },
      { label: "Contact Me", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ];

    expectedLinks.forEach(({ label, href }) => {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
    });
  });

  it("renders exactly the expected number of footer links", () => {
    mockedUseMediaQuery.mockReturnValue(false);
    render(<Footer />);

    expect(screen.getAllByRole("link")).toHaveLength(6);
  });

  it("applies the underline-slide-out class to each footer link", () => {
    mockedUseMediaQuery.mockReturnValue(false);
    render(<Footer />);

    screen.getAllByRole("link").forEach((link) => {
      expect(link).toHaveClass("underline-slide-out");
    });
  });

  it("renders footer links inside list items with unique keys per label (no duplicate labels)", () => {
    mockedUseMediaQuery.mockReturnValue(false);
    const { container } = render(<Footer />);

    const listItems = container.querySelectorAll("li");
    expect(listItems).toHaveLength(6);
  });

  it("renders without throwing regardless of isMobile value", () => {
    mockedUseMediaQuery.mockReturnValue(false);
    expect(() => render(<Footer />)).not.toThrow();

    mockedUseMediaQuery.mockReturnValue(true);
    expect(() => render(<Footer />)).not.toThrow();
  });
});
