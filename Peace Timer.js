let twentySecondsBtnE1 = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnE1 = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnE1 = document.getElementById("fortySecondsBtn");
let oneMinuteBtnE1 = document.getElementById("oneMinuteBtn");
let timerTextE1 = document.getElementById("timerText");

let secondsLeft = 0;
let timerCompletedText = "Ypur moment is complete";
let timerId;


function clearPreviousTimers() {
    clearInterval(timerId);
}
twentySecondsBtnE1.onclick = function() {
    secondsLeft = 20;
    clearPreviousTimers();
    setTimerAndShow();
}
fortySecondsBtnE1.onclick = function() {
    secondsLeft = 40;
    clearPreviousTimers();
    setTimerAndShow();
}
thirtySecondsBtnE1.onclick = function() {
    secondsLeft = 30;
    clearPreviousTimers();
    setTimerAndShow();
}
oneMinuteBtnE1.onclick = function() {
    secondsLeft = 60;
    clearPreviousTimers();
    setTimerAndShow();
}

function setTimerAndShow() {
    timerTextE1.textContent = secondsLeft + "seconds left";
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerTextE1.textContent = secondsLeft + "seconds left";

    } else {
        clearPreviousTimers();
        timerTextE1.textContent = timerCompletedText;
    }
}