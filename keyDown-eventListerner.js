let inputElement = document.createElement("input");

function printKeyDown(event) {
    console.log("Key pressed");
    console.log(event.type);
    console.log(event.target);
    console.log(event.key);

}

inputElement.addEventListener("keydown", printKeyDown);
document.body.appendChild(inputElement);