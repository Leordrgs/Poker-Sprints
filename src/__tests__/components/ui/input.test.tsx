import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Input } from "@/components/ui/input";

describe("Input component", () => {
  it("deve renderizar o input corretamente", () => {
    render(<Input placeholder="Digite algo..." />);

    const inputElement = screen.getByPlaceholderText("Digite algo...");
    expect(inputElement).toBeInTheDocument();
  });

  it("deve aceitar valores digitados", async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Digite algo..." />);

    const inputElement = screen.getByPlaceholderText("Digite algo...");
    await user.type(inputElement, "Teste");

    expect(inputElement).toHaveValue("Teste");
  });

  it("deve disparar o evento onChange", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input placeholder="Digite algo..." onChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText("Digite algo...");
    await user.type(inputElement, "Teste");

    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(5); // Cada letra dispara um evento
  });

  it("deve ser desabilitado quando a propriedade `disabled` for passada", () => {
    render(<Input placeholder="Digite algo..." disabled />);

    const inputElement = screen.getByPlaceholderText("Digite algo...");
    expect(inputElement).toBeDisabled();
  });

  it("deve aplicar classes personalizadas corretamente", () => {
    render(
      <Input
        placeholder="Digite algo..."
        className="custom-class"
        data-testid="input"
      />
    );

    const inputElement = screen.getByTestId("input");
    expect(inputElement).toHaveClass("custom-class");
  });

  it("deve aceitar o tipo `password`", () => {
    render(<Input placeholder="Digite sua senha..." type="password" />);

    const inputElement = screen.getByPlaceholderText("Digite sua senha...");
    expect(inputElement).toHaveAttribute("type", "password");
  });

  it("deve aceitar atributos adicionais", () => {
    render(<Input placeholder="Digite algo..." maxLength={10} />);

    const inputElement = screen.getByPlaceholderText("Digite algo...");
    expect(inputElement).toHaveAttribute("maxLength", "10");
  });
});
