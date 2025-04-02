let h1Element = document.createElement('h1');
h1Element.textContent = "Web Technologies";
document.body.appendChild(h1Element);
let containerElement = document.getElementById("myContainer");
containerElement.appendChild(h1Element);
let btnElement = document.createElement('button');
btnElement.textContent = "Change Heading";
btnElement.onclick = function() {
    h1Element.textContent = "4.0 Technologies";
    h1Element.classList.add('heading');

}
containerElement.appendChild(btnElement);

let removeStyleButtonElement = document.createElement('button');
removeStyleButtonElement.textContent = "Remove Styles";
removeStyleButtonElement.onclick = function() {
    h1Element.classList.remove('heading');
}
containerElement.appendChild(removeStyleButtonElement);