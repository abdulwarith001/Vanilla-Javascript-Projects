// I want to take a random word anytime the input word is the same with the displayed word and then clear the input in other to type another one under 60 seconds count down
const words = [
  'hat', 'lucky', 'river', 'statue', 'generate', 'stubborn', 'cocktail', 'runaway', 'joke', 'developer', 'establishment', 'hero', 'javascript', 'nutrition', 'revolver', 'echo', 'siblings', 'investigate', 'horrendous', 'symptom', 'laughter', 'magic', 'master', 'space', 'definition', 'professional', 'television', 'borthered', 'serve', 'guy', 'coffee', 'realize', 'snap', 'tissue', 'especially', 'indicate', 'cola', 'green', 'programming', 'pawon', 'move', 'sexy', 'mama', 'china', 'doing', 'instead', 'million', 'billion', 'pretty', 'anything', "backbone", 'tea', 'building', 'response', 'just', 'like', 'bae', 'solid', 'mixture', 'feel', 'infinite', 'said', 'are', 'me', 'put', 'material', 'tape', 'salary', 'ability', 'task', 'employee', 'protest', 'go', 'exactly', 'government', 'govern', 'industry', 'drug', 'adejoke', 'olamiposi', 'mine', 'body', 'dress', 'deserve', 'pretend', 'devil', 'civil', 'stand', 'ovation', 'magazine', 'reflect', 'fear', 'food', 'circle', 'disciple', 'plenty', 'identical', 'jungle', 'catch', 'place', 'funny', 'blow', 'anytime', 'finish', 'even', 'actor', 'subscription', 'fight', 'bank', 'money', 'walked', 'music', 'naira', 'spilt', 'consider', 'knowledge', 'fingers', 'teacher', 'cell', 'prison', 'probably', 'meet', 'however', 'add', 'explain', 'explode', 'subject', 'simply', 'just', 'court', 'contact', 'contest', 'health', 'poly', 'polytechnic', 'university', 'speed', 'typing', 'fly', 'relate', 'cousin', 'scientist', 'project', 'economy', 'them', 'self', 'claim', 'berverage', 'radio', 'slack', 'daddy', 'love', 'night', 'morning', 'administration', 'state', 'country', 'die', 'dye', 'mail', 'google', 'port', 'give', 'random', 'kill', 'soldier', 'sign', 'signature', 'finally', 'image', 'saga', 'nothing', 'shot', 'reload', 'crow', 'king', 'savage', 'fart', 'fat', 'game', 'nothing', 'wish', 'birthday', 'for', 'one', 'sit', 'sex', 'container', 'grab', 'bby', 'application', 'sigh', 'sing', 'cry', 'sabotage', 'make', 'happiness', 'antimonopotogeographicastationalizm'
];
const wordDisplay = document.getElementById('wordContainer');
const input = document.getElementById('input');
const countDown = document.getElementById("countdown");
const startButton = document.getElementById('startgame');
let correctWords = 0;
let timeOut;
let timer;
let shortSound = new Audio(

);

const getRandomNumber = () => Math.floor(Math.random() * words.length);

const getRandomWord = selectedWord => selectedWord = words[getRandomNumber()].toUpperCase()

const compareWords = () => {
  if (input.value.toUpperCase() === wordDisplay.innerHTML.toUpperCase()) {
    wordDisplay.innerHTML = getRandomWord()
    input.value = ''
    shortSound.src = 'shot-and-reload-6158.mp3';
    shortSound.play()
    correctWords++
  }
}

const startCountDown = () => {
  (timeOut <= 60) ? countDown.innerHTML = timeOut-- : countDown.innerHTML = timeOut

}

const startGame = () => {
  timeOut = 60;
  correctWords = 0;
  input.focus();
  input.style.visibility = "visible";
  timer = setInterval(startCountDown, 1000)
  wordDisplay.innerHTML = getRandomWord()
  startButton.disabled = true;
  startButton.style.cursor = 'not-allowed'
  input.value = '';
  input.style.visibility = "visible"
  return timer;
}

const stopGame = () => {
  input.focus()
  if (timeOut === 0) {
    timer = clearInterval(timer);
    countDown.innerHTML = "Game Over";
    input.style.visibility = "hidden";
    startButton.disabled = false;
    startButton.value = 'Play Again'
    startButton.style.cursor = 'pointer'
    wordDisplay.innerHTML = `You were able to type ${correctWords} words`;
  } else {
    if (timeOut === 15 || timeOut === 10 || timeOut === 5) {
      shortSound.src = 'croworraven1-6749.mp3';
      shortSound.play()
    }
  }
}
setInterval(stopGame, 1000)

window.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    wordDisplay.innerHTML = input.value
    compareWords()
  }
});
// <script src="https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js"></script>