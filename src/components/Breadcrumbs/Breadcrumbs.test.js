import { render, screen } from "@testing-library/react";
import { Breadcrumbs } from "./Breadcrumbs";
import { CategoriasContext } from "../../contexts/CategoriasContext";
test("O componente Breadcrumbs está sendo renderizado", () => {
  render(
    <CategoriasContext>
      <Breadcrumbs />
    </CategoriasContext>
  );
  const element = screen.getByTestId("breadcrumb");
  expect(element).toBeInTheDocument();
});
