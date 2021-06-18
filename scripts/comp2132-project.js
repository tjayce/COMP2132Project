
const btnNewGame   = document.getElementById("new-game");
const btnRoll    = document.getElementById("roll-dice");


let toggleStatusOpen = false;

const hamburger = document.getElementById("hamburger")
const sideBar = document.getElementById("side-bar");


//console.log(toggleStatusOpen);

hamburger.addEventListener('click', function(){
    if(toggleStatusOpen === false) {
        sideBar.style.visibility = "visible";
        toggleStatusOpen = true;
    } else {
        sideBar.style.visibility = "hidden";
        toggleStatusOpen = false;
    }   
});

//console.log(toggleStatusOpen);

/*--------------
   Dice Game
---------------*/
/*
class Dice {
    constructor(value){
        this.value = value;
    }
}

const dice01 = new Dice();
const dice02 = new Dice();
*/

const dice01 = document.getElementById("dice01");
const dice02 = document.getElementById("dice02");
const result = document.getElementById("result");
const score = document.getElementById("score");
let counter = 0;
let total = 0;

function rollDice() {
    const d01 = Math.floor(Math.random()*6) +1;
    const d02 = Math.floor(Math.random()*6) +1;
    total = d01 + d02;
    
    dice01.innerHTML = d01;
    dice02.innerHTML = d02;

    result.innerHTML = total;
    score.innerHTML = counter += total;
}


btnRoll.addEventListener('click', rollDice);

btnNewGame.addEventListener('click', function(){
    dice01.innerHTML = 0;
    dice02.innerHTML = 0;
    result.innerHTML = 0;
    counter = 0;
    score.innerHTML = 0;
});