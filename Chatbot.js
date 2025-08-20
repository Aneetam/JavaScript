let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainerE1 = document.getElementById("chatContainer");
let userInputE1 = document.getElementById("userInput");
let sendMsgBtnE1 = document.getElementById("sendMsgBtn");



sendMsgBtnE1.onclick = function() {
    let userInputValue = userInputE1.value;
    if (userInputValue === "") {
        return;
    }
    let userMsgE1 = document.createElement("div");
    userMsgE1.textContent = userInputValue;
    userMsgE1.classList.add("msg-to-chatbot-container", "msg-to-chatbot");
    chatContainerE1.appendChild(userMsgE1);
    userInputE1.value = "";

    let chatBotReply = chatbotMsgList[Math.floor(Math.random() * chatbotMsgList.length)];
    let chatBotMsgE1 = document.createElement("div");
    chatBotMsgE1.textContent = chatBotReply;
    chatBotMsgE1.classList.add("msg-from-chatbot-container", "msg-from-chatbot");
    chatContainerE1.appendChild(chatBotMsgE1);

};