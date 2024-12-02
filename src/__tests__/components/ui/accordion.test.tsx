import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

describe("Accordion Component", () => {
  it("deve renderizar o Accordion corretamente", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Seção 1</AccordionTrigger>
          <AccordionContent>Conteúdo da seção 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Seção 2</AccordionTrigger>
          <AccordionContent>Conteúdo da seção 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("Seção 1")).toBeInTheDocument();
    expect(screen.getByText("Seção 2")).toBeInTheDocument();
  });

  it("deve aplicar classes personalizadas aos itens do Accordion", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="custom-class">
          <AccordionTrigger>Seção 1</AccordionTrigger>
          <AccordionContent>Conteúdo da seção 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const item = screen.getByText("Seção 1").closest("div");
    expect(item).toHaveClass("custom-class");
  });
});
