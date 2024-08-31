import { render, screen } from "@testing-library/react";
import NavbarNavigationElements from "../NavbarNavigationElements";

describe("NavbarNavigationElements component", () => {
    it("should render correctly", () => {
        render(<NavbarNavigationElements isAdmin={false} user={false} />);

        const signInComponent = screen.getByText(/Sign Up/i);

        expect(signInComponent).toBeInTheDocument();

    });

});
