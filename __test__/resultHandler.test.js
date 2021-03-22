import { resultHandler } from "../src/client/js/resultHandler";

describe("Test the ResultHandler Functionality", () => {
    test("Test the resultHandler function", () => {
        const allData = {
            Agreement: "DISAGREEMENT",
            Confidence: "76",
            Irony: "IRONIC",
            Model: "general_en",
        };
        const images = [
            "https://cdn.pixabay.com/photo/2015/11/26/07/47/hands-1063442_1280.jpg",
            "https://cdn.pixabay.com/photo/2017/03/09/09/24/earth-2129001_1280.jpg",
            "https://images.unsplash.com/photo-1545804571-2cac41b26118?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            "https://images.unsplash.com/photo-1456081101716-74e616ab23d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
        ];

        let finalResult = "";

        Object.keys(allData).forEach((key, idx) => {
            finalResult += `
            <div class="box">
                <span>${key}</span>
                <div class="imgBox">
                    <div class="overlay"></div>
                    <img
                        src="${images[idx]}"
                        alt="${key}"
                    />
                </div>
                <p>${allData[key]}</p>
            </div>

            `;
        });

        expect(resultHandler(allData, images).includes("Agreement")).toEqual(
            true
        );
    });
});
