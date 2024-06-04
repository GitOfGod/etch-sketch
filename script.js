let container = document.querySelector(".container");

function createDiv(className) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(className);
    return newDiv;
}

// Remember to substitute hardcoded iterator for function input gridSize
function createGrid(){
    for (let columns = 0; columns < 16; columns++ ) {
        let div = createDiv("column");
        for (let rows = 0; rows < 16; rows++ ) {
            let childDiv = createDiv("row");
            div.appendChild(childDiv);
        };
        container.appendChild(div);
    
    }; 
}


function changeColour(block) {
    block.style.backgroundColor = "blue";

}

createGrid(); 


window.addEventListener("DOMContentLoaded", (event) => {
    const blocks = document.querySelectorAll(".container > .column > .row");
    blocks.forEach( (block)  => {
        block.addEventListener("mouseover", () => changeColour(block));
    });

});
