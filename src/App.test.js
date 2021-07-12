import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Componente principal", () => {
  it("Mostrar o nome do banco", () => {
    render(<App />);
    expect(screen.getByText("Bytebank")).toBeInTheDocument();
  });
});
