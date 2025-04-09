/* Follow the instructions found in the description to complete the JavaScript functionality.*/
let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];


function createToDo(todo) {
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-items-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelInputElement = document.createElement("label");
    labelInputElement.textContent = todo.text;
    labelInputElement.classList.add("checkbox-label");
    labelContainer.appendChild(labelInputElement);

    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("delete-icon", "far", "fa-trash-alt");
    deleteContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createToDo(todo);
}