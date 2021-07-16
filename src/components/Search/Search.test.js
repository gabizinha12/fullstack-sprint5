import { render, screen } from "@testing-library/react";
import { Search } from "./Search";

test("O componente Search está sendo renderizado.", () => {
  // Renderiza o Componente que queremos testar
  render(<Search />);

  // Pega o elemento que está dentro do componente
  const element = screen.getByTestId("searchInput");

  // Checa se o elemento está no HTML
  expect(element).toBeInTheDocument();
});
