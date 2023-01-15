// feedback

var feedBack = document.querySelector('.map__btn'),
  btnClose = document.querySelector('.feedback__btn-close'),
  modal = document.querySelector('.feedback')

feedBack.addEventListener('click', function (evt) {
  evt.preventDefault()
  modal.classList.add('feedback__active')
})

btnClose.addEventListener('click', function (evt) {
  evt.preventDefault()
  modal.classList.remove('feedback__active')
})

// slider

var bg = document.querySelectorAll('.container'),
  bg1 = document.querySelector('.container--bg1'),
  bg2 = document.querySelector('.container--bg2'),
  bg3 = document.querySelector('.container--bg3'),
  btnSwitch1 = document.querySelector('.slider__btn1'),
  btnSwitch2 = document.querySelector('.slider__btn2'),
  btnSwitch3 = document.querySelector('.slider__btn3')

btnSwitch1.addEventListener('click', function () {
  for (i = 0; i < bg.length; ++i) bg[i].classList.add('container--bg1')

  for (i = 0; i < bg.length; ++i) bg[i].classList.remove('container--bg2')
  for (i = 0; i < bg.length; ++i) bg[i].classList.remove('container--bg3')
})
btnSwitch2.addEventListener('click', function () {
  for (i = 0; i < bg.length; ++i) bg[i].classList.add('container--bg2')
  for (i = 0; i < bg.length; ++i) bg[i].classList.remove('container--bg1')
  for (i = 0; i < bg.length; ++i) bg[i].classList.remove('container--bg3')
})
btnSwitch3.addEventListener('click', function () {
  for (i = 0; i < bg.length; ++i) bg[i].classList.add('container--bg3')
  for (i = 0; i < bg.length; ++i) bg[i].classList.remove('container--bg1')
  for (i = 0; i < bg.length; ++i) bg[i].classList.remove('container--bg2')
})
