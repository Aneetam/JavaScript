let consoleFormE1 = document.getElementById("consoleForm");
let requestUrlE1 = document.getElementById("requestUrl");
let requestUrlErrMsgE1 = document.getElementById("requestUrlErrMsg");
let requestMethodE1 = document.getElementById("requestMethod");

let requestBodyE1 = document.getElementById("requestBody");

let responseStatusE1 = document.getElementById("responseStatus");
let responseBodyE1 = document.getElementById("responseBody");

let formData = {
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: ""
};

requestUrlE1.addEventListener("change", function(event) {
    formData.requestUrl = event.target.value;
});

requestMethodE1.addEventListener("change", function(event) {
    formData.requestMethod = event.target.value;
});

requestBodyE1.addEventListener("change", function(event) {
    formData.requestBody = event.target.value;
});

function validateRequestUrl(formData) {
    let {
        requestUrl
    } = formData;
    if (requestUrl === "") {
        requestUrlErrMsgE1.textContent = "Required";
    } else {
        requestUrlErrMsgE1.textContent = "";
    }
}

function sendRequest(formData) {
    let {
        requestUrl,
        requestMethod,
        requestBody
    } = formData;

    let options = {
        method: requestMethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer a3708f12273b6e618d23ad97fe67e30af587bf9f5b8f6e8348ee7db0a4520f05"

        },
        body: requestBody
    };
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let responseStatus = jsonData.code;
            let responseBody = JSON.stringify(jsonData);
            responseStatusE1.value = responseStatus;
            responseBodyE1.value = responseBody;

        });

}

consoleFormE1.addEventListener("submit", function(event) {
    event.preventDefault();
    validateRequestUrl(formData);
    sendRequest(formData);
})