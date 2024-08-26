import { render, screen } from "@testing-library/react";
import CheckList from "../CheckList";

describe("CheckList component", () => {
    it("should render the component correctly", () => {
        const tree = render(<CheckList />);
        expect(tree).toMatchSnapshot();
    });

    it("should render all 3 checks", () => {
        render(<CheckList />);

        const listItems = screen.getAllByRole("listitem");

        expect(listItems).toHaveLength(3);
    });
});
