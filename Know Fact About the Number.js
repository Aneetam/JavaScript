let userInputE1 = document.getElementById("userInput");
let spinnerE1 = document.getElementById("spinner");
let factE1 = document.getElementById("fact");

function getKnowFactAboutNumber(event) {

    if (event.key === "Enter") {
        let userInputVal = userInputE1.value;
        if (userInputVal === "") {
            alert("Enter a number");
            return;
        }

        let requestUrl = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
        let options = {
            method: "GET"
        };

        spinnerE1.classList.remove("d-none");
        factE1.classList.add("d-none");

        fetch(requestUrl, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {

                //let factValue = jsonData.fact;
                let {
                    fact
                } = jsonData;
                spinnerE1.classList.add("d-none");
                factE1.classList.remove("d-none");
                factE1.textContent = fact;
                //factE1.textContent = factValue;

            });



    }



}
userInputE1.addEventListener("keydown", getKnowFactAboutNumber);