/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from "@testing-library/react";
import HomepageHero from "./HomepageHero";

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
    const { src, ...rest } = props;
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img src={typeof src === "object" ? src.src : src} {...rest} />;
  },
}));

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
      screen.getByRole("button", { name: /reach out! →/i })
    ).toBeInTheDocument();

    expect(
      screen.getByAltText(/a picture of geffen on a lit green background/i)
    ).toBeInTheDocument();
  });
});
