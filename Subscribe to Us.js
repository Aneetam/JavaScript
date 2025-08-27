let subscribeFormE1 = document.getElementById("subscribeForm");

let nameE1 = document.getElementById("name");
let emailE1 = document.getElementById("email");

let nameErrMsgE1 = document.getElementById("nameErrMsg");
let emailErrMsgE1 = document.getElementById("emailErrMsg");


nameE1.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgE1.textContent = "Required";
    } else {
        nameErrMsgE1.textContent = "";
    }
});

emailE1.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgE1.textContent = "Required";
    } else {
        emailErrMsgE1.textContent = "";
    }
});

subscribeFormE1.addEventListener("submit", function(event) {
    event.preventDefault();
})