let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

let totalSeconds = 0;
let intervalId = null;

// Function to update timer display
function updateTimerDisplay() {
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;

    minutesEl.textContent = String(mins).padStart(2, "0");
    secondsEl.textContent = String(secs).padStart(2, "0");
}

// Start button logic
startBtn.onclick = function() {
    // if (intervalId !== null) return; // prevent multiple intervals

    intervalId = setInterval(function() {
        totalSeconds++;

        if (totalSeconds >= 3600) { // 1 hour = 3600 seconds
            totalSeconds = 0; // reset back to 0
        }

        updateTimerDisplay();
    }, 1000);
};

// Stop button logic
stopBtn.onclick = function() {
    clearInterval(intervalId);
    intervalId = null; // allow resume later
};