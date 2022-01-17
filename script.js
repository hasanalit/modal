'use strict';


let elShowModal = document.querySelector('.show-modal')
let elModal = document.querySelector('.modal')
let elCloseModal = document.querySelector('.close-modal')
let elOverlay = document.querySelector('.overlay')
elOverlay.style.display = "none"
elModal.style.display = "none"
elShowModal.addEventListener('click', function(evt) {
  elModal.classList.toggle("hidden");
  elModal.style.display = "inline"
  elOverlay.style.display = "inline"
})

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    elOverlay.style.display = "none"
    elModal.style.display = "none"
  }
});

elCloseModal.addEventListener('click', function (evt) {
    elOverlay.style.display = "none"
    elModal.style.display = "none"
});

elOverlay.addEventListener('click', function (evt) {
  elOverlay.style.display = "none"
  elModal.style.display = "none"
});
