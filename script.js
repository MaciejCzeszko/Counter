const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');
const count = document.querySelector('.count');
let counter = 0;

count.textContent = counter;
neutral();

decrease.addEventListener('click', () => {
    counter--;
    count.textContent = counter;
    neutral();
    negative();
})

reset.addEventListener('click', () => {
    counter = 0;
    count.textContent = counter;
    neutral();
})

increase.addEventListener('click', () => {
    counter++;
    count.textContent = counter;
    neutral();
    positive();
})

function positive() {
    if(counter > 0) {
        count.classList.remove('negative');
        count.classList.remove('neutral');
        count.classList.add('positive');
    }
}

function neutral() {
    if(counter === 0) {
        count.classList.remove('negative');
        count.classList.add('neutral');
        count.classList.remove('positive');
    }
}

function negative() {
    if(counter < 0) {
        count.classList.add('negative');
        count.classList.remove('neutral');
        count.classList.remove('positive');
    }
}