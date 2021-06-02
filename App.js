const popup = document.querySelector('.popup')
const overlay = document.querySelector('.overlay')

const start = () => {
  popup.classList.add('active')
  overlay.classList.add('act')
}

const down = () => {
  popup.classList.remove('active')
  overlay.classList.remove('act')
}
