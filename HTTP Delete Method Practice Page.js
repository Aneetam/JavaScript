let userInputE1 = document.getElementById("userInput");
let sendDeleteRequestBtnE1 = document.getElementById("sendDeleteRequestBtn");
let requestStatusE1 = document.getElementById("requestStatus");
let httpResponseE1 = document.getElementById("httpResponse");
let loadingE1 = document.getElementById("loading");

function sendDeleteHttpRequest() {
    let userId = userInputE1.value;
    let requestUrl = "https://gorest.co.in/public-api/users/" + userId;

    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer a3708f12273b6e618d23ad97fe67e30af587bf9f5b8f6e8348ee7db0a4520f05"

        },

    };
    loadingE1.classList.remove("d-none");
    requestStatusE1.classList.add("d-none");
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {

            loadingE1.classList.add("d-none");
            requestStatusE1.classList.remove("d-none");

            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);

            requestStatusE1.textContent = requestStatus;
            httpResponseE1.textContent = httpResponse;

        });

}

sendDeleteRequestBtnE1.addEventListener("click", sendDeleteHttpRequest);