import { render, screen } from "@testing-library/react";
import { Filters } from "./Filters";
import { ProductsContext } from "../../contexts/ProductsContext";
test("O componente Filter está sendo renderizado", () => {
  const setFilter = jest.fn();
  const filter = null;
  render(
    <ProductsContext.Provider value={{ filter, setFilter }}>
      <Filters />
    </ProductsContext.Provider>
  );
  const element = screen.getByTestId("filter");
  expect(element).toBeInTheDocument();
});
