/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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
jest.mock("@assets/hamburgerMenu.svg", () => "/hamburgerMenu.svg");

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

  it("renders each nav link twice (desktop + mobile menus)", () => {
    render(<NavBar />);

    ["Portfolio", "Resume", "About", "Contact"].forEach((label) => {
      expect(screen.getAllByText(label)).toHaveLength(2);
    });
  });

  it("renders the hamburger menu toggle button with correct initial aria-expanded state", () => {
    render(<NavBar />);

    const toggleButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });

  it("renders the hamburger menu icon image", () => {
    render(<NavBar />);

    const hamburgerImage = screen.getByAltText("hamburger menu icon");
    expect(hamburgerImage).toBeInTheDocument();
  });

  it("toggles aria-expanded and mobile menu visibility classes when the hamburger button is clicked", () => {
    const { container } = render(<NavBar />);

    const toggleButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });
    const mobileMenu = container.querySelector(
      "ul.absolute"
    ) as HTMLUListElement;

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileMenu).toHaveClass("opacity-0");
    expect(mobileMenu).toHaveClass("pointer-events-none");
    expect(mobileMenu).not.toHaveClass("opacity-100");

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(mobileMenu).toHaveClass("translate-y-25");
    expect(mobileMenu).toHaveClass("opacity-100");
    expect(mobileMenu).toHaveClass("pointer-events-auto");
    expect(mobileMenu).not.toHaveClass("opacity-0");

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileMenu).toHaveClass("opacity-0");
    expect(mobileMenu).toHaveClass("pointer-events-none");
  });

  it("closes the mobile menu when a mobile nav link is clicked", () => {
    const { container } = render(<NavBar />);

    const toggleButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });
    const mobileMenu = container.querySelector(
      "ul.absolute"
    ) as HTMLUListElement;

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(mobileMenu).toHaveClass("opacity-100");

    const mobileAboutLink = Array.from(
      mobileMenu.querySelectorAll("a")
    ).find((link) => link.textContent === "About") as HTMLAnchorElement;

    expect(mobileAboutLink).toBeDefined();

    fireEvent.click(mobileAboutLink);

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileMenu).toHaveClass("opacity-0");
    expect(mobileMenu).toHaveClass("pointer-events-none");
  });

  it("applies the underline-slide-out class to every nav link", () => {
    render(<NavBar />);

    const links = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href") !== "/");

    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) =>
      expect(link).toHaveClass("underline-slide-out")
    );
  });

  it.each([
    ["Portfolio"],
    ["Resume"],
    ["About"],
    ["Contact"],
  ])("closes the mobile menu when the mobile '%s' link is clicked", (label) => {
    const { container } = render(<NavBar />);

    const toggleButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });
    const mobileMenu = container.querySelector(
      "ul.absolute"
    ) as HTMLUListElement;

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");

    const mobileLink = Array.from(mobileMenu.querySelectorAll("a")).find(
      (link) => link.textContent === label
    ) as HTMLAnchorElement;

    expect(mobileLink).toBeDefined();

    fireEvent.click(mobileLink);

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileMenu).toHaveClass("opacity-0");
  });

  it("does not toggle the mobile menu state when a desktop nav link is clicked", () => {
    const { container } = render(<NavBar />);

    const toggleButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });
    const mobileMenu = container.querySelector(
      "ul.absolute"
    ) as HTMLUListElement;
    const desktopMenu = container.querySelector(
      "ul.hidden"
    ) as HTMLUListElement;

    const desktopPortfolioLink = Array.from(
      desktopMenu.querySelectorAll("a")
    ).find((link) => link.textContent === "Portfolio") as HTMLAnchorElement;

    expect(desktopPortfolioLink).toBeDefined();

    fireEvent.click(desktopPortfolioLink);

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileMenu).toHaveClass("opacity-0");
  });

  it("supports multiple consecutive toggles of the hamburger menu", () => {
    render(<NavBar />);

    const toggleButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });

    for (let i = 0; i < 4; i += 1) {
      fireEvent.click(toggleButton);
      expect(toggleButton).toHaveAttribute(
        "aria-expanded",
        i % 2 === 0 ? "true" : "false"
      );
    }
  });

  it("renders the logo image with eager loading", () => {
    render(<NavBar />);

    const logoImage = screen.getByAltText("website nav logo");
    expect(logoImage).toHaveAttribute("loading", "eager");
  });

  it("renders the hamburger icon image with eager loading and expected height", () => {
    render(<NavBar />);

    const hamburgerImage = screen.getByAltText("hamburger menu icon");
    expect(hamburgerImage).toHaveAttribute("loading", "eager");
    expect(hamburgerImage).toHaveAttribute("height", "32");
  });

  it("renders exactly one toggle button for the hamburger menu", () => {
    render(<NavBar />);

    const toggleButtons = screen.getAllByRole("button", {
      name: /toggle navigation menu/i,
    });

    expect(toggleButtons).toHaveLength(1);
  });
});
