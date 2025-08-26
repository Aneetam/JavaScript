let jokeTextE1 = document.getElementById("jokeText");
let jokeBtnE1 = document.getElementById("jokeBtn");
let spinnerE1 = document.getElementById("spinner");

function getJoke() {
    let requestUrl = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };
    spinnerE1.classList.remove("d-none");
    jokeTextE1.classList.add("d-none");
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();

        })
        .then(function(jsonData) {
            spinnerE1.classList.add("d-none");
            jokeTextE1.classList.remove("d-none");

            let randomJoke = jsonData.value;
            jokeTextE1.textContent = randomJoke;





        });
}
jokeBtnE1.addEventListener("click", getJoke);