// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbols');

const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Generate event listener
generateEl.addEventListener('click', ()=>{
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const haslower = lowercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbols.checked;

   resultEl.innerHTML = generatePassword(hasUpper, haslower, hasNumber, hasSymbol, length)
});


// Generate password function 
function generatePassword(upper, lower, number, symbol, length ){
    // 1. Init pw var
    // 2. Filter out unchecked types
    // 3. Loop over length call generator function for each type
    // 4. Add final pw to the pw var and return

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    // Creates array of checked box
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (item =>Object.values(item)[0]);
    
    if(typesCount ===0){
        return '';
    }

    for(let i = 0; i < length; i += typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0];

            // console.log('funcName: ', funcName)
            generatedPassword += randomFunc[funcName]();
        });
    }
 
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword
}

// Generator functions 
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=/<>'
    return symbols[Math.floor(Math.random() * symbols.length)];
}
