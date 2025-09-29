let textInputE1 = document.getElementById("textInput");
let saveBtnE1 = document.getElementById("saveBtn");

let savedStory = localStorage.getItem("yourStory");
if (savedStory) {
    textInputE1.textContent = savedStory;
}

saveBtnE1.addEventListener("click", function() {
    let inputVal = textInputE1.value;
    if (inputVal !== "") {
        localStorage.setItem("yourStory", inputVal);
    }
})