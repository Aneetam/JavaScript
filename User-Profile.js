let profileDetails = {
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainerElement = document.getElementById("profileContainer");
profileContainerElement.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");

let imgContainerElement = document.getElementById("imgContainer");
let imageElement = document.createElement("img");
imageElement.src = profileDetails.imgSrc;
imageElement.classList.add("profile-picture");

imgContainerElement.appendChild(imageElement);

let headingElement = document.createElement("h1");
headingElement.textContent = profileDetails.name;
headingElement.classList.add("heading");
profileContainerElement.appendChild(headingElement);

let paragraphElement = document.createElement("p");
paragraphElement.textContent = "Age :" + profileDetails.age;
paragraphElement.classList.add("paragraph");
profileContainerElement.appendChild(paragraphElement);