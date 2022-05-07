const displayResult = document.getElementById("display");
const input = document.getElementById("inputValue");
const mtnArray = [
    '07025', '07026', '0703', '0704', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906', '0913', '0916'
];
const airtelArray = [
    '0701', '0708', '0802', '0808', '0812', '0901', '0902', '0904', '0907', '09012'
];
const gloArray = [
    '0705', '0805', '0807', '0811', '0815', '0905', '0915'
];
const etisalatArray = [
    '0809', '0817', '0818', '0909', '0908'
];
const mtnMessage = "Maybe an MTN number";
const airtelMessage = 'Maybe an AIRTEL number';
const gloMessage = 'Maybe a GLO number';
const etisalatMessage = "Maybe a 9mobile number"

function checksNumber() {
    if (input.value === "081" || input.value === "090" || input.value === "080" || input.value === "070" || input.value.length <= 3 || input.value.length > 11) {
        displayResult.innerText = "Invalid Number"
    } else {
        if (mtnArray.toString().includes(input.value)) {
            displayResult.innerHTML = mtnMessage;
            displayResult.style.color = 'yellow'
        } else {
            if (airtelArray.toString().includes(input.value)) {
                displayResult.innerText = airtelMessage;
                displayResult.style.color = "red"
            } else {
                if (gloArray.toString().includes(input.value)) {
                    displayResult.innerText = gloMessage;
                    displayResult.style.color = "green"
                } else {
                    if (etisalatArray.toString().includes(input.value)) {
                        displayResult.innerText = etisalatMessage;
                        displayResult.style.color = "RGBA(0, 69, 0, 1)"
                    }
                }
            }
        }
    }
}
