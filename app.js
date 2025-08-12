
const strengthValue = document.querySelector('#strengthCalc');
const inputValue = document.querySelector('#strength');

// strengthValue.value = inputValue.value;
inputValue.addEventListener( "input" ,(e) => {
    strengthValue.value = e.target.value;
} )

let upperCaseCheck = document.getElementById('upperCase');
let lowerCaseCheck = document.getElementById('lowerCase');
let numbersCheck = document.getElementById('numbers');
let symbolsCheck = document.getElementById('symbols');
let strengthCount = 0;

upperCaseCheck.addEventListener("change", ()=>{
    if (upperCaseCheck.checked) strengthCount += 1;
})

lowerCaseCheck.addEventListener("change", ()=>{
    if (lowerCaseCheck.checked) strengthCount += 1;
})

numbersCheck.addEventListener("change", ()=>{
    if (numbersCheck.checked) strengthCount += 1;
})

symbolsCheck.addEventListener("change", ()=>{
    if (symbolsCheck.checked) strengthCount += 1;
})

const getRandomIndex = (start, end) => {
    return Math.round(Math.random() * (end - start) + start);
}

let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let digits = "0123456789";
let symbols = "!@#$%^&*()_+-=[]{}|;:',.<>/?`~\"\\";

function generatePassword() {
    console.log(inputValue.value);
    console.log(strengthCount);
    
    let myPassword = [];
    // generate checkboxes
    if (upperCaseCheck.checked) { 
        myPassword.push(lowercase[getRandomIndex(0,lowercase.length)]);
    }
    if (lowerCaseCheck.checked) { 
        myPassword.push(uppercase[getRandomIndex(0,uppercase.length)]);
    }
    if (numbersCheck.checked) { 
        myPassword.push(digits[getRandomIndex(0,digits.length)]);
    }
    if (symbols.checked) { 
        myPassword.push(symbols[getRandomIndex(0,symbols.length)]);
    }

    let passwordFill = inputValue.value - myPassword.length

    if (strengthCount === 1) { 
        tooWeak();
        let allCharacters = uppercase; 
        for( let i = 0; i < passwordFill; i++ ) myPassword.push(allCharacters[getRandomIndex(0,allCharacters.length)]);
    }
    if (strengthCount === 2) { 
        weakStrength();
        let allCharacters = uppercase+lowercase; 
        for( let i = 0; i < passwordFill; i++ ) myPassword.push(allCharacters[getRandomIndex(0,allCharacters.length)]);
    }
    if (strengthCount === 3) { 
        mediumStrength();
        let allCharacters = uppercase+lowercase+digits; 
        for( let i = 0; i < passwordFill; i++ ) myPassword.push(allCharacters[getRandomIndex(0,allCharacters.length)]);
    }
    if (strengthCount === 4) { 
        strongStrength();
        let allCharacters = uppercase+lowercase+digits+symbols; 
        for( let i = 0; i < passwordFill; i++ ) myPassword.push(allCharacters[getRandomIndex(0,allCharacters.length)]);
    }
    
    // loop through remaining
  


    fillPassword(myPassword);
    
    function tooWeak() {
        const strengthAnimation = document.getElementById('animationColors');
        strengthAnimation.innerHTML = `TOO WEAK <i class="fa-regular fa-square" style="color:red"></i><i class="fa-regular fa-square"></i><i class="fa-regular fa-square"></i><i class="fa-regular fa-square"></i>`;
    }

    function weakStrength() {
        const strengthAnimation = document.getElementById('animationColors');
        strengthAnimation.innerHTML = `WEAK <i class="fa-regular fa-square" style="color:orange"></i>
        <i class="fa-regular fa-square" style="color:orange"></i>
        <i class="fa-regular fa-square"></i>
        <i class="fa-regular fa-square"></i>`;
    }

    function mediumStrength() {
        const strengthAnimation = document.getElementById('animationColors');
        strengthAnimation.innerHTML = `MEDIUM 
        <i class="fa-regular fa-square" style="color:orange"></i>
        <i class="fa-regular fa-square" style="color:orange"></i>
        <i class="fa-regular fa-square" style="color:orange"></i>
        <i class="fa-regular fa-square"></i>`;
    }

    function strongStrength() {
        const strengthAnimation = document.getElementById('animationColors');
        strengthAnimation.innerHTML = `STRONG 
        <i class="fa-regular fa-square" style="color:green"></i>
        <i class="fa-regular fa-square" style="color:green"></i>
        <i class="fa-regular fa-square" style="color:green"></i>
        <i class="fa-regular fa-square" style="color:green"></i>`;
    }
}


function fillPassword(myPassword) {
    const myPass = myPassword.join('');
    document.getElementById('passGenerator').value = myPass;
}

document.getElementById('copyIcon').addEventListener("click", function copy() {
    let tempValue = document.getElementById('passGenerator');
    navigator.clipboard.writeText(tempValue.value);
    console.log("copied", tempValue.value);
} )

