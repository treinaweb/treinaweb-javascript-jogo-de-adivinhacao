const userNumberElement = document.querySelector('#userNumber'),
    sendButton = document.querySelector('#sendButton'),
    resetButton = document.querySelector('#resetButton'),
    minNumberElement = document.querySelector('#minNumber'),
    maxNumberElement = document.querySelector('#maxNumber'),
    tipElement = document.querySelector('#tip'),
    guessesRemainingElement = document.querySelector('#guessesRemaining');

userNumberElement.addEventListener('input', handleNumberInput);

const minNumber = 0,
    maxNumber = 10,
    totalGuesses = 3;

let currentNumber,
    userNumber,
    guessesRemaining;

function start(){
    currentNumber = generateNumber();
    userNumber = minNumber;
    guessesRemaining = totalGuesses;

    userNumberElement.value = userNumber;
    minNumberElement.innerText = minNumber;
    maxNumberElement.innerText = maxNumber;
    tipElement.innerText = '';
    guessesRemainingElement.innerText = guessesRemaining;

    userNumberElement.classList.remove('hidden');
    sendButton.classList.remove('hidden');
    resetButton.classList.add('hidden');
}

function generateNumber(){
    Math.floor(Math.random() * (maxNumber + 1 - minNumber)) + minNumber
}

function handleNumberInput(event){
    let value = parseInt(event.target.value || userNumber || 0);
    value = handleMinMax(minNumber, value, maxNumber);
    userNumber = value;
    event.target.value = value;
}

function handleMinMax(min, number, max){
    return Math.min(Math.max(number, min), max);
}


start();