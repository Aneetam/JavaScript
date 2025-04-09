let checkboxWithLabelContainerElement = document.getElementById("checkboxWithLabelContainer");
checkboxWithLabelContainerElement.classList.add("checkboxWithLabelContainer", "d-flex", "flex-row", "justify-content-center");
let checkboxid = "checkbox";
let checkboxLabel = "checkboxLabel";
let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = checkboxid;
inputElement.classList.add("checkbox-input");
checkboxWithLabelContainerElement.appendChild(inputElement);


let labelInputElement = document.createElement("label");
labelInputElement.textContent = "Click Me!";
labelInputElement.setAttribute("for", checkboxid);
labelInputElement.id = checkboxLabel;
labelInputElement.classList.add("checkbox-label");
checkboxWithLabelContainerElement.appendChild(labelInputElement);