//покраска одной карточки
const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');
const blueHashColor = '#0000ff';

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.background = blueHashColor;
});

//покраска всех карточек
const pinkHashColor = '#ff84b5';
const productCards = document.querySelectorAll('.product-card');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');

recolorAllCardButton.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = pinkHashColor
  );
});

//переход на страницу Google
const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);
function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на страницу Google?');

  if (answer === true) {
    window.open('http://google.com');
  } else {
    console.log('Пользователь отменил переход на Google');
  }
}

//всплывающий текст при наведении мышью на заголовок
const effectSwipeMouse = document.querySelector('.headline');
effectSwipeMouse.addEventListener('mouseover', swipeMouse);

function swipeMouse() {
  console.log('Пользователь навел мышь на надпись "Выбери свой товар"');
}

//кнопка меняющая цвет при нажатии
const funButton = document.querySelector('.fun-button');
funButton.addEventListener('click', function () {
  funButton.classList.toggle('active-blue');
});
