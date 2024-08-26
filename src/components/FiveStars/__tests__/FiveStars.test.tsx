import { render, screen } from "@testing-library/react";
import FiveStars from "../FiveStars";

describe("FiveStars component", () => {
    it("should render correctly", () => {
        const tree = render(<FiveStars />);

        expect(tree).toMatchSnapshot();
    });

    it("should have five stars in it", () => {
        render(<FiveStars />);

        const stars = screen.getByTestId("star-group");

        expect(stars.childElementCount).toBe(5);
    });
});
