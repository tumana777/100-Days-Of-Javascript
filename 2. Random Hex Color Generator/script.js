'use strict'

const colorHex = document.querySelector('input');
const generateBtn = document.querySelector('.generate');
const copyBtn = document.querySelector('.copy');

generateBtn.addEventListener('click', () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    colorHex.value = `#${randomColor}`;
    document.body.style.backgroundColor = `#${randomColor}`;
});

copyBtn.addEventListener('click', () => {
    colorHex.select();
    colorHex.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(colorHex.value);
});