// Toggle chatbot visibility

const chatbotToggleButton = document.getElementById("chatbot-toggle");

const chatbotWindow = document.getElementById("chatbot-window");

const chatbotMessages = document.querySelector(".chatbot-messages");

// Toggle the chatbot window when the button is clicked

chatbotToggleButton.addEventListener("click", function () {
  if (
    chatbotWindow.style.display === "none" ||
    chatbotWindow.style.display === ""
  ) {
    chatbotWindow.style.display = "block";

    chatbotWindow.style.animation = "fadeIn 0.5s ease-in-out"; // Fade-in effect
  } else {
    chatbotWindow.style.display = "none";
  }
});
