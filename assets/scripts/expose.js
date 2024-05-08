// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

const hornSelect = document.getElementById('horn-select');
const volumeSlider = document.getElementById('volume');
const volumeIcon = document.querySelector('#volume-controls img');
const playButton = document.querySelector('button');
const audioElement = document.querySelector('audio');
const imageElement = document.querySelector('img');

hornSelect.addEventListener('change', Horn);
volumeSlider.addEventListener('input', Volume);
playButton.addEventListener('click', Sound);

function Horn(){
  const selectedHorn = hornSelect.value;
  imageElement.src = `./assets/images/${selectedHorn}.svg`;
  audioElement.src = `./assets/audio/${selectedHorn}.mp3`;
}

function Volume(){

  const volume = parseInt(volumeSlider.value, 10);

  if (volume === 0) {
    volumeIcon.src = 'assets/icons/volume-level-0.svg';
  } 
  else if (volume < 33) {
    volumeIcon.src = 'assets/icons/volume-level-1.svg';
  } 
  else if (volume < 67) {
    volumeIcon.src = 'assets/icons/volume-level-2.svg';
  } 
  else {
    volumeIcon.src = 'assets/icons/volume-level-3.svg';
  }
  audioElement.volume = volume / 100;
}

function Sound(){
  if (hornSelect.value === 'party-horn') {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
  audioElement.play();
  }
}