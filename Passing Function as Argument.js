/*function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning");

}

displayGreeting(function() {
    console.log("Aneeta");
});*/


function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning");

}

let displayRam = function() {
    console.log("Ram");
}

displayGreeting(displayRam);