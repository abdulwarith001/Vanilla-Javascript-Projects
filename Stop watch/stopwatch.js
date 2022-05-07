const counterDisplay = document.getElementById("counter");
const secondDisplay = document.getElementById("secondsDisplay");
const minutesDisplay = document.getElementById("minutesDisplay");
const hoursDisplay = document.getElementById("hoursDisplay");
const startBtn = document.getElementById("startbtn");
const pauseBtn = document.getElementById("pausebtn")
let counter = 0;
let secondsCounter = 1;
let minutesCounter = 1;
let hoursCounter = 1;
let timer;

const checksTimer = () => {
    if (counter === 100){
        counter = 0;
        secondDisplay.innerHTML = secondsCounter++
}else{
        if (secondsCounter === 60) {
            secondsCounter = 0
            minutesDisplay.innerHTML = minutesCounter++
        } else {
            if (minutesCounter === 60) {
                minutesCounter = 0;
                hoursDisplay.innerHTML = hoursCounter++
            }
        }
    }
    counterDisplay.innerText = counter++
}

const startTimer = () => {
    timer = setInterval(checksTimer, 10);
    startBtn.value = "Start"
    startBtn.disabled = true;
    counterDisplay.disabled = true;
    pauseBtn.disabled = false;
}

const pauseTimer = () => {
    timer = clearInterval(timer);
    startBtn.value = "Resume"
    startBtn.disabled = false;
}

const clearTimer = () => {
    timer = clearInterval(timer);
    counter = 0;
    secondsCounter = 1;
    minutesCounter = 1;
    hoursCounter = 1;
    secondDisplay.innerText = "00";
    minutesDisplay.innerText = "00";
    hoursDisplay.innerText = "00";
    counterDisplay.innerText = "00";
    startBtn.value = "Start"
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}