import { render, screen } from "@testing-library/react";
import { CategoriesItem } from "./CategoriesItem";

describe("Teste de snapshot CategoriesItem", () => {
  it("should render CategoriesItem", () => {
    const { container } = render(<CategoriesItem link="teste" label="abc" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
