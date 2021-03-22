import { formChecker } from "../src/client/js/formChecker";

describe("Test the Form functionality", () => {
    test("Check the URL", () => {
        const url = {
            type: "url",
            value: "https://jamesclear.com/getting-simple",
        };
        expect(formChecker(url)).toBe(true);
    });

    test("Check the texts in textarea", () => {
        const txt = {
            type: "textarea",
            value:
                "Of course, the greatest reward has been hearing from readers. It seems like nearly every day someone tells me that Atomic Habits helped them lose weight or start a business or make some positive change in their life. People are finding real value in the ideas and it feels great to produce something useful.",
        };

        expect(formChecker(txt)).toBe(true);
    });
});
