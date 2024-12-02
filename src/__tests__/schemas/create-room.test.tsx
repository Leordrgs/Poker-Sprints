import { describe, it, expect } from "vitest";
import { createRoomSchema } from "@/schemas/create-room";

describe("createRoomSchema", () => {
  it("deve validar um título válido", () => {
    const validData = { title: "Título da Sala" };

    expect(() => createRoomSchema.parse(validData)).not.toThrow();
  });

  it("deve lançar um erro se o título estiver ausente", () => {
    const invalidData = {};

    expect(() => createRoomSchema.parse(invalidData)).toThrowError(
      "O título da sala é obrigatório"
    );
  });

  it("deve lançar um erro se o título não for uma string", () => {
    const invalidData = { title: 123 };

    expect(() => createRoomSchema.parse(invalidData)).toThrowError();
  });
});
