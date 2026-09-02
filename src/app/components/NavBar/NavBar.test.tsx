/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen } from "@testing-library/react";
import { NavBar } from "@components/index";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, ...props }: any) => <img alt={alt} {...props} />,
}));

jest.mock("@assets/nav_logo.png", () => "/nav_logo.png");

describe("NavBar", () => {
  it("renders all navigation links with the expected routes", () => {
    render(<NavBar />);

    const expectRoutesFor = (label: string, href: string) => {
      const links = screen.getAllByText(label).map((el) => el.closest("a"));

      expect(links.length).toBeGreaterThan(0);
      links.forEach((link) => expect(link).toHaveAttribute("href", href));
    };

    expectRoutesFor("Portfolio", "/portfolio");
    expectRoutesFor("Resume", "/resume");
    expectRoutesFor("About", "/about");
    expectRoutesFor("Contact", "/contact");
  });

  it("renders the home logo link and logo image", () => {
    render(<NavBar />);

    const logoImage = screen.getByAltText("website nav logo");
    const logoLink = logoImage.closest("a");

    expect(logoLink).toHaveAttribute("href", "/");
    expect(logoImage).toBeInTheDocument();
  });

  it("renders a link to each route at least once", () => {
    render(<NavBar />);

    const hrefs = screen
      .getAllByRole("link")
      .map((link) => link.getAttribute("href"));

    ["/", "/portfolio", "/resume", "/about", "/contact"].forEach((route) => {
      expect(hrefs).toContain(route);
    });
  });
});