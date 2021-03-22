const fetch = require("node-fetch");

async function fetchData(URL, bodyData) {
    const response = await fetch(`http://localhost:8081/${URL}`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
    });

    try {
        const data = await response.json();

        const allData = {
            Agreement: data.agreement,
            Confidence: data.confidence,
            Irony: data.irony,
            Model: data.model,
        };

        return allData;
    } catch (err) {
        return null;
    }
}
export { fetchData };
