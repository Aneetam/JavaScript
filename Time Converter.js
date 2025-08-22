let convertBtnE1 = document.getElementById("convertBtn");
let hoursInputE1 = document.getElementById("hoursInput");
let minutesInputE1 = document.getElementById("minutesInput");
let timeinSecondsE1 = document.getElementById("timeInSeconds");
let errorMsgE1 = document.getElementById("errorMsg");

let errorMessageForHours = "Please enter a valid number for hours";
let errorMessageForMinutes = "Please enter a valid number for minutes";

function calculateTimeInSeconds() {
    let hoursInputVal = hoursInputE1.value.trim();
    let minutesInputVal = minutesInputE1.value.trim();
    if (hoursInputVal === "") {
        errorMsgE1.textContent = errorMessageForHours;
        timeinSecondsE1.textContent = "";
    } else if (minutesInputVal === "") {
        errorMsgE1.textContent = errorMessageForMinutes;
        timeinSecondsE1.textContent = "";
    } else {
        errorMsgE1.textContent = "";
        let secondsValue = hoursInputVal * 3600 + minutesInputVal * 60;
        timeinSecondsE1.textContent = secondsValue;
        //timeinSecondsE1.classList.add("time-seconds");

    }

}
convertBtnE1.addEventListener("click", calculateTimeInSeconds);