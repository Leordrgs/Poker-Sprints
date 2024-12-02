import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { 
  Form, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage, 
  FormField 
} from "@/components/ui/form";
import { useForm, FormProvider } from "react-hook-form";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("Form Component", () => {
  it("deve renderizar o Form corretamente", () => {
    render(
      <Wrapper>
        <Form>
          <FormItem>Test</FormItem>
        </Form>
      </Wrapper>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("deve renderizar o FormDescription corretamente", () => {
    render(
      <Wrapper>
        <FormField
          name="test"
          render={() => <FormDescription>Description Text</FormDescription>}
        />
      </Wrapper>
    );

    expect(screen.getByText("Description Text")).toBeInTheDocument();
    expect(screen.getByText("Description Text")).toHaveClass("text-muted-foreground");
  });

  it("deve renderizar o FormMessage corretamente", () => {
    render(
      <Wrapper>
        <FormField
          name="test"
          render={() => <FormMessage>Error occurred</FormMessage>}
        />
      </Wrapper>
    );

    expect(screen.getByText("Error occurred")).toBeInTheDocument();
    expect(screen.getByText("Error occurred")).toHaveClass("text-destructive");
  });
});
