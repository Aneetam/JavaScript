let countries = {
    paris: "France",
    london: "United Kingdom",
    newYork: "USA",
    newDelhi: "India"
};

let countryname = document.getElementById("countryname");
let capitalSelect = document.getElementById("capitalSelect");

countryname.textContent = countries[capitalSelect.value];
capitalSelect.addEventListener("change", function() {
    let selectedCapital = capitalSelect.value;
    countryname.textContent = countries[selectedCapital];
});