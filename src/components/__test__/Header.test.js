import { Footer } from "../Footer";
import { render, screen } from "@testing-library/react"

describe("Header Components", () => {

    test("heading", () => {
        render(<Footer />);
        const footerText = screen.getByTestId("footerText");
        expect(footerText).toBeTruthy();
    })
});