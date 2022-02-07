const add       = (a, b) => a + b;
const subtract  = (a, b) => a - b;
const multiply  = (a, b) => a * b;
const divide    = (a, b) => a / b;

const operate = (operator, a, b) => operator(a, b);

const disBeta = document.getElementById('disBeta');
const disMain = document.getElementById('disMain');
const buttons = document.querySelectorAll('button');

disBeta.textContent += 1000;
disMain.textContent += 20;

// button.addEventListener('click', myFunc(button.id));

buttons.forEach((button) => {
    button.addEventListener('click', () => console.log(button.id));
});