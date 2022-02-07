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
                disBeta.textContent = '';
                break;
            case 'e':
                console.log('operating...');
                convertInput();
                console.table(values);
                console.table(operation);

                disMain.textContent = values.reduce((accumulator, current) => {
                    
                });
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
        if (isNumber) {
            value += disBeta.textContent[i];
        } else {
            values.push(Number(value));
            value = '';
            if (disBeta.textContent[i] == '+') {
                operation.push('add');
            } else if (disBeta.textContent[i] == '-') {
                operation.push('subtract');
            } else if (disBeta.textContent[i] == '*') {
                operation.push('multiply');
            } else if (disBeta.textContent[i] == '/') {
                operation.push('divide');
            }
        }
    }
}