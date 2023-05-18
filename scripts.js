let colour = "black";
let click = false;

// this will wait for the HTML to load its content and the CSS to do the styling before any work
document.addEventListener("DOMContentLoaded", function() {
    createContainer(16);

    document.querySelector("body").addEventListener("click", function(e) {
        // this allows to control the drawing, meaning when to carry on and when to stop by just a click
        if (e.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.querySelector(".draw");
            if (click) {
                draw.innerHTML = "Now you can draw";
            }
            else {
                draw.innerHTML = "You cannot draw now";
            }
        }
    });

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
    if (click) {
        if (colour == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = "black";
        }
    }
}

function setColour(chosenColour) {
    colour = chosenColour;
}

function setToBlack() {
    setColour("black");
}

let blackBtn = document.querySelector(".black");
blackBtn.addEventListener("click", setToBlack);

function setToRandom() {
    setColour("random");
}

let randomBtn = document.querySelector(".random");
randomBtn.addEventListener("click", setToRandom);

function resetContainer() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector(".reset").addEventListener("click", resetContainer);