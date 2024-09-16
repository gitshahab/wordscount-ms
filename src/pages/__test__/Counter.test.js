import { render, screen, waitFor } from "@testing-library/react";
import { Counter, Joke, PageNotFound, Title } from "../index";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";


describe("Counter test", () => {
    test("render the textarea", () => {
        const { getByTestId } = render(<Counter />);
        const textArea = getByTestId("counterTextarea");
        expect(textArea).toBeTruthy();
    });
    
    test("render the char result", () => {
        const { getByTestId } = render(<Counter />);
        const counterChar = getByTestId("counterChar");
        expect(counterChar.innerHTML).toBe("Characters: 0");
    });

    test("render the word result", () => {
        render(<Counter />);
        const counterWord = screen.getByTestId("counterWord");
        expect(counterWord).toBeTruthy();
    });

    test("render textarea and update result", () => {
        render(<Counter />);
        const counterTextarea = screen.getByTestId("counterTextarea");
        const counterChar = screen.getByTestId("counterChar");
        const counterWord = screen.getByTestId("counterWord");

        userEvent.type(counterTextarea, "Hello World");
        expect(counterChar.innerHTML).toBe("Characters: 11");
        expect(counterWord.innerHTML).toBe("Words: 2");
    });

});

describe("Test WordsCounter Heading", () => {
    
    test("test heading and sub heading", () => {
        render(<Title heading="Word Counter" para="This is sub Heading" />)
        const titleHeading = screen.getByTestId("titleHeading");
        const titlepara = screen.getByTestId("titleText");
        expect(titleHeading.innerHTML).toBe("Word Counter");
        expect(titlepara.innerHTML).toBe("This is sub Heading");
    });

    test("test jokeText", async () => {
        render(<Joke />);
        const jokeText = screen.getByTestId("jokeText");
        await waitFor(() => {
            expect(jokeText.innerHTML).toBeTruthy();
        });
    });
});


describe("Page Not Found test", () => {

    test("render text and image", () => {
        const { getByTestId, getAllByAltText } = render(<PageNotFound />, {wrapper: BrowserRouter});
        const pnfText = getByTestId("pnfText");
        const pnfImg = getAllByAltText("page not found");
        expect(pnfText).toBeTruthy();
        expect(pnfImg).toBeTruthy();
    });
});