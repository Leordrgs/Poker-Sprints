import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const triggerClick = vi.fn();

describe("Dialog Component", () => {
  it("deve renderizar o DialogContent corretamente", () => {
    render(
      <Dialog>
        <DialogTrigger onClick={triggerClick}>Abrir</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Teste de Título</DialogTitle>
            <DialogDescription>Teste de Descrição</DialogDescription>
          </DialogHeader>
          <p>Conteúdo do diálogo</p>
          <DialogFooter>
            <button>Confirmar</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    const trigger = screen.getByText("Abrir");
    expect(trigger).toBeInTheDocument();
  });
});
