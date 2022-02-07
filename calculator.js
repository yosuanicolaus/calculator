const add       = (a, b) => a + b;
const subtract  = (a, b) => a - b;
const multiply  = (a, b) => a * b;
const divide    = (a, b) => a / b;

const operate = (operator, a, b) => operator(a, b);

const disBeta = document.getElementById('disBeta');
const disMain = document.getElementById('disMain');
const buttons = document.querySelectorAll('button');

let a = 0, b = 0, values = [], operation = [];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //populate display (beta)
        let validNumber = disBeta.textContent.charCodeAt(disBeta.textContent.length-1) >= 48;
        switch (button.className) {
            case 'number':
                disBeta.textContent += button.id;
                break;
            case 'operator':
                if ((disBeta.textContent.length != 0) && validNumber) {
                    disBeta.textContent += button.id;
                }
                break;
            case 'd':
                disBeta.textContent = disBeta.textContent.slice(0, -1);
                break;
            case 'c':
                console.log('clearing...');
                disBeta.textContent = '';
                break;
            case 'e':
                console.log('operating...');
        }
    });
});