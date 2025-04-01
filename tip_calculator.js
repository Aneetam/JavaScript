let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalInput = document.getElementById("totalAmount");
let errormessageElement = document.getElementById("errorMessage");
let errorMessage = "Please enter a valid input";

function calculateTip() {
    let billAmountInputValue = billAmountInput.value;
    let percentageTipInputValue = percentageTipInput.value;
    if (billAmountInputValue === "") {
        errormessageElement.textContent = errorMessage;
    } else if (percentageTipInputValue === "") {
        errormessageElement.textContent = errorMessage;
    } else {
        errormessageElement.textContent = "";
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipInputValue);
        let calculatedTip = (percentageTip / 100) * billAmount;
        let calculatedTotal = calculatedTip + billAmount;
        tipAmountInput.value = calculatedTip;
        totalInput.value = calculatedTotal;




    }
}