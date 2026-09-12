/* eslint-disable @typescript-eslint/no-explicit-any */
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={typeof src === "object" ? src.src : src} alt={alt} {...rest} />;
  },
}));

jest.mock("@assets/homepage/FullWidthImageSection/SectionBg.png", () => ({
  src: "/mock-section-bg.png",
  height: 800,
  width: 1200,
}));

import { render, screen } from "@testing-library/react";
import FullWidthImageSection from "./FullWidthImageSection";

describe("FullWidthImageSection", () => {
  it("renders the 'Who Am I?' heading", () => {
    render(<FullWidthImageSection />);

    expect(
      screen.getByRole("heading", { name: /who am i\?/i })
    ).toBeInTheDocument();
  });

  it("renders the bio description text", () => {
    render(<FullWidthImageSection />);

    expect(
      screen.getByText(/passionate makeup artist with over five years/i)
    ).toBeInTheDocument();
  });

  it("renders the background image with the correct alt text", () => {
    render(<FullWidthImageSection />);

    const image = screen.getByAltText(
      "A behind the scenes image of Geffen doing an actress's makeup on set"
    );
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/mock-section-bg.png");
  });

  it("renders the 'Wanna Know More? →' call to action button", () => {
    render(<FullWidthImageSection />);

    expect(
      screen.getByRole("button", { name: /wanna know more\? →/i })
    ).toBeInTheDocument();
  });

  it("renders a link pointing to the /about page", () => {
    render(<FullWidthImageSection />);

    const link = screen.getByRole("link", { name: /wanna know more\? →/i });
    expect(link).toHaveAttribute("href", "/about");
  });
});