let updatePasswordFormE1 = document.getElementById("updatePasswordForm");
let newPasswordE1 = document.getElementById("newPassword");
let confirmPasswordE1 = document.getElementById("confirmPassword");
let confirmPasswordErrMsgE1 = document.getElementById("confirmPasswordErrMsg");
let newPasswordErrMsgE1 = document.getElementById("newPasswordErrMsg");


function validateNewPassword() {
    if (newPasswordE1.value === "") {
        newPasswordErrMsgE1.textContent = "Required";
    } else {
        newPasswordErrMsgE1.textContent = "";
    }
}

function validateConfirmNewPassword() {
    let newPassword = newPasswordE1.value;
    let confirmPassword = confirmPasswordE1.value;

    if (newPassword !== confirmPassword) {
        confirmPasswordErrMsgE1.textContent = "Password must be same";
    } else {
        confirmPasswordErrMsgE1.textContent = "";
    }
}
newPasswordE1.addEventListener("blur", validateNewPassword);
confirmPasswordE1.addEventListener("blur", validateConfirmNewPassword);


updatePasswordFormE1.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConfirmNewPassword();
});