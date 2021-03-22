function toggleClasses() {
    Client.globalVariables.form.classList.toggle("active-article-text");

    Client.globalVariables.urlLink.classList.toggle("active");
    Client.globalVariables.articleTextLink.classList.toggle("active");

    Client.globalVariables.urlInput.classList.toggle("active");
    Client.globalVariables.articleTextInput.classList.toggle("active");
}

export { toggleClasses };
