const recolorFirstCardButton = document.getElementById('recolor-first-card-button')
const firstProductCard = document.querySelector('.product-card')
const blueHashColor = '#0000ff'

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.background = blueHashColor
})

//покраска всех карточек
const redHashColor = '#ff0000';

const ProductCards = document.querySelectorAll('.product-card')
const recolorAllCardButton = document.getElementById('recolor-all-card-button')

recolorAllCardButton.addEventListener('click', () => {
  ProductCards.forEach(
    card => card.style.backgroundColor = redHashColor
  )
})

//переход на страницу Google
const googleOpenButton = document.getElementById('open-google-button')
googleOpenButton.addEventListener ('click', openGoogle)
function openGoogle() {
  const answer = confirm ('Вы действительно хотите перейти на страницу Google?')

  if (answer === true) {
    window.open ('http://google.com');
  } else {
    console.log ('Пользователь отменил переход на Google')
  }
}