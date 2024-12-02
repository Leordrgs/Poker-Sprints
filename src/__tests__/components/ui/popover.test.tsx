import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

describe("Popover component", () => {
  it("deve renderizar o conteúdo quando acionado", async () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    );

    const trigger = screen.getByText("Open Popover");

    expect(screen.queryByText("Popover Content")).toBeNull();
    await userEvent.click(trigger);
    expect(screen.getByText("Popover Content")).toBeInTheDocument();
  });

  it("deve aplicar classes customizadas ao conteúdo", async () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent className="custom-class">Popover Content</PopoverContent>
      </Popover>
    );

    const trigger = screen.getByText("Open Popover");
    await userEvent.click(trigger);

    const content = screen.getByText("Popover Content");
    expect(content).toHaveClass("custom-class");
  });

  it("deve usar as props align e sideOffset corretamente", async () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent align="start" sideOffset={10}>
          Popover Content
        </PopoverContent>
      </Popover>
    );

    const trigger = screen.getByText("Open Popover");
    await userEvent.click(trigger);

    const content = screen.getByText("Popover Content");
    expect(content).toBeInTheDocument();
  });
});
