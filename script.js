let container = document.querySelector(".container");

function createDiv(className) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(className);
    return newDiv;
}

for (let rows = 0; rows < 16; rows++ ) {
    let div = createDiv("row");
    for (let columns = 0; columns < 16; columns++ ) {
        let childDiv = createDiv("column");
        div.appendChild(childDiv);
    };
    container.appendChild(div);

};

