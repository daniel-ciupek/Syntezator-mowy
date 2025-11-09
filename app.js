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
    this.speak.addEventListener("click", this.speaText);
        this.stop.addEventListener("click", this.stopText);

  }


speaText = () => {

}
stopText = () => {

}

getVoices = () => {
    
}




}

const textToSpeech = new TextToSpeech();
