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

    expect(screen.getByText("Portfolio").closest("a")).toHaveAttribute(
      "href",
      "/portfolio"
    );
    expect(screen.getByText("Resume").closest("a")).toHaveAttribute(
      "href",
      "/resume"
    );
    expect(screen.getByText("About").closest("a")).toHaveAttribute(
      "href",
      "/about"
    );
    expect(screen.getByText("Contact").closest("a")).toHaveAttribute(
      "href",
      "/contact"
    );
  });

  it("renders the home logo link and logo image", () => {
    render(<NavBar />);

    const logoImage = screen.getByAltText("website nav logo");
    const logoLink = logoImage.closest("a");

    expect(logoLink).toHaveAttribute("href", "/");
    expect(logoImage).toBeInTheDocument();
  });

  it("renders five total links including the home logo link", () => {
    render(<NavBar />);

    expect(document.querySelectorAll("a")).toHaveLength(5);
  });
});