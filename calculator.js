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
        if (disMain.textContent.length > 0) {
            disBeta.textContent = disMain.textContent;
            disMain.textContent = '';
        }

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
                disBeta.textContent = '';
                disMain.textContent = '';
                break;
            case 'e':
                convertInput();
                let result = values.reduce((a, b) => operate(operation.shift(), a, b));
                disMain.textContent = Math.round(result * 100)/100;
        }
    });
});

function convertInput() {
    //initialize array
    values = [], operation = [];
    //convert disBeta into arrays- values and operation
    let value = '';
    for (let i = 0; i <= disBeta.textContent.length; i++) {
        let isNumber = disBeta.textContent.charCodeAt(i) >= 48;
        let isDot = disBeta.textContent.charCodeAt(i) == 46;
        if (isNumber || isDot) {
            value += disBeta.textContent[i];
        } else {
            values.push(Number(value));
            value = '';
            if (disBeta.textContent[i] == '+') {
                operation.push(add);
            } else if (disBeta.textContent[i] == '-') {
                operation.push(subtract);
            } else if (disBeta.textContent[i] == '*') {
                operation.push(multiply);
            } else if (disBeta.textContent[i] == '/') {
                operation.push(divide);
            }
        }
    }
}