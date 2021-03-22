function showClearBtn(event) {
    event.target.value.length > 0
        ? Client.globalVariables.emptyBtn.classList.add("active")
        : Client.globalVariables.emptyBtn.classList.remove("active");
}

export { showClearBtn };
