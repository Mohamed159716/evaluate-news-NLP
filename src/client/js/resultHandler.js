const resultHandler = (allData, images) => {
    let itemsBox = "";
    Object.keys(allData).forEach(
        (key, index) =>
            (itemsBox += `
            <div class="box">
                <span>${key}</span>
                <div class="imgBox">
                    <div class="overlay"></div>
                    <img
                        src="${images[index]}"
                        alt="${key}"
                    />
                </div>
                <p>${allData[key]}</p>
            </div>`)
    );

    return itemsBox;
};

export { resultHandler };
