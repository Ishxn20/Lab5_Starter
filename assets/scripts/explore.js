// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const voiceSelect = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const img = document.querySelector('img');
  let synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    for(let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  synth.onvoiceschanged = populateVoiceList;
  populateVoiceList();  

  button.addEventListener('click', () => {
    const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    let utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
    utterance.onstart = () => {
      img.src = 'assets/images/smiling-open.png'; 
    };
    utterance.onend = () => {
      img.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}
