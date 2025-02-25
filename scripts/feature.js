// scripts/feature.js
document.addEventListener('DOMContentLoaded', function () {
  const generateButton = document.querySelector('.input-section button');
  const previewSection = document.getElementById('preview');

  generateButton.addEventListener('click', function () {
    const prompt = document.querySelector('.input-section input').value;
    if (prompt.trim() === '') {
      alert('Please enter a text prompt.');
      return;
    }

    // Simulate image generation
    previewSection.innerHTML = `
      <p>Generating image for: "${prompt}"...</p>
      <img src="https://via.placeholder.com/500x300?text=Generated+Image" alt="Generated Image">
    `;
  });
});
