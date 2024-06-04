let container = document.querySelector(".container");

function createDiv(className) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(className);
    return newDiv;
}

// Change block colour function
function changeColour(block) {   
    block.style.backgroundColor = getRandomColour();

}

//Generate random RGB values
function getRandomColour() {
    let round = Math.floor;
    let random = Math.random();
    let max = 256;
    let colour = `rgb(${round(random * max)}, ${round(random * max)}, ${round(random * max)})` 
    return colour;
}


// Generate grid using user input or default
function createGrid(size = 4){
    for (let columns = 0; columns < size; columns++ ) {
        let div = createDiv("column");
        for (let rows = 0; rows < size; rows++ ) {
            let childDiv = createDiv("row");
            div.appendChild(childDiv);
        };
        container.appendChild(div);
    
    }; 
    const blocks = document.querySelectorAll(".container > .column > .row");
    blocks.forEach( (block)  => {
        block.addEventListener("mouseover", () => changeColour(block));
    });
    

}



function removeGrid() {
    const columns = document.querySelectorAll(".container > .column");
    columns.forEach( (column)  => {
        column.remove();
    })
}

// function to change grid size
function changeGridSize() {
    let size = Number(prompt("Insert size of grid. This number needs to be less than 100"));
    if (size > 0 && size <= 100) {
        removeGrid();
        createGrid(size); 
    }
}

createGrid(); 

// gridSize event listener
const gridSelector = document.querySelector("#gridSelector");
gridSelector.addEventListener("click", () => changeGridSize());
