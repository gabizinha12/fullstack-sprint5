import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { BrowserRouter } from "react-router-dom";

describe("Teste de snapshot produto", () => {
  it("should render product", () => {
    const { container } = render(
      <BrowserRouter>
        <Product
          description="teste"
          image="aaa"
          price="10,99"
          name="abc"
          sku="10"
        />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
