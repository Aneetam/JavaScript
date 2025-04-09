let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];
let groceryListContainerElement = document.getElementById("groceryListContainer");

let headingElement = document.createElement("h1");
headingElement.textContent = "Grocery List";
headingElement.classList.add("heading");
groceryListContainerElement.appendChild(headingElement);

let itemsContainerElement = document.createElement("ul");
itemsContainerElement.classList.add("itemsContainer");
groceryListContainerElement.appendChild(itemsContainerElement);


for (let item of groceryList) {
    let listItemsElement = document.createElement("li");
    listItemsElement.textContent = item;
    listItemsElement.classList.add("listItems");
    itemsContainerElement.appendChild(listItemsElement);
}