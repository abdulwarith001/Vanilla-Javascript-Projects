const display = document.getElementById('counter');
let vowelSounds = ["a", "e", "i", "o", "u"]

function countsVowel(str){
    str = str.toLowerCase()
    let counter = 0;
    for(let char of str){
        if(vowelSounds.includes(char)){
            counter +=1
        }
    }
    display.innerHTML = counter
}