let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let ingredientsList = recipeObj.ingredients;

let headingElement = document.getElementById("heading");
headingElement.textContent = recipeObj.title;

let imageElement = document.getElementById("pastaImage");
imageElement.src = recipeObj.imgSrc;

let ingredientsContainerElement = document.getElementById("ingredientsContainer");


function addInfredients(ingredients) {
    let ingredientsListElement = document.createElement("li");
    ingredientsListElement.textContent = ingredients;
    ingredientsListElement.classList.add("ingredients");
    ingredientsContainerElement.appendChild(ingredientsListElement);
}

for (let ingredients of ingredientsList) {
    addInfredients(ingredients);
}