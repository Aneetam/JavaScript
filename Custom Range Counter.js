let fromUserInputE1 = document.getElementById("fromUserInput");
let toUserInputE1 = document.getElementById("toUserInput");
let counterTextE1 = document.getElementById("counterText");


function displayNumbers(fromValInteger, toValInteger) {
    let currentCount = fromValInteger;
    counterTextE1.textContent = currentCount;

    let timerId = setInterval(function() {
        if (currentCount < toValInteger) {
            currentCount += 1;
            counterTextE1.textContent = currentCount;

        } else {
            clearInterval(timerId);
        }
    }, 1000);
}

function onclickStart() {
    let fromVal = fromUserInputE1.value;
    let toVal = toUserInputE1.value;

    if (fromVal === "") {
        alert("Enter the from value");
    } else if (toVal === "") {
        alert("Enter the to value");
    } else {
        let fromValInteger = parseInt(fromVal);
        let toValInteger = parseInt(toVal);
        displayNumbers(fromValInteger, toValInteger);
    }
}