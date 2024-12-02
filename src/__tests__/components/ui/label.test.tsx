import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "@/components/ui/label";

describe("Label component", () => {
  it("deve renderizar o label com o texto fornecido", () => {
    render(<Label>Nome</Label>);

    const labelElement = screen.getByText("Nome");
    expect(labelElement).toBeInTheDocument();
  });

  it("deve aplicar classes personalizadas fornecidas", () => {
    render(<Label className="custom-class">Nome</Label>);

    const labelElement = screen.getByText("Nome");
    expect(labelElement).toHaveClass("custom-class");
  });

  it("deve aplicar as classes padrão do label", () => {
    render(<Label>Nome</Label>);

    const labelElement = screen.getByText("Nome");
    expect(labelElement).toHaveClass(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    );
  });

  it("deve renderizar corretamente quando usado com um input associado", () => {
    render(
      <>
        <Label htmlFor="input-id">Nome</Label>
        <input id="input-id" type="text" />
      </>
    );

    const labelElement = screen.getByText("Nome");
    const inputElement = screen.getByRole("textbox");

    expect(labelElement).toHaveAttribute("for", "input-id");
    expect(inputElement).toHaveAttribute("id", "input-id");
  });

  it("não deve quebrar se nenhuma propriedade extra for passada", () => {
    render(<Label data-testid="label" />);
  
    // Verifica se o elemento <label> foi renderizado usando um seletor de teste
    const labelElement = screen.getByTestId("label");
    expect(labelElement).toBeInTheDocument();
  
    // Confirma que o componente foi renderizado com as classes padrão
    expect(labelElement).toHaveClass(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    );
  });

  it("deve renderizar corretamente com propriedades adicionais", () => {
    render(<Label data-testid="label">Nome</Label>);

    const labelElement = screen.getByTestId("label");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent("Nome");
  });
});
