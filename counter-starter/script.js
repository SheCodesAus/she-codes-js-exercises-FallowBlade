// function add() {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     number = parseInt(number) + step;
//     numberElement.innerText = number;

// }


function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
}

function minus(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
}