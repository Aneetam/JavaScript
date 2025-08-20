let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainerE1 = document.getElementById("wordsContainer");
let addBtnE1 = document.getElementById("addBtn");
let userInputE1 = document.getElementById("userInput");
let errorMsgE1 = document.getElementById("errorMsg");

function addWord(word) {
    let spanE1 = document.createElement("span");
    spanE1.textContent = word;
    spanE1.style.fontSize = Math.random() * 36 + "px";
    spanE1.style.margin = "8px";
    spanE1.style.display = "inline-block";
    //spanE1.classList.add("m-3");
    wordsContainerE1.appendChild(spanE1);
    userInputE1.value = "";
}
wordCloud.forEach(function(word) {

    addWord(word);

});

addBtnE1.onclick = function() {
    let userInputValue = userInputE1.value;
    if (userInputValue === "") {
        errorMsgE1.textContent = "Please enter a word";
    } else {
        addWord(userInputValue);
    }

};