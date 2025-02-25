// scripts/feature.js
document.addEventListener('DOMContentLoaded', function () {
  // Handle file upload for both Remove Background and Change Background
  document.getElementById('file-upload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const output = document.getElementById('output');
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

  // Change background functionality
  function changeBackground(background) {
    const output = document.getElementById('output');
    const media = output.querySelector('img, video');
    if (media) {
      media.style.backgroundColor = background === 'beach' ? '#87CEEB' :
                                    background === 'city' ? '#A9A9A9' :
                                    background === 'forest' ? '#228B22' : 'transparent';
    }
  }

  // Handle Convert to Speech Button
  document.getElementById('speak-button').addEventListener('click', function () {
    const text = document.getElementById('text-input').value;
    const audioOutput = document.getElementById('audio-output');

    if (text.trim() === '') {
      alert('Please enter some text.');
      return;
    }

    // Use the Web Speech API to convert text to speech
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Set voice and language (optional)
    utterance.lang = 'en-US'; // Default to English (US)
    utterance.voice = synth.getVoices().find(voice => voice.lang === 'en-US');

    // Play the speech
    synth.speak(utterance);

    // Display the audio controls (optional)
    audioOutput.style.display = 'block';
  });

  // Handle Generate Image Button
  document.getElementById('generate-button').addEventListener('click', function () {
    const text = document.getElementById('text-input').value;
    const output = document.getElementById('output');

    if (text.trim() === '') {
      alert('Please enter some text.');
      return;
    }

    // Placeholder for image generation logic
    output.innerHTML = `<p>Generating image for: "${text}"...</p>`;
    setTimeout(() => {
      output.innerHTML = `
        <p>Image generation is not implemented yet. This is a placeholder.</p>
        <img src="https://via.placeholder.com/500x300?text=Generated+Image" alt="Generated Image">
      `;
    }, 2000);
  });

  // Add Download Button for Output
  function addDownloadButton(output, fileUrl, fileName) {
    const downloadButton = document.createElement('button');
    downloadButton.innerText = 'Download';
    downloadButton.style.marginTop = '10px';
    downloadButton.style.padding = '10px 20px';
    downloadButton.style.background = '#007bff';
    downloadButton.style.color = 'white';
    downloadButton.style.border = 'none';
    downloadButton.style.borderRadius = '5px';
    downloadButton.style.cursor = 'pointer';
    downloadButton.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      link.click();
    });
    output.appendChild(downloadButton);
  }
});
