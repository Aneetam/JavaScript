let messageE1 = document.getElementById("msg");
let saveBtnE1 = document.getElementById("saveBtn");
let clearBtnE1 = document.getElementById("clearBtn");
let storageKey = "userInput";
saveBtnE1.onclick = function() {
    let messageVal = messageE1.value;
    localStorage.setItem(storageKey, messageVal);
};
clearBtnE1.onclick = function() {

    localStorage.removeItem(storageKey);
    messageE1.value = "";
};