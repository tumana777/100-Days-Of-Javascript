'use strict'

const modal = document.querySelector('.modal');
const btnShow = document.querySelector('button');
const btnClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay')

btnShow.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

btnClose.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});