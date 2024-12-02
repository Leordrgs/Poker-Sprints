import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Textarea } from "@/components/ui/textarea";

describe("Textarea Component", () => {
  it("deve renderizar o Textarea corretamente", () => {
    render(<Textarea placeholder="Digite algo..." />);

    const textarea = screen.getByPlaceholderText("Digite algo...");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveClass(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    );
  });

  it("deve aplicar classes personalizadas", () => {
    render(
      <Textarea placeholder="Digite algo..." className="custom-class" />
    );

    const textarea = screen.getByPlaceholderText("Digite algo...");
    expect(textarea).toHaveClass("custom-class");
  });

  it("deve aceitar propriedades adicionais", () => {
    render(
      <Textarea placeholder="Digite algo..." disabled data-testid="textarea" />
    );

    const textarea = screen.getByTestId("textarea");
    expect(textarea).toBeDisabled();
  });

  it("deve renderizar com referência ao elemento DOM", () => {
    const ref = { current: null };
    render(<Textarea ref={ref} placeholder="Teste de referência" />);

    const textarea = screen.getByPlaceholderText("Teste de referência");
    expect(ref.current).toBe(textarea);
  });
});
