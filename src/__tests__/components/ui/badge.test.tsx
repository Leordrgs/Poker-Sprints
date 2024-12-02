import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "@/components/ui/badge";

describe("Badge Component", () => {
  it("deve renderizar o componente com o texto fornecido", () => {
    render(<Badge>Badge Text</Badge>);

    const badgeElement = screen.getByText("Badge Text");
    expect(badgeElement).toBeInTheDocument();
  });

  it("deve aplicar a classe default corretamente", () => {
    render(<Badge>Default Badge</Badge>);

    const badgeElement = screen.getByText("Default Badge");
    expect(badgeElement).toHaveClass("bg-primary", "text-primary-foreground");
  });

  it("deve aplicar a classe secondary corretamente", () => {
    render(<Badge variant="secondary">Secondary Badge</Badge>);

    const badgeElement = screen.getByText("Secondary Badge");
    expect(badgeElement).toHaveClass("bg-secondary", "text-secondary-foreground");
  });

  it("deve aplicar a classe destructive corretamente", () => {
    render(<Badge variant="destructive">Destructive Badge</Badge>);

    const badgeElement = screen.getByText("Destructive Badge");
    expect(badgeElement).toHaveClass("bg-destructive", "text-destructive-foreground");
  });

  it("deve aplicar a classe outline corretamente", () => {
    render(<Badge variant="outline">Outline Badge</Badge>);

    const badgeElement = screen.getByText("Outline Badge");
    expect(badgeElement).toHaveClass("text-foreground");
  });

  it("deve permitir a passagem de classes personalizadas", () => {
    render(
      <Badge className="custom-class">Custom Class Badge</Badge>
    );

    const badgeElement = screen.getByText("Custom Class Badge");
    expect(badgeElement).toHaveClass("custom-class");
  });
});