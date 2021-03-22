import { fetchData } from "../src/client/js/fetchHandler";

describe("Testing the Fetch functionality", () => {
    test("Check if the data returns correctly", async () => {
        const url = "https://jamesclear.com/";
        const response = await fetchData("getData", { url });

        // expect(response).toHaveProperty("Agreement");
        expect(Object.keys(response)).toEqual([
            "Agreement",
            "Confidence",
            "Irony",
            "Model",
        ]);
    });
});
