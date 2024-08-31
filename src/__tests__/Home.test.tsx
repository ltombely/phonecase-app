import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("should render the main home page", () => {
    const tree = render(<Home />);

    expect(tree).toBeDefined();
  });
});
