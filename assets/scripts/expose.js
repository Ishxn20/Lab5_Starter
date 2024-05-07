// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  setupHornSelection();
  setupVolumeControl();
  setupPlaySound();
}

function setupHornSelection() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('#expose img');
  const audio = document.querySelector('#expose audio');

  hornSelect.addEventListener('change', () => {
      const selectedHorn = hornSelect.value;
      image.src = `assets/images/${selectedHorn}-image.png`;
      audio.src = `assets/sounds/${selectedHorn}-sound.mp3`;
  });
}

function setupVolumeControl() {
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  volumeSlider.addEventListener('input', () => {
      const volume = volumeSlider.value;
      audio.volume = volume / 100;

      if (volume === 0) {
          volumeIcon.src = 'assets/icons/volume-level-0.svg';
      } else if (volume < 33) {
          volumeIcon.src = 'assets/icons/volume-level-1.svg';
      } else if (volume < 67) {
          volumeIcon.src = 'assets/icons/volume-level-2.svg';
      } else {
          volumeIcon.src = 'assets/icons/volume-level-3.svg';
      }
  });
}

function setupPlaySound() {
  const playButton = document.querySelector('#expose button');
  const audio = document.querySelector('#expose audio');
  const jsConfetti = new JSConfetti();

  playButton.addEventListener('click', () => {
      if (hornSelect.value === 'party-horn') {
          jsConfetti.addConfetti();
      }
      audio.play();
  });
}