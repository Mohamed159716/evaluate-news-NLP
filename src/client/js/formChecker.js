function formChecker(inputText) {
    if (!inputText.type) {
        return false;
    }

    if (inputText.value.trim().length < 0) {
        return false;
    }

    if (inputText.type === "url") {
        const regex = new RegExp(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        );

        if (regex.test(inputText.value)) {
            return true;
        }

        return false;
    } else {
        // Pattern to match not text
        const regex = new RegExp(
            /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/
        );

        if (regex.test(inputText.value)) {
            return false;
        }

        return true;
    }
}

export { formChecker };
