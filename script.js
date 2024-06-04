let container = document.querySelector(".container");

function createDiv(className) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(className);
    return newDiv;
}

// Remember to substitute hardcoded iterator for function input gridSize
function createGrid(size = 4){
    for (let columns = 0; columns < size; columns++ ) {
        let div = createDiv("column");
        for (let rows = 0; rows < size; rows++ ) {
            let childDiv = createDiv("row");
            div.appendChild(childDiv);
        };
        container.appendChild(div);
    
    }; 
}

// change block colour function
function changeColour(block) {
    block.style.backgroundColor = "blue";

}

// function to change grid size
function changeGridSize() {
    let size = Number(prompt("Insert size of grid. This number needs to be less than 100"));
    if (size > 0 && size <= 100) {
        createGrid(size); 
    }
}

createGrid(); 

window.addEventListener("DOMContentLoaded", (event) => {
    const blocks = document.querySelectorAll(".container > .column > .row");
    blocks.forEach( (block)  => {
        block.addEventListener("mouseover", () => changeColour(block));
    });

});

// gridSize event listener
const gridSelector = document.querySelector("#gridSelector");
gridSelector.addEventListener("click", () => changeGridSize);

/*gridSelector.addEventListener("click", changeGridSize()); */