let counterValueE1 = document.getElementById("counterValue");

let clickCount = localStorage.getItem("clickCount");

if (clickCount === null) {
    counterValueE1.textContent = 0;
} else {
    counterValueE1.textContent = clickCount;

}

function OnIncrementCount() {
    let previousCountValue = counterValueE1.textContent;

    let updatedCountValue = parseInt(previousCountValue) + 1;

    localStorage.setItem("clickCount", updatedCountValue);
    counterValueE1.textContent = updatedCountValue;
}