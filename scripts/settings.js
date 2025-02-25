// scripts/settings.js
document.addEventListener('DOMContentLoaded', function () {
  const saveApiKeyButton = document.querySelector('.input-section button');
  const savePreferencesButton = document.querySelectorAll('.input-section button')[1];

  // Handle API Key Save
  saveApiKeyButton.addEventListener('click', function () {
    const apiKey = document.querySelector('.input-section input[type="text"]').value;
    if (apiKey.trim() === '') {
      alert('Please enter an API key.');
      return;
    }
    alert(`API Key Saved: ${apiKey}`);
  });

  // Handle Preferences Save
  savePreferencesButton.addEventListener('click', function () {
    const resolution = document.querySelector('.input-section select').value;
    const style = document.querySelectorAll('.input-section select')[1].value;
    alert(`Preferences Saved: Resolution - ${resolution}, Style - ${style}`);
  });
});
