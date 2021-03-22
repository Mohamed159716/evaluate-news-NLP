function clearHandler() {
    Client.globalVariables.urlInput.value = "";
    Client.globalVariables.articleTextInput.value = "";
    Client.globalVariables.emptyBtn.classList.remove("active");

    Client.globalVariables.resultBox.innerHTML = "";
}

export { clearHandler };
