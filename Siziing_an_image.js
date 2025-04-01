let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let originalImageWidth = 200;
let minImageWidth = 100;
let maxImageWidth = 300;
let maxWidthWarningMessage = "Too Big!Decrease the size";
let minWidthWarningMessage = "Too Small!Increase the size";

imageElement.style.width = originalImageWidth + "px";
imageWidthElement.textContent = originalImageWidth + "px";

function onIncrement() {
    if (originalImageWidth >= maxImageWidth) {
        warningMessageElement.textContent = maxWidthWarningMessage;
    } else {
        originalImageWidth = originalImageWidth + 5;
        let updatedImageWidth = originalImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;


    }



}

function onDecrement() {
    if (originalImageWidth <= minImageWidth) {
        warningMessageElement.textContent = minWidthWarningMessage;
    } else {
        originalImageWidth = originalImageWidth - 5;
        let updatedImageWidth = originalImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;


    }



}