import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
describe("componente do header", () => {
  it("o snapshot deve permanecer o mesmo", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
