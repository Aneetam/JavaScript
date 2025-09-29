let searchInput = document.getElementById("searchInput");
let spinner = document.getElementById("spinner");
let searchResults = document.getElementById("searchResults");

let searchInputVal = "";
let bikesList = [];

function createAndAppendBike(bike) {

    let bikeE1 = document.createElement("div");
    bikeE1.classList.add("bike-card", "d-flex", "flex-column");
    searchResults.appendChild(bikeE1);

    let bikeName = document.createElement("p");
    bikeName.textContent = "Bike Name :" + bike.name;
    bikeE1.appendChild(bikeName);

    let bikeCity = document.createElement("p");
    bikeCity.textContent = "City:" + bike.city;
    bikeE1.appendChild(bikeCity);



}

function displaySearchResults() {
    for (let bike of bikesList) {
        let bikeName = bike.name;
        if (bikeName.includes(searchInputVal)) {
            createAndAppendBike(bike);
        }
    }

}

function getBikes() {
    let url = "https://apis.ccbp.in/city-bikes?bike_name=";
    let options = {
        method: "GET"
    };

    spinner.classList.remove("d-none");
    searchResults.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            searchResults.classList.remove("d-none");
            bikesList = jsonData;
            displaySearchResults();
        });
}

getBikes();

function onChangeSearchInput(event) {
    searchInputVal = event.target.value;
    getBikes();


}
searchInput.addEventListener("keyup", onChangeSearchInput);