/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StyledButton from "./StyledButton";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("StyledButton", () => {
  describe("when no href is provided (button branch)", () => {
    it("renders a native button element", () => {
      render(<StyledButton>Click Me</StyledButton>);

      const button = screen.getByRole("button", { name: "Click Me" });
      expect(button).toBeInTheDocument();
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("applies the base classes to the button", () => {
      render(<StyledButton>Click Me</StyledButton>);

      const button = screen.getByRole("button", { name: "Click Me" });
      expect(button).toHaveClass("bg-primary");
      expect(button).toHaveClass("rounded-2xl");
      expect(button).toHaveClass("inline-flex");
    });

    it("appends a custom className to the base classes", () => {
      render(<StyledButton className="custom-class">Click Me</StyledButton>);

      const button = screen.getByRole("button", { name: "Click Me" });
      expect(button).toHaveClass("custom-class");
      expect(button).toHaveClass("bg-primary");
    });

    it("forwards additional button props such as onClick, type, and disabled", () => {
      const handleClick = jest.fn();
      render(
        <StyledButton onClick={handleClick} type="submit" disabled>
          Submit
        </StyledButton>
      );

      const button = screen.getByRole("button", { name: "Submit" });
      expect(button).toHaveAttribute("type", "submit");
      expect(button).toBeDisabled();

      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("calls onClick handler when an enabled button is clicked", () => {
      const handleClick = jest.fn();
      render(<StyledButton onClick={handleClick}>Click Me</StyledButton>);

      fireEvent.click(screen.getByRole("button", { name: "Click Me" }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("renders children passed as nodes, not just strings", () => {
      render(
        <StyledButton>
          <span data-testid="icon">★</span> Favorite
        </StyledButton>
      );

      expect(screen.getByTestId("icon")).toBeInTheDocument();
      expect(screen.getByRole("button")).toHaveTextContent("★ Favorite");
    });

    it("defaults to an empty className when none is provided", () => {
      render(<StyledButton>Click Me</StyledButton>);

      const button = screen.getByRole("button", { name: "Click Me" });
      expect(button.className.trim().endsWith("active:bg-green-900")).toBe(
        true
      );
    });
  });

  describe("when href is provided (link branch)", () => {
    it("renders a Link (anchor) element instead of a button", () => {
      render(<StyledButton href="/contact">Go</StyledButton>);

      expect(screen.getByRole("link", { name: "Go" })).toBeInTheDocument();
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    it("sets the href attribute correctly on the rendered link", () => {
      render(<StyledButton href="/portfolio">View Portfolio</StyledButton>);

      const link = screen.getByRole("link", { name: "View Portfolio" });
      expect(link).toHaveAttribute("href", "/portfolio");
    });

    it("applies the base classes to the link", () => {
      render(<StyledButton href="/contact">Go</StyledButton>);

      const link = screen.getByRole("link", { name: "Go" });
      expect(link).toHaveClass("bg-primary");
      expect(link).toHaveClass("rounded-2xl");
    });

    it("appends a custom className to the base classes on the link branch", () => {
      render(
        <StyledButton href="/contact" className="extra-link-class">
          Go
        </StyledButton>
      );

      const link = screen.getByRole("link", { name: "Go" });
      expect(link).toHaveClass("extra-link-class");
      expect(link).toHaveClass("bg-primary");
    });

    it("renders children correctly inside the link", () => {
      render(
        <StyledButton href="/contact">
          <span data-testid="arrow">→</span> Talk To Me
        </StyledButton>
      );

      expect(screen.getByTestId("arrow")).toBeInTheDocument();
      expect(screen.getByRole("link")).toHaveTextContent("→ Talk To Me");
    });

    it("does not forward button-only props like disabled/type to the Link branch", () => {
      render(
        <StyledButton href="/contact" type="submit">
          Go
        </StyledButton>
      );

      const link = screen.getByRole("link", { name: "Go" });
      expect(link).not.toHaveAttribute("type");
      expect(link).not.toHaveAttribute("disabled");
    });
  });
});
