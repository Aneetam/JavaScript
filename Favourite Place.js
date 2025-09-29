let submitBtn = document.getElementById("submitBtn");
let message = document.getElementById("message");



submitBtn.onclick = function() {
    const places = document.getElementsByName("place");
    console.log(places);
    let selectedPlace = "";
    for (let place of places) {
        if (place.checked) {
            selectedPlace = place.value;
            console.log(selectedPlace);
            break;
        }
    }
    message.textContent = `Selected Place ${selectedPlace}`;
};