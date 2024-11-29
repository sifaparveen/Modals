'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const openModal = document.querySelectorAll('.show-modal');

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function seeModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', seeModal);
}

closeModal.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);
