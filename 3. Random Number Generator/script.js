'use strict'

const numberBox = document.querySelector('h2');
const generateBtn = document.querySelector('.generate');

generateBtn.addEventListener('click', () => {
    const randoNumber = Math.ceil(Math.random() * 10);
    numberBox.textContent = randoNumber;
});