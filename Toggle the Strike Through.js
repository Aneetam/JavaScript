let checkBoxWithLabelContainerE1 = document.getElementById("checkBoxWithLabelContainer");
let checkBoxId = "checkbox";
let labelId = "checkboxLabel";


function onToDoStatusChange(checkBoxId, labelId) {
    let checkBoxElement = document.getElementById(checkBoxId);
    let labelElement = document.getElementById(labelId);
    /* if (checkBoxElement.checked === true) {
         labelElement.classList.add("checked");
     } else {
         labelElement.classList.remove("checked");
     }*/
    labelElement.classList.toggle("checked");

}
let checkBoxInputE1 = document.createElement("input");
checkBoxInputE1.type = "checkbox";
checkBoxInputE1.id = checkBoxId;
checkBoxInputE1.classList.add("checkbox-input");
checkBoxInputE1.onclick = function() {
    onToDoStatusChange(checkBoxId, labelId);
}
checkBoxWithLabelContainerE1.appendChild(checkBoxInputE1);


let labelInputE1 = document.createElement("label");
labelInputE1.textContent = "I am a label";
labelInputE1.setAttribute("for", checkBoxId);
labelInputE1.id = labelId;
labelInputE1.classList.add("pl-3");
checkBoxWithLabelContainerE1.appendChild(labelInputE1);