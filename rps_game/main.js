const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('yourChoice');
const result = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const finResultDisplay = document.getElementById('finalResult');
let computerChoice;
let userChoice;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    // finResultDisplay.innerHTML = userChoice;
    computerGenerator();
    getResult();
    counter();
}))

function computerGenerator(){
    let randValue = Math.floor(Math.random()*3)+1;
    if(randValue === 1){
        computerChoice = 'Rock'
    }
    if(randValue === 2){
        computerChoice = 'Paper'
    }
    if(randValue === 3){
        computerChoice = 'Scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    let res;
    if(computerChoice === userChoice){
        res = 'Its Draw!'
    }
    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        res = 'You Win!'
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissor'){
        res = 'You Lose!'
    }
    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        res = 'You Lose!'
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissor'){
        res = 'You Win!'
    }
    if(computerChoice === 'Scissor' && userChoice === 'Rock'){
        res = 'You Win!'
    }
    if(computerChoice === 'Scissor' && userChoice === 'Paper'){
        res = 'You Lose!'
    }
    result.innerHTML = res;
}

function counter(res){
    let winCount = 0;
    let finRes;
    if(res === 'You Win!'){
        winCount +=1;
    }
    if(winCount >= 10){
        finRes = 'User wins finally!!!'
    }
    finResultDisplay.innerHTML = finRes;
}