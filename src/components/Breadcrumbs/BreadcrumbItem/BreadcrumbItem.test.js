import { render, screen } from "@testing-library/react";
import { BreadcrumbItem } from "./BreadcrumbItem";

describe("Teste de snapshot BreadcrumbItem", () => {
  it("should render BreadcrumbItem", () => {
    const { container } = render(<BreadcrumbItem value="aaa" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
