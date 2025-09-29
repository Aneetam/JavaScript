let buttonE1 = document.getElementById("button");

buttonE1.onclick = function() {
    buttonE1.textContent = "Loading";
}

setInterval(function() {
    buttonE1.textContent = "Show Loading for 1 sec";
}, 1000);