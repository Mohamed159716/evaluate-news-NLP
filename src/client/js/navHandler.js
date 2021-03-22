function handleNav(event) {
    event.preventDefault();

    if (!event.target.classList.contains("active")) {
        Client.toggleClasses();

        Client.clearHandler();

        document.getElementById(
            "desc"
        ).innerHTML = event.target.dataset.desc.toUpperCase();
    }
}

export { handleNav };
