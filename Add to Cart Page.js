let cartItemTextInputElement = document.getElementById("cartItemTextInput");
let cartItemsContainerElement = document.getElementById("cartItemsContainer");

function onAddCartItem() {
    let cartItemText = cartItemTextInputElement.value;

    let cartItemE1 = document.createElement("li");
    cartItemE1.textContent = cartItemText;
    cartItemsContainerElement.appendChild(cartItemE1);

    cartItemTextInputElement.value = "";

}