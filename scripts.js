let colour = "black";

// this will wait for the HTML to load its content and the CSS to do the styling before any work
document.addEventListener("DOMContentLoaded", function() {
    createContainer(16);

    let select = document.querySelector(".select");
    select.addEventListener("click", function() {
        let size = getSize();
        createContainer(size);
    });
});

function createContainer(size) {
    let container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberOfDivs = size * size;

    for (let i = 0; i < numberOfDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colourDiv);
        container.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let choice = prompt("Please provide the sie of the container");
    let message = document.querySelector(".message");

    if (choice == "") {
        message.innerHTML = "Provide a number between 1 and 100";
    } 
    else if (choice < 0 || choice > 100) {
        message.innerHTML = "Please a number between 1 and 100 to play!";
    }
    else {
        message.innerHTML = "Play!";
        return choice;
    }
}

function colourDiv() {
    if (colour == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        console.log(colour);
    }
    else {
        this.style.backgroundColor = "black";
        console.log(colour);
    }
}

function setColour(chosenColour) {
    colour = chosenColour;
}