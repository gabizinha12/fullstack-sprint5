import { render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";

describe("Teste de snapshot MenuItem", () => {
  it("should render MenuItem", () => {
    const { container } = render(<MenuItem link="teste" label="abc" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
