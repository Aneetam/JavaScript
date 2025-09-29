let userInput = document.getElementById("userInput");
let keydownCounter = document.getElementById("keydownCounter");
let keydownCode = document.getElementById("keydownCode");
let counter = 0;

userInput.addEventListener("keydown", function(event) {
    counter++;
    keydownCounter.textContent = counter;
    keydownCode.textContent = event.keyCode;


});