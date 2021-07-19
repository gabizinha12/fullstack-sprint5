import { render, screen } from "@testing-library/react";
import { Breadcrumbs } from "./Breadcrumbs";
import { CategoriasContext } from "../../contexts/CategoriasContext";
test("O componente Breadcrumbs está sendo renderizado", () => {
  const setCategorias = jest.fn();
  const categorias = null;
  render(
    <CategoriasContext.Provider value={{ categorias, setCategorias }}>
      <Breadcrumbs />
    </CategoriasContext.Provider>
  );
  const element = screen.getByTestId("breadcrumb");
  expect(element).toBeInTheDocument();
});
