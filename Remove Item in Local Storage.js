let saveBtnE1 = document.getElementById("saveBtn");
let resetBtnE1 = document.getElementById("resetBtn");
let inputValueE1 = document.getElementById("inputValue");
let nameE1 = document.getElementById("name");

let storedName = localStorage.getItem("name");
if (storedName !== null) {
    nameE1.textContent = storedName;
} else {
    nameE1.textContent = "";
}


saveBtnE1.onclick = function() {
    let inputVal = inputValueE1.value;
    console.log(inputVal);
    localStorage.setItem("name", inputVal);
    nameE1.textContent = inputVal;
};

resetBtnE1.onclick = function() {
    inputValueE1.value = "";
    localStorage.removeItem("name");
}