const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
btnStop.setAttribute('disabled', 'disabled')
btnStart.setAttribute('disabled', 'disabled')
btnStart.disabled = false

let timerId = null;

btnStart.addEventListener('click', getRandomHexColor)
btnStop.addEventListener('click', stopRandomHexColor)

function getRandomHexColor() {
  btnStart.disabled = true
  btnStop.disabled = false
  timerId = setInterval(() => {
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    document.body.style.background = newColor
  }, 1000);
}

function stopRandomHexColor() {
  btnStart.disabled = false
  btnStop.disabled = true
  clearInterval(timerId)
}