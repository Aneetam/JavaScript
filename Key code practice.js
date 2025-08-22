let userInputE1 = document.getElementById("userInput");
let keyCodeListE1 = document.getElementById("keyCodeList");


function createAndAppendKeyCode(keycode) {
    let listItemE1 = document.createElement('li');
    listItemE1.textContent = keycode;
    keyCodeListE1.appendChild(listItemE1);
}

function onKeyDown(event) {
    createAndAppendKeyCode(event.keyCode);
}
userInputE1.addEventListener("keydown", onKeyDown);