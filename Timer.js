let counterValueE1 = document.getElementById("counterValue");
let value = 0;

function onDecrement() {
    value = parseInt(counterValueE1.textContent);
    counterValueE1.textContent = "";
    if (value % 2 === 0) {
        value = value - 2;
        counterValueE1.textContent = value;

    } else {
        value = value - 1;
        counterValueE1.textContent = value;
    }

}

function onIncrement() {
    value = parseInt(counterValueE1.textContent);
    counterValueE1.textContent = "";
    if (value % 2 === 0) {
        value = value + 5;
        counterValueE1.textContent = value;

    } else {
        value = value + 10;
        counterValueE1.textContent = value;
    }

}

function onReset() {
    counterValueE1.textContent = 0;
}