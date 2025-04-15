let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];
let itemsListContainerE1 = document.getElementById("itemsListContainer");

function onDeleteItem(itemID) {
    let itemE1 = document.getElementById(itemID);
    itemsListContainerE1.removeChild(itemE1);
}

function createAndAppendItem(item) {
    let itemID = "item" + item.uniqueNo;
    let buttonID = "button" + item.uniqueNo;

    let itemE1 = document.createElement("li");
    itemE1.id = itemID;
    itemE1.classList.add("ordered-item");
    itemE1.textContent = item.itemName;
    itemsListContainerE1.appendChild(itemE1);

    let buttonE1 = document.createElement("button");
    buttonE1.textContent = "Cancel";
    buttonE1.id = buttonID;
    buttonE1.onclick = function() {
        onDeleteItem(itemID);
    }
    buttonE1.classList.add("btn", "btn-danger", "ml-3");
    itemE1.appendChild(buttonE1);
}


for (let item of itemList) {
    createAndAppendItem(item);
}