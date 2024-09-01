import { render, screen } from "@testing-library/react";
import CreateCaseButton from "../CreateCaseButton";

jest.mock("next/navigation", () => {
  useRouter: jest.fn();
});

describe("CreateCaseButton component", () => {
  it('should go to the url "/configure/upload" when clicked', () => {
    const push = jest.fn();
    

    render(<CreateCaseButton />);

    screen.getByText(/Create Case/i);
  });
});
