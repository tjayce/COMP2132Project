
/*----------------------------------
             Side Bar
-----------------------------------*/

let toggleStatusOpen = false;

const hamburger = document.getElementById("hamburger")
const sideBar = document.getElementById("side-bar");


//console.log(toggleStatusOpen);

hamburger.addEventListener('click', function(){
    
    if(toggleStatusOpen === false) {
        sideBar.style.visibility = "visible";
        sideBar.style.left = "100%";
        toggleStatusOpen = true;
    } else {
        sideBar.style.left = "80%";
        toggleStatusOpen = false;
    }   
});

//console.log(toggleStatusOpen);

/*-----------------------------------
             Dice Game
------------------------------------*/
const btnNewGame    = document.getElementById("new-game");
const btnRoll       = document.getElementById("roll-dice");

const roundScore1   = document.getElementById("roundScore1");
const roundScore2   = document.getElementById("roundScore2");
const totalScore1   = document.getElementById("totalScore1");
const totalScore2   = document.getElementById("totalScore2");

const diceImage1    = document.getElementById("diceImage1");
const diceImage2    = document.getElementById("diceImage2");
const diceImage3    = document.getElementById("diceImage3");
const diceImage4    = document.getElementById("diceImage4");

let dice;

class Dice {
    constructor(){

    }

    roll(){
        return Math.floor(Math.random()*6) +1;
    }
}

const p1d1 = new Dice();
const p1d2 = new Dice();

const p2d1 = new Dice();
const p2d2 = new Dice();

let temp1;
let temp2;
let temp3;
let temp4;

function rollDice(){
    temp1 = p1d1.roll();
    temp2 = p1d2.roll();
    temp3 = p2d1.roll();
    temp4 = p2d2.roll();

    diceImage1.src = `images/dice-${temp1}.png`;
    diceImage2.src = `images/dice-${temp2}.png`;
    diceImage3.src = `images/dice-${temp3}.png`;
    diceImage4.src = `images/dice-${temp4}.png`;

    roundScore1.innerHTML = temp1;
    /*
    roundScore1.innerHTML = p1d1.roll();
    roundScore2.innerHTML = p1d2.roll();
    totalScore1.innerHTML = p2d1.roll();
    totalScore2.innerHTML = p2d2.roll();*/
}

btnRoll.addEventListener('click', rollDice);

//------------
function newGame(){
    roundScore1.innerHTML = 0;
    roundScore2.innerHTML = 0;
    totalScore1.innerHTML = 0;
    totalScore2.innerHTML = 0;
}

btnNewGame.addEventListener('click', function(){
    newGame();
});