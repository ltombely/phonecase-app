import { render } from "@testing-library/react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const mockedChildren = jest.fn(() => <div />);

describe("MaxWidthWrapper component", () => {
    it("should render the component correctly", () => {
        const { container } = render(
            <MaxWidthWrapper children={mockedChildren()} />
        );
        
        expect(container).toBeDefined();
    });
});
