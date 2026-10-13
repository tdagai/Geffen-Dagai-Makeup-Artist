import React from "react";
import { render, screen } from "@testing-library/react";
import GenericGrid from "./GenericGrid";

describe("GenericGrid", () => {
  it("renders a section element when as='section'", () => {
    const { container } = render(
      <GenericGrid as="section">
        <p>Section content</p>
      </GenericGrid>
    );

    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
    expect(container.querySelector("div")).not.toBeInTheDocument();
  });

  it("renders a div element when as='div'", () => {
    const { container } = render(
      <GenericGrid as="div">
        <p>Div content</p>
      </GenericGrid>
    );

    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
    expect(container.querySelector("section")).not.toBeInTheDocument();
  });

  it("renders children correctly for the section branch", () => {
    render(
      <GenericGrid as="section">
        <p>Hello Section</p>
      </GenericGrid>
    );

    expect(screen.getByText("Hello Section")).toBeInTheDocument();
  });

  it("renders children correctly for the div branch", () => {
    render(
      <GenericGrid as="div">
        <p>Hello Div</p>
      </GenericGrid>
    );

    expect(screen.getByText("Hello Div")).toBeInTheDocument();
  });

  it("applies the default grid classes on the section branch", () => {
    const { container } = render(<GenericGrid as="section" />);
    const section = container.querySelector("section");

    expect(section).toHaveClass("grid");
    expect(section).toHaveClass("w-full");
    expect(section).toHaveClass("gap-4");
    expect(section).toHaveClass("sm:grid-cols-4");
    expect(section).toHaveClass("md:grid-cols-12");
  });

  it("applies the default grid classes on the div branch", () => {
    const { container } = render(<GenericGrid as="div" />);
    const div = container.querySelector("div");

    expect(div).toHaveClass("grid");
    expect(div).toHaveClass("w-full");
    expect(div).toHaveClass("gap-4");
    expect(div).toHaveClass("sm:grid-cols-4");
    expect(div).toHaveClass("md:grid-cols-12");
  });

  it("appends the passed className on the section branch", () => {
    const { container } = render(
      <GenericGrid as="section" className="custom-section-class" />
    );
    const section = container.querySelector("section");

    expect(section).toHaveClass("custom-section-class");
    expect(section).toHaveClass("grid");
  });

  it("appends the passed className on the div branch", () => {
    const { container } = render(
      <GenericGrid as="div" className="custom-div-class" />
    );
    const div = container.querySelector("div");

    expect(div).toHaveClass("custom-div-class");
    expect(div).toHaveClass("grid");
  });

  it("does not throw and renders without a trailing undefined class when className is omitted (section)", () => {
    const { container } = render(<GenericGrid as="section" />);
    const section = container.querySelector("section");

    expect(section?.className).not.toMatch(/undefined/);
  });

  it("does not throw and renders without a trailing undefined class when className is omitted (div)", () => {
    const { container } = render(<GenericGrid as="div" />);
    const div = container.querySelector("div");

    expect(div?.className).not.toMatch(/undefined/);
  });

  it("renders without children without throwing", () => {
    expect(() => render(<GenericGrid as="section" />)).not.toThrow();
    expect(() => render(<GenericGrid as="div" />)).not.toThrow();
  });

  it("renders multiple children for both branches", () => {
    render(
      <GenericGrid as="section">
        <p>First</p>
        <p>Second</p>
      </GenericGrid>
    );

    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });
});
