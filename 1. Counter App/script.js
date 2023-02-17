'use strict'

const buttons = document.querySelector('.buttons');
const counter = document.querySelector('.counter');

let count = 0;

const updateCount = function () {
    counter.textContent = count;
    if (count < 0) {
        counter.style.color = 'orangered';
    } else if (count > 0) {
        counter.style.color = 'yellow';
    } else {
        counter.style.color = 'white';
    };
}

buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('add')) {
        count++;
        updateCount();
    }

    if (e.target.classList.contains('subtract')) {
        count--;
        updateCount();
    }

    if (e.target.classList.contains('reset')) {
        count = 0;
        updateCount();
    }
})