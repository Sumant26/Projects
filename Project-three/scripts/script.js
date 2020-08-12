const numberElem = document.getElementsByClassName('number')[0];
const factorialContainer = document.getElementsByClassName('container')[1];

const displayRandomNumber = () => {
    const number = Math.floor((Math.random() * 100) + 1);
    numberElem.innerText = number;
}

const checkIfFactorial = (event) => {
    const span = event.target;
    const innerText = span.innerText;
    const factorial = parseInt(innerText);
    if(parseInt(numberElem.innerText) % factorial === 0) {
        span.clas
sList.add('green');
    } else {
        span.classList.add('red');
    }
}

const displayRandomFactorials = () => {
    for(let i = 0; i < 10; i++) {
        const factorial = Math.floor((Math.random() * 50) + 1);
        const factorialSpan = document.createElement('span');

        factorialSpan.innerText = factorial;
        factorialSpan.classList.add('factor')
        factorialSpan.addEventListener('click', checkIfFactorial);

        factorialContainer.appendChild(factorialSpan);
    }
}

displayRandomNumber();
displayRandomFactorials();