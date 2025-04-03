let bgColorInputE1 = document.getElementById("bgColorInput");
let fontColorInputE1 = document.getElementById("fontColorInput");
let fontSizeInputE1 = document.getElementById("fontSizeInput");
let fontWeightInputE1 = document.getElementById("fontWeightInput");
let paddingInputE1 = document.getElementById("paddingInput");
let borderRadiusInputE1 = document.getElementById("borderRadiusInput");
let customButtonInputE1 = document.getElementById("customButton");

function onApplyProperties() {

    let bgColorInput = bgColorInputE1.value;
    let fontColorInput = fontColorInputE1.value;
    let fontSizeInput = fontSizeInputE1.value;
    let fontWeightInput = fontWeightInputE1.value;
    let paddingInput = paddingInputE1.value;
    let borderRadiusInput = borderRadiusInputE1.value;

    customButtonInputE1.style.backgroundColor = bgColorInput;
    customButtonInputE1.style.color = fontColorInput;
    customButtonInputE1.style.fontSize = fontSizeInput;
    customButtonInputE1.style.fontWeight = fontWeightInput;
    customButtonInputE1.style.padding = paddingInput;
    customButtonInputE1.style.borderRadius = borderRadiusInput;



}