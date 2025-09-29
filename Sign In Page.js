let inputElementE1 = document.getElementById("inputElement");
let passwordElementE1 = document.getElementById("passwordElement");
let messageTextE1 = document.getElementById("messageText");

function signIn() {
    if (inputElementE1.value === "") {
        messageTextE1.textContent = "Please enter your name";
    } else if (passwordElementE1.value === "") {
        messageTextE1.textContent = "Please enter your password";
    } else if (inputElementE1.value !== "" && passwordElementE1.value !== "") {
        messageTextE1.textContent = "Welcome";
    }
}