import { render } from "@testing-library/react";
import UserImage from "../UserImage";

describe("UserImage component", () => {
    it("should render correctly", () => {
        const tree = render(<UserImage src="/users/user-1.png" />);

        expect(tree).toMatchSnapshot();
    });
});
