const qrInput = document.getElementById('qrCodeInput');
const qrCodeDisplay = document.getElementById('qrCodeContainer');
const successMsg = document.querySelector('.sucessfulMsg')

const QR_CODE = new QRCode("qrCodeContainer", {
  width: 170,
  height: 170,
  colorDark: "#000000",
  size: 500,
  colorLight: "#ffffff",
  padding: 25,
  correctLevel: QRCode.CorrectLevel.M,
});

window.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    if (qrInput.value !== '') {
      QR_CODE.makeCode(qrInput.value)
      successMsg.style.display ='block'
      setTimeout(() =>{
        successMsg.style.display = 'none'
      },2000)
    }
    qrInput.value = ''
  }
})