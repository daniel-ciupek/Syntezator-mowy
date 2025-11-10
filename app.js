class TextToSpeech {
  constructor() {
    this.textToSpeech = document.querySelector("#textarea");
    this.voiceSelect = document.querySelector("#voice");
    this.pitch = document.querySelector("#pitch");
    this.rate = document.querySelector("#rate");
    this.volume = document.querySelector("#volume");
    this.speak = document.querySelector("#speak");
    this.stop = document.querySelector("#stop");

    this.init();
  }

  init() {
    this.addListeners();
    this.getVoices();
  }

  addListeners() {
    this.speak.addEventListener("click", this.speakText);
    this.stop.addEventListener("click", this.stopText);
    window.speechSynthesis.onvoiceschanged = () => this.getVoices();

  }

  speakText = () => {};
  stopText = () => {};

  getVoices = () => {
    const voices = window.speechSynthesis.getVoices();

  this.voiceSelect.innerHTML = voices
  .filter(voice => this.isLangAllowed(voice))
  .map(
    (voice) => `
      <option value="${voice.name}">
        ${voice.name} - ${voice.lang}
      </option>`
  )
  .join("");
    console.log(voices);
  }
  isLangAllowed = (langToChceck) => {
    const allowedLanguages = ["pl", "en", "fr", "de"];
    return allowedLanguages.some(allowedLang =>
        langToChceck.lang.includes(allowedLang)
    );
  }
}

const textToSpeech = new TextToSpeech();
