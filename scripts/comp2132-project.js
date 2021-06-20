
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
        sideBar.style.left = "80%";
        toggleStatusOpen = true;
    } else {
        sideBar.style.left = "100%";
        toggleStatusOpen = false;
    }   
});

//console.log(toggleStatusOpen);

/*-----------------------------------
             Dice Game
------------------------------------*/
const btnNewGame   = document.getElementById("new-game");
const btnRoll    = document.getElementById("roll-dice");

const out01 = document.getElementById("dice01");

let dice;

class Dice {
    constructor(){}

    roll(){
        dice = Math.floor(Math.random()*6) +1;
        return dice;
    }
}
const p1d1 = new Dice();
const p1d2 = new Dice();

const p2d1 = new Dice();
const p2d2 = new Dice();


function rollDice(){
    p1d1.roll();
    p1d2.roll();

    p2d1.roll();
    p2d2.roll();
}

btnRoll.addEventListener('click', rollDice);

console.log(p1d1.roll());
console.log(p1d2.roll());
console.log(p2d1.roll());
console.log(p2d2.roll());


out01.innerHTML = temp1 ;

//------------
function newGame(){
    //set everything to 0/default
    /*
    dice01.innerHTML = 0;
    dice02.innerHTML = 0;
    result.innerHTML = 0;
    counter = 0;
    score.innerHTML = 0;
    */
}

btnNewGame.addEventListener('click', function(){
    newGame();
});


/* trash
const out01 = document.getElementById("dice01");
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
*/