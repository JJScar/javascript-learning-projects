const value = document.getElementById('value');

const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

decreaseBtn.addEventListener('click', function () {
    value.textContent = value.textContent - 1;
});

resetBtn.addEventListener('click', function () {
    value.textContent = 0;
});

increaseBtn.addEventListener('click', function () {
    value.textContent = parseInt(value.textContent) + 1;
});