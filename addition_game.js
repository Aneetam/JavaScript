let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congragulations!You got it right";
let errorMessage = "Please try again";

function restartGame() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);
    userInputElement.textContent = "";
    gameResultElement.textContent = "";

}
restartGame();

function checkResult() {
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let secondRandomInteger = parseInt(secondNumberElement.textContent);
    let userEnteredSum = parseInt(userInputElement.textContent);

    let sumOfTwoRandomIntergers = firstRandomInteger + secondRandomInteger;
    if (userEnteredSum === sumOfTwoRandomIntergers) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "#028a0f";

    } else {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "#1e217c";

    }


}