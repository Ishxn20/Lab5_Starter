// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const volumeIcon = document.querySelector('#volume-controls img');
  const imageElement = document.querySelector('#expose img');

  if (!hornSelect || !volumeSlider || !playButton || !audioElement || !volumeIcon || !imageElement) {
      console.error('One or more elements could not be found');
      return;
  }

  setupHornSelection(hornSelect, audioElement, imageElement);
  setupVolumeControl(volumeSlider, volumeIcon, audioElement);
  setupPlaySound(playButton, audioElement);
}

document.addEventListener('DOMContentLoaded', init);

function setupHornSelection(selector, audio, image) {
  selector.addEventListener('change', function() {
      const hornType = selector.value;
      image.src = `assets/images/${hornType}-image.png`; 
      audio.src = `assets/sounds/${hornType}-sound.mp3`;
  });
}

function setupVolumeControl(slider, audio, icon) {
  slider.addEventListener('input', function() {
      const volume = slider.value;
      audio.volume = volume / 100;
      
      if (volume == 0) {
          icon.src = 'assets/icons/volume-level-0.svg';
      } else if (volume < 33) {
          icon.src = 'assets/icons/volume-level-1.svg';
      } else if (volume < 67) {
          icon.src = 'assets/icons/volume-level-2.svg';
      } else {
          icon.src = 'assets/icons/volume-level-3.svg';
      }
  });
}

function setupPlaySound(button, audio) {
  button.addEventListener('click', function() {
      if (audio.src.includes('party-horn')) {
          shootConfetti();
      }
      audio.play();
  });
}
function shootConfetti() {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
}