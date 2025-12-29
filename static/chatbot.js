 
const API_URL = "http://localhost:5000/api/chat";
 
const chatbotMessages = document.getElementById("chatbot-messages");
const userInput = document.getElementById("user-input");

// ------------------------------
// Add message to chat
// ------------------------------
function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;
    chatbotMessages.appendChild(msg);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// ------------------------------
// Show typing indicator
// ------------------------------
function showTyping() {
    const typing = document.createElement("div");
    typing.classList.add("message", "bot");
    typing.id = "typing";
    typing.textContent = "AI is thinking...";
    chatbotMessages.appendChild(typing);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// ------------------------------
// Remove typing indicator
// ------------------------------
function removeTyping() {
    const typing = document.getElementById("typing");
    if (typing) typing.remove();
}

// ------------------------------
// Send message to backend
// ------------------------------
async function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    // Show user message
    addMessage(message, "user");
    userInput.value = "";

    // Show bot typing
    showTyping();

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: message })
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        removeTyping();
        addMessage(data.reply, "bot");

    } catch (error) {
        console.error(error);
        removeTyping();
        addMessage(
            "🚀 Sorry, I couldn't connect to the space AI. Try again later.",
            "bot"
        );
    }
}

// ------------------------------
// Send on Enter key
// ------------------------------
userInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
const toggleBtn = document.getElementById("chatbot-toggle");
const messages = document.getElementById("chatbot-messages");
const inputArea = document.getElementById("chatbot-input");

let minimized = false;

toggleBtn.addEventListener("click", function() {
    minimized = !minimized;

    if (minimized) {
        messages.style.display = "none";   // hide messages
        inputArea.style.display = "none";  // hide input
        toggleBtn.textContent = "➕";       // change button to “maximize”
    } else {
        messages.style.display = "block";  // show messages
        inputArea.style.display = "flex";  // show input
        toggleBtn.textContent = "➖";       // change back to “minimize”
    }
});

