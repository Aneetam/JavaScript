let counterE1 = document.getElementById("counter");
let clearCountE1 = document.getElementById("clearCount");
let count = 0;

let intervalId = setInterval(function() {
    count = count + 1;
    counterE1.textContent = count;
}, 1000);

clearCountE1.onclick = function() {
    clearInterval(intervalId);
}