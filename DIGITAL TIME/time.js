const displayTime = document.getElementById("screen");
const interpreteTimeDisplay = document.getElementById("timeText");
const arrayNumbers = [
   'Twelve','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Twenty-one', 'Twenty-two', 'Twenty-three', 'Twenty-four', 'Twenty-five', 'Twenty-six', 'Twenty-seven', 'Twenty-eight', 'Twenty-nine'
];

//REMEMBER TO WRITE THE FUNCTION OF PLURALIZING MINUTES WHEN YOU BACK FROM SCHOOL
const displayAllTime = () => {
   const time = new Date();
   let seconds = time.getSeconds();
   let minutes = time.getMinutes();
   let hours = time.getHours();
   let ampm;
   let minuteSingular = "minute";

   ampm = (hours < 12) ? ampm = "am" : ampm = "pm";
   hours = (hours > 12) ? hours -= 12 : hours;
   hours = (hours === 0) ? hours = '12' : hours;
   minuteSingular = (minutes > 1 && minutes < 59) ? minuteSingular = minuteSingular + "s" : minuteSingular

   if (minutes === 0) {
      interpreteTimeDisplay.innerText = `${arrayNumbers[hours]}, O Clock`
   } else {
      if (minutes === 15) {
         interpreteTimeDisplay.innerText = `Quater after ${arrayNumbers[hours]}`
      } else {
         if (minutes === 45) {
            interpreteTimeDisplay.innerText = `Quater to ${arrayNumbers[hours]}`
         } else {
            if (minutes > 0 && minutes < 30) {
               interpreteTimeDisplay.innerText = `${arrayNumbers[minutes]} ${minuteSingular} after ${arrayNumbers[hours]}`
            } else {
               if (minutes === 30) {
                  interpreteTimeDisplay.innerText = `${arrayNumbers[hours]} thirty`
               } else {
                  interpreteTimeDisplay.innerText = `${arrayNumbers[60 - minutes]} ${minuteSingular} to ${arrayNumbers[hours + 1]}`
               }
            }
         }
      }
   }


   seconds = (seconds < 10) ? seconds = `0${seconds}` : seconds;
   minutes = (minutes < 10) ? minutes = `0${minutes}` : minutes;
   hours = (hours < 10) ? hours = `0${hours}` : hours;

   displayTime.innerHTML = `${hours}:${minutes}:${seconds} ${ampm.toUpperCase()}`
}

displayAllTime()
setInterval(displayAllTime, 1000)