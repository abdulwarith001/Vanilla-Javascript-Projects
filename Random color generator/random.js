const boxes = document.querySelectorAll(".boxs")
const textDisplay = document.getElementById('textDisplay');
const audio = new Audio();
let availableBotChoice = [
  'container1', 'container2', 'container3', 'container4', 'container5', 'container6'
];
const score = document.getElementById("score");
let points = 1;
let colors =[];
const colorBoxes = () => {
  for (i = 0; i < boxes.length; i++) {
    colors = []
    for (j = 0; j < 3; j++) {
      let random = Math.floor(Math.random() * 255);
      colors.push(random)
    }
    boxes[i].style.backgroundColor = `RGB(${colors[0]}, ${colors[1]}, ${colors[2]})`;
  }
}
colorBoxes()
console.log(boxes)

const makeColor = yourChoice => {
  let humanChoice, computerChoice;
  humanChoice = yourChoice.id;
  computerChoice = availableBotChoice[botChoice()]
  decideWinner(humanChoice, computerChoice)
  
}

const decideWinner = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    textDisplay.innerHTML = "Woooo, You won!!!"
    colorBoxes()
    setTimeout(() => {
      textDisplay.innerHTML = 'You rock, Wish I can be You..'
    }, 1500)
    score.innerHTML = points++
    audio.src = "short-crowd-cheer-6713.mp3"
    audio.play()
  } else {
    textDisplay.innerHTML = 'You can try again. No Losses'
    setTimeout(() => {
      textDisplay.innerHTML = 'Everyday is a chance to try again.'
    }, 1500)
    audio.src = "beep-beep-6151.mp3"
    audio.play()
  }
}

const botChoice = () => Math.floor(Math.random() * availableBotChoice.length);

// function addUsersInput(){
//   let input = prompt("enter a digit")
//   let inputs = parseInt(input.value)
//   let total = 0;
//   for(i=0; i<inputs; i++){
//     total +=4
//   }
//   return total
// }

// console.log(addUsersInput())
