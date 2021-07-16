import { Footer } from "./Footer";
import { render, screen } from "@testing-library/react";

test("O componente renderiza sem errors", () => {
  render(<Footer />);
  const element = screen.getByText("Receba ofertas e novidades por e-mail");
  expect(element).toBeInTheDocument();
});
