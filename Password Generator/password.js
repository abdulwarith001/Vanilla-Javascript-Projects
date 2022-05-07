const displayScreen = document.getElementById("screen")
const passwordLength = document.getElementById('max');
const possiblePasswordStrings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()_-+={}[]\|;:'<./>,";

const displayGeneratedPassword = () => {
    displayScreen.value = generatedPassword()
}

const randomNumbers = (number) => number = Math.floor(Math.random() * possiblePasswordStrings.length);


const generatedPassword = () => {
    let password = '';
    for (let i = 0; i < passwordLength.value; i++) {
        let randomPasswordPositons = randomNumbers()
        password += possiblePasswordStrings.slice(randomPasswordPositons, randomPasswordPositons + 1)
    }
    return password
}

const copyPassword = () => {
    if (displayScreen.value !== '' && displayScreen.value !== 'Copied') {
        displayScreen.select()
        displayScreen.setSelectionRange(0, 99999);
        document.execCommand('copy');
        displayScreen.value = "Copied";
    } else {
        alert('No Password to copy!!')
    }
}