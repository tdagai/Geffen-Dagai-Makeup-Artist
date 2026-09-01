import { render, screen } from "@testing-library/react";
import { ImgHTMLAttributes } from "react";
import HomepageHero from "./HomepageHero";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
    <img alt={alt} {...props} />
  ),
}));

jest.mock("@assets/homepage/hero.jpg", () => "/hero.jpg");

describe("HomepageHero", () => {
  it("renders the main headline and supporting copy", () => {
    render(<HomepageHero />);

    expect(
      screen.getByRole("heading", {
        name: /a versatile artist for all your makeup needs/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /done up, dirty, personal, or character, i can make it all come together/i
      )
    ).toBeInTheDocument();
  });

  it("renders the call to action button and the hero image", () => {
    render(<HomepageHero />);

    expect(
      screen.getByRole("button", { name: /reach out!/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("img", {
        name: /a picture of geffen on a lit green background/i,
      })
    ).toHaveAttribute("src", "/hero.jpg");
  });
});
