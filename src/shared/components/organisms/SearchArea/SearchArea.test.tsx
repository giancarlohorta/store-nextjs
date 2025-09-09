import { fireEvent, render, screen } from "@testing-library/react";
import SearchArea from "./SearchArea";

describe("SearchArea", () => {
  const setup = (count = 0) => {
    render(<SearchArea count={count} />);
    const input = screen.getByRole("textbox");
    return { input };
  };

  describe("Input behavior", () => {
    it("calls onEnter with correct value on Enter key", () => {
      const { input } = setup();

      fireEvent.change(input, { target: { value: "Samsung" } });
      fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    });

    it("renders input with correct placeholder", () => {
      const { input } = setup();
      expect(input).toHaveAttribute(
        "placeholder",
        "Search for a smartphone..."
      );
    });
  });

  describe("Results display", () => {
    it("displays result count text when filter is closed", () => {
      setup(3);
      expect(screen.getByText(/3 results/i)).toBeInTheDocument();
    });

    it("hides result count when filter is opened", () => {
      setup(3);

      const filterToggle = screen.getByRole("button", { name: /filtrar/i });
      fireEvent.click(filterToggle);

      expect(screen.queryByText(/3 results/i)).not.toBeInTheDocument();
    });
  });
});
