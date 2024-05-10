import React from "react";
import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Typography from "./Typography";

describe("Typography component", () => {
  it("renders children correctly", () => {
    render(<Typography>Hello, world!</Typography>);
    const textElement = screen.getByText("Hello, world!");
    expect(textElement).toBeInTheDocument();
  });

  it("renders with default tag 'p' if not specified", () => {
    render(<Typography>Hello, world!</Typography>);
    const paragraphElement = screen.getByText("Hello, world!");
    expect(paragraphElement.tagName).toBe("P");
  });

  it("applies correct default styles for each typography variant", () => {
    render(<Typography variant="h1">Heading 1</Typography>);
    const h1Element = screen.getByText("Heading 1");
    expect(h1Element).toHaveClass("font-bold text-2xl");

    render(<Typography variant="h2">Heading 2</Typography>);
    const h2Element = screen.getByText("Heading 2");
    expect(h2Element).toHaveClass("font-bold text-xl");

    render(<Typography variant="h3">Heading 3</Typography>);
    const h3Element = screen.getByText("Heading 3");
    expect(h3Element).toHaveClass("font-bold text-lg");

    render(<Typography variant="h4">Heading 4</Typography>);
    const h4Element = screen.getByText("Heading 4");
    expect(h4Element).toHaveClass("font-bold text-base");

    render(<Typography variant="h5">Heading 5</Typography>);
    const h5Element = screen.getByText("Heading 5");
    expect(h5Element).toHaveClass("font-bold text-sm");

    render(<Typography variant="h6">Heading 6</Typography>);
    const h6Element = screen.getByText("Heading 6");
    expect(h6Element).toHaveClass("font-bold text-xs");

    render(<Typography>Paragraph</Typography>);
    const pElement = screen.getByText("Paragraph");
    expect(pElement).toHaveClass("font-normal");
  });

  it("applies additional class names passed via className prop", () => {
    render(<Typography className="custom-class">Custom text</Typography>);
    const customElement = screen.getByText("Custom text");
    expect(customElement).toHaveClass("custom-class");
  });
});
