const redColor = document.getElementById('red');
const greenColor = document.getElementById('green');
const blueColor = document.getElementById('blue');
const opacity = document.getElementById('opacity')
const displayScreen = document.getElementById('display');
const colors = document.getElementById('textarea');
const copyButton = document.getElementById('button');

window.addEventListener('keypress', (e) => {
    if (e.key === 'w') {
        redColor.value = '255'
        greenColor.value = '255'
        blueColor.value = '255'
        colors.value = displayColorCode();
        displayScreen.style.background = getcolorBackground()
    } else {
        if (e.key === 'b') {
            redColor.value = '0'
            greenColor.value = '0'
            blueColor.value = '0'
            colors.value = displayColorCode();
            displayScreen.style.background = getcolorBackground()
        }
    }
});

copyButton.addEventListener('click', () => {
    if (colors.value !== "Copied Boss" && colors.value !== 'Ah don copy am nah') {
        colors.select()
        colors.setSelectionRange(0, 99999);
        document.execCommand('copy');
        colors.value = "Copied Boss";
    } else {
        colors.value = "Ah don copy am nah"
    }
});


const displayColor = () => {
    displayScreen.style.background = getcolorBackground()
    colors.value = displayColorCode();
}

const displayColorCode = () => {
    let colorCode = `rgba(${redColor.value}, ${greenColor.value}, ${blueColor.value}, ${opacity.value})`;
    return colorCode;
}

const getcolorBackground = () => {
    let colorBackground = `rgba(${redColor.value}, ${greenColor.value}, ${blueColor.value}, ${opacity.value})`
    return colorBackground;
}
displayColor()
