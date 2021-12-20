let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
};

speakBtn.addEventListener("click", () => {
    /* let toSpeak = content + 'And the output is ' + text;
    speech.text = toSpeak;
    */

    speech.text = content;

    if (speechResult) {
        speech.text += 'And the answer is ' + speechResult;
    }
    // speech.rate = 5;
    window.speechSynthesis.speak(speech);
});