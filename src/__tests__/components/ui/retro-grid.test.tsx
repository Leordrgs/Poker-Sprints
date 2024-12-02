import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RetroGrid from "@/components/ui/retro-grid";

describe("RetroGrid Component", () => {
  it("deve renderizar o RetroGrid com classes padrão", () => {
    const { container } = render(<RetroGrid />);

    const retroGrid = container.firstChild;
    expect(retroGrid).toBeInTheDocument();
    expect(retroGrid).toHaveClass(
      "pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]"
    );
  });

  it("deve aceitar e aplicar classes personalizadas", () => {
    const { container } = render(<RetroGrid className="custom-class" />);

    const retroGrid = container.firstChild;
    expect(retroGrid).toHaveClass("custom-class");
  });

  it("deve aplicar o ângulo padrão corretamente", () => {
    const { container } = render(<RetroGrid />);

    const retroGrid = container.firstChild;
    expect(retroGrid).toHaveStyle({ "--grid-angle": "65deg" });
  });

  it("deve aceitar e aplicar um ângulo personalizado", () => {
    const { container } = render(<RetroGrid angle={45} />);

    const retroGrid = container.firstChild;
    expect(retroGrid).toHaveStyle({ "--grid-angle": "45deg" });
  });
});
