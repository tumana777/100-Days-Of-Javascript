'use strict'

const inputEl = document.querySelector('.input-text');
const btnCheck = document.querySelector('.check');
const output = document.querySelector('.output');

btnCheck.addEventListener('click', () => {
    let count = 0;
    const word = inputEl.value.toUpperCase();

    if (word) {
        [...word].forEach(ch => {
            if (ch.match((/([A,E,I,O,U])/))) {
                count++;
            }
        });

        output.textContent = `${word} has ${count} ${count == 1 ? 'vowel' : 'vowels'}`;
    }
})