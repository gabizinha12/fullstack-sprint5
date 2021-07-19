import { render, screen } from "@testing-library/react";
import Menu from "./Menu";
import { Categories } from "../Categories/Categories";
import { CategoriasContext } from "../../contexts/CategoriasContext";
describe("Teste de snapshot Menu", () => {
  it("should render Menu", () => {
    const setCategorias = jest.fn();
    const categorias = null;
    const { container } = render(
      <Menu>
        <CategoriasContext.Provider value={{ categorias, setCategorias }}>
          <Categories />
        </CategoriasContext.Provider>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
