window.onload = function () {
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");
    // this is creating te speech bubble box from the speechbubble element //

    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";
    // This is saying, using the message box element, create a paragraph within the message box, and add the ... by default.

    speechBubbleElement.appendChild(messageBox);
    // this appends the writing in the message box inside the speech bubble


    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
    // this is the instruction telling the system to ouput your "strings"?
};

function showMessage() {
    let message = document.getElementById("message-text", "message-text2").value;
    let messageBox = document.getElementById("message-box", "message-box2");



}
