async function handleSubmit(event) {
    event.preventDefault();

    const url = Client.globalVariables.urlInput.value;
    const txt = Client.globalVariables.articleTextInput.value;

    let loader = `
        <div class="loader">
            <div class="loading">
                <div></div>
            </div>
        </div>
    `;

    Client.globalVariables.resultBox.innerHTML = loader;

    const inputText =
        (url && { type: "url", value: url }) ||
        (txt && { type: "textarea", value: txt });

    let checker = Client.formChecker(inputText);

    if (checker) {
        if (url) {
            const data = await Client.fetchData("getData", { url });

            Client.globalVariables.resultBox.innerHTML = Client.resultHandler(
                data,
                Client.globalVariables.images
            );
        } else {
            window.scrollTo(700, 700);

            const data = await Client.fetchData("getArticleData", { txt });

            Client.globalVariables.resultBox.innerHTML = Client.resultHandler(
                data,
                Client.globalVariables.images
            );
        }
    } else {
        Client.globalVariables.resultBox.innerHTML =
            '<div class="error">Error, No Data</div>';
    }
}

export { handleSubmit };
