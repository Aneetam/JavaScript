let getActivityBtn = document.getElementById("getActivityBtn");
let result = document.getElementById("result");
let spinner = document.getElementById("spinner");
let activityName = document.getElementById("activityName");
let activityType = document.getElementById("activityType");
let activityImg = document.getElementById("activityImg");

function getActivity() {
    let requestUrl = "https://apis.ccbp.in/random-activity";
    let options = {
        method: "GET"

    };
    result.classList.add("d-none");
    spinner.classList.remove("d-none");
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            result.classList.remove("d-none");
            spinner.classList.add("d-none");


            activityName.textContent = jsonData.activity;
            activityType.textContent = jsonData.type;
            activityImg.textContent = jsonData.image;
        });

}
getActivityBtn.addEventListener("click", getActivity);