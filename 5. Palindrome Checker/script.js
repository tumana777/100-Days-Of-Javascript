'use strict'

const inputEl = document.querySelector('.input-text');
const btnCheck = document.querySelector('.check');
const output = document.querySelector('.output');

btnCheck.addEventListener('click', () => {
    const word = inputEl.value.toUpperCase();
    if (word) {
        const word1 = word.slice(0, word.length / 2);
        const word2 = (word.length % 2 == 0 ? word.slice(word.length / 2, word.length) : word.slice(word.length / 2 + 1, word.length))
            .split('')
            .reverse()
            .join('');
        if (word1 === word2) {
            output.textContent = `${word} is a palindrome`
        } else {
            output.textContent = `${word} is not a palindrome`
        }
    }
})