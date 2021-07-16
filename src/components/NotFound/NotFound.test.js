import { render, screen } from "@testing-library/react";
import { NotFound } from "./NotFound";
import { BrowserRouter } from "react-router-dom";

describe("Teste de snapshot not found", () => {
  it("should render not found", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  // it("should render without errors", () => {
  //   const { container } = render(
  //     <BrowserRouter>
  //       <NotFound />
  //     </BrowserRouter>
  //   );
  //   const element = screen.getByText(
  //     "Ops! Parece que a página que você está procurando não existe"
  //   );
  //   expect(element).toBeInTheDocument();
  // });
});
