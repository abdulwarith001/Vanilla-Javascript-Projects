const pickedColorDisplay = document.getElementById('pickedDisplay');
const resetGameBtn = document.getElementById('resetGameBtn');
const messageDisplay = document.getElementById('msgDisplay');
const livesDisplay = document.getElementById('livesDisplay');
const squareBox = document.querySelectorAll(".boxs");
const strip = document.querySelector('.strip');
let lives = 2;
let generatedColor = generateAllColor();
let pickedColor = pickColor()
let audio = new Audio()


//Get individual Colors 
function singleRandomColor() {
  //pick a "red" from 0 - 255
  let red = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  let green = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  let blue = Math.floor(Math.random() * 256);
  return `RGB(${red}, ${green}, ${blue})`;
}

function generateAllColor() {
  let allColor = []
  for (i = 0; i < squareBox.length; i++) {
    allColor.push(singleRandomColor())
  }
  return allColor
}

function pickColor() {
  let pickedNumber = Math.floor(Math.random() * generatedColor.length)
  return generatedColor[pickedNumber]
}

function compareColor(color) {
  //Get the background color of any box the user clicks
  const clickedColor = color.style.backgroundColor
  //Loop througn the square boxs and add the current color to  each box. 
  //Start looping
  if (clickedColor.toLowerCase() === pickedColor.toLowerCase()) {
    for (ii = 0; ii < squareBox.length; ii++) {
      squareBox[ii].style.backgroundColor = clickedColor
      squareBox[ii].style.visibility = 'visible'
    }
    //End of looping
    messageDisplay.innerHTML = 'You won Nigga!'
    resetGameBtn.innerHTML = 'Play Again'
    strip.style.backgroundColor = clickedColor;
    pickedColorDisplay.style.color = clickedColor
    audio.src = 'short-crowd-cheer-6713.mp3'
    pickedColorDisplay.innerHTML = 'Hoooray!!!'
    audio.play()
    lives = 2
    livesDisplay.innerHTML = '❤❤';

  } else {
    color.style.visibility = 'hidden'
    audio.src = 'beep-beep-6151.mp3'
    audio.play()
    lives--
    livesDisplay.innerHTML = '❤';
  }
  //checks if there is still lives
  if (lives === 0) {
    //if there is no  lives then setss lives to default (i.e 3)
    lives = 3
    //loops through boxs and set the color to red since there is no lives again
    for (j = 0; j < squareBox.length; j++) {
      squareBox[j].style.backgroundColor = 'red'
      squareBox[j].style.visibility = 'visible'
    }
    //Indicate that game is over and sets the strip and picked color area to red
    messageDisplay.innerHTML = 'Game Over'
    strip.style.backgroundColor = 'red'
    pickedColorDisplay.style.color = 'red'
    pickedColorDisplay.innerHTML = 'No More Lives'
    livesDisplay.innerHTML = '💔💔'
  }
  //Warning message for decrease in lives
  if (lives < 2) {
    messageDisplay.innerHTML = `You have ${lives} more chance`
  }
}

window.addEventListener('load', () => {
  //generate New Colors
  generatedColor = generateAllColor();
  //Pick a new Color from the generated Colors
  pickedColor = pickColor();
  //Color all boxs
  for (i = 0; i < squareBox.length; i++) {
    squareBox[i].style.backgroundColor = generatedColor[i]
  }
  //display picked color code
  pickedColorDisplay.innerHTML = pickedColor
  setTimeout(() =>{
    messageDisplay.innerHTML = `You have two chances!`
  },2500)
});

resetGameBtn.addEventListener('click', () => {
  //Generate New Colors
  generatedColor = generateAllColor();
  //Pick a New color
  pickedColor = pickColor()
  //Color  boxes and make all visible
  for (i = 0; i < squareBox.length; i++) {
    squareBox[i].style.backgroundColor = generatedColor[i]
    squareBox[i].style.visibility = 'visible'
  }
  pickedColorDisplay.innerHTML = pickedColor;
  messageDisplay.innerHTML = 'Click a box to Guess'
  //set strip area and picked color area to the default style
  strip.style.backgroundColor = 'rgba(0, 0, 45, 1)'
  pickedColorDisplay.style.color = 'rgba(0, 0, 45, 1)'
  //Reset Lives to default 
  lives = 2
  livesDisplay.innerHTML = '❤❤'
});