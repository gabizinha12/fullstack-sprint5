import { render, screen } from "@testing-library/react";
import { FilterItem } from "./FilterItem";

describe("Teste de snapshot FilterItem", () => {
  it("should render FilterItem", () => {
    const { container } = render(<FilterItem label="abc" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
