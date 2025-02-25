// scripts/ai-gpt.js
document.addEventListener('DOMContentLoaded', function () {
  const chatInput = document.querySelector('.chat-box input');
  const chatButton = document.querySelector('.chat-box button');

  chatButton.addEventListener('click', function () {
    const question = chatInput.value.trim();
    if (question) {
      // Simulate AI GPT response
      const response = `AI GPT: You asked, "${question}". This is a placeholder response.`;
      alert(response);
    }
  });
});
