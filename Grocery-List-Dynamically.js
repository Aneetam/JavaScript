let bgContainerE1 = document.createElement("div");
bgContainerE1.classList.add("bg-container");
document.body.appendChild(bgContainerE1);

let headingE1 = document.createElement("h1");
headingE1.classList.add("heading");
headingE1.textContent = "Grocery List";
bgContainerE1.appendChild(headingE1);

let listContainerE1 = document.createElement("ul");
listContainerE1.classList.add("list-container");
bgContainerE1.appendChild(listContainerE1);

let groceryItemsList = ["Milk", "Peanut Butter", "Choco Chips", "Tomato Sauce", "Cup Cakes", "Noodles"];
for (let groceryItem of groceryItemsList) {
    let ListItemE1 = document.createElement("li");
    ListItemE1.textContent = groceryItem;
    listContainerE1.appendChild(ListItemE1);
}

let checkBoxE1 = document.createElement("input");
checkBoxE1.type = "checkbox";
checkBoxE1.id = "delivertMode";
bgContainerE1.appendChild(checkBoxE1);

let labelE1 = document.createElement("label");
labelE1.setAttribute("for", "delivertMode");
labelE1.classList.add("delivery-text");
labelE1.textContent = "Need Home Delivery";
bgContainerE1.appendChild(labelE1);

let breakE1 = document.createElement("br");
bgContainerE1.appendChild(breakE1);

let buttonE1 = document.createElement("button");
buttonE1.classList.add("btn", "btn-primary");
buttonE1.textContent = "Proceed To Pay";
bgContainerE1.appendChild(buttonE1);