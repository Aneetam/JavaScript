let myForm = document.getElementById("myForm");
let name = document.getElementById("name");
let password = document.getElementById("password");
let nameErrMsg = document.getElementById("nameErrMsg");
let passwordErrMsg = document.getElementById("passwordErrMsg");
let resultMsg = document.getElementById("resultMsg");

name.addEventListener("blur", function() {
    if (name.value === "") {
        nameErrMsg.textContent = "Required*";
    } else {
        nameErrMsg.textContent = "";
    }
});

password.addEventListener("blur", function() {
    if (password.value === "") {
        passwordErrMsg.textContent = "Required*";
    } else {
        passwordErrMsg.textContent = "";
    }
});

myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let nameVal = name.value;
    let passwordVal = password.value;

    if (nameVal !== "" && passwordVal !== "") {
        resultMsg.textContent = "Login Success";
    } else {
        resultMsg.textContent = "Fill in the required details";
    }
});