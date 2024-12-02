import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest";
import { Toaster } from "@/components/ui/toaster" 
import { useToast } from "@/hooks/use-toast"

type ToastContextType = {
    toast: ({ ...props }: any) => { id: string; dismiss: () => void; update: (props: any) => void };
    dismiss: (toastId?: string) => void;
    toasts: { id: string; title: string; description?: string; action?: React.ReactNode }[];
  };
  
  vi.mock("@/hooks/use-toast", () => ({
    useToast: vi.fn(),
  }));
  
  describe("Toaster", () => {
    it("deve renderizar os toasts corretamente", () => {
      (useToast as jest.Mock<ToastContextType>).mockReturnValue({
        toasts: [
          {
            id: "1",
            title: "Toast Title",
            description: "Toast Description",
            action: <button>Action</button>,
          },
        ],
        toast: vi.fn(),
        dismiss: vi.fn(),
      });

      render(<Toaster />);

      expect(screen.getByText("Toast Title")).toBeInTheDocument();
      expect(screen.getByText("Toast Description")).toBeInTheDocument();
      expect(screen.getByText("Action")).toBeInTheDocument();
    });
  
    it("deve não renderizar um toast se a lista de toasts estiver vazia", () => {
      (useToast as jest.Mock<ToastContextType>).mockReturnValue({
        toasts: [],
        toast: vi.fn(),
        dismiss: vi.fn(),
      });
      render(<Toaster />);

      expect(screen.queryByText("Toast Title")).not.toBeInTheDocument();
      expect(screen.queryByText("Toast Description")).not.toBeInTheDocument();
      expect(screen.queryByText("Action")).not.toBeInTheDocument();
    });
});