let sendGetRequestBtnE1 = document.getElementById("sendGetRequestBtn");
let loadingE1 = document.getElementById("loading");
let requestStatusE1 = document.getElementById("requestStatus");
let httpResponseE1 = document.getElementById("httpResponse");


function sendGetHTTPRequest() {
    let options = {
        method: "GET"
    };
    loadingE1.classList.remove("d-none");
    requestStatusE1.classList.add("d-none");

    fetch("https://gorest.co.in/public-api/users", options)
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

sendGetRequestBtnE1.addEventListener("click", sendGetHTTPRequest);