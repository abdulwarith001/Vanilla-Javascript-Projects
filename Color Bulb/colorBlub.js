const circle = document.getElementById('circle');
const rectangle = document.getElementById('rectangle');
const changeColorButton = document.getElementById('button');
changeColorButton.disabled = true;
const audio = new Audio('Record20220123190144.aac');

changeColorButton.addEventListener('click', () => {
    let arr = [];
    for (i = 0; i < 3; i++) {
        let rand = Math.floor(Math.random() * 255)
        arr.push(rand)
    }
    circle.style.background = `RGB(${arr[0]}, ${arr[1]}, ${arr[2]})`;

    rectangle.style.background = `RGB(${arr[0]}, ${arr[1]}, ${arr[2]})`;

    circle.style.boxShadow = `10px 10px 130px RGB(${arr[0]}, ${arr[1]}, ${arr[2]})`
});

const switchOffBulb = () => {
    changeColorButton.disabled = true;
    circle.style.background = 'rgb(255, 255, 255)'
    rectangle.style.background = 'rgb(255, 255, 255)'
    circle.style.boxShadow = 'none'
    setTimeout(() =>{
            alert('Those werey NEPA don take light now😎😎😎')
    }, 1000)
}

const switchOnBulb = () => {
    changeColorButton.disabled = false;
    circle.style.background = 'rgba(39, 255, 255, 1)'
    rectangle.style.background = 'rgba(39, 255, 255, 1)'
    circle.style.boxShadow = `10px 10px 130px rgba(39, 255, 255, 1)`
    audio.play();
}
