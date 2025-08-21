let timerE1 = document.getElementById("timer");
let defUserE1 = document.getElementById("defuser");

let countDown = 10;

let inetrvalId = setInterval(function() {
    countDown = countDown - 1;
    timerE1.textContent = countDown;
    if (countDown === 0) {
        timerE1.textContent = "BOOM";
        clearInterval(inetrvalId);
    }

}, 1000);

defUserE1.addEventListener("keydown", function(event) {
    let bombDefuserText = defUserE1.value;
    if (event.key === "Enter" && bombDefuserText === "defuse" && countDown !== 0) {
        timerE1.textContent = "You did it";
        clearInterval(inetrvalId);
    }

});