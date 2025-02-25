// scripts/feature.js
document.addEventListener('DOMContentLoaded', function () {
  // Handle file upload for both Remove Background and Change Background
  document.getElementById('file-upload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const output = document.getElementById('preview');
      output.innerHTML = '';

      if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.style.maxWidth = '100%';
        output.appendChild(img);
      } else if (file.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.src = URL.createObjectURL(file);
        video.controls = true;
        video.style.maxWidth = '100%';
        output.appendChild(video);
      } else {
        output.innerHTML = '<p>Unsupported file type. Please upload an image or video.</p>';
      }
    }
  });

  // Handle Generate Button for Text-to-Image and Text-to-Video
  const generateButtons = document.querySelectorAll('.input-section button');
  generateButtons.forEach(button => {
    button.addEventListener('click', function () {
      const prompt = this.parentElement.querySelector('input[type="text"]').value;
      const previewSection = document.getElementById('preview');

      if (prompt.trim() === '') {
        alert('Please enter a text prompt.');
        return;
      }

      // Simulate image/video generation
      previewSection.innerHTML = `
        <p>Generating content for: "${prompt}"...</p>
        <img src="https://via.placeholder.com/500x300?text=Generated+Content" alt="Generated Content">
      `;
    });
  });

  // Handle Face Swap
  const faceSwapButton = document.querySelector('.input-section button');
  if (faceSwapButton) {
    faceSwapButton.addEventListener('click', function () {
      const sourceFace = document.getElementById('source-face').files[0];
      const targetFace = document.getElementById('target-face').files[0];
      const previewSection = document.getElementById('preview');

      if (!sourceFace || !targetFace) {
        alert('Please upload both source and target images.');
        return;
      }

      // Simulate face swap
      previewSection.innerHTML = `
        <p>Swapping faces...</p>
        <img src="https://via.placeholder.com/500x300?text=Swapped+Faces" alt="Swapped Faces">
      `;
    });
  }
});
