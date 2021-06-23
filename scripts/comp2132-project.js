/*-----------------------------------
             Dice Game
------------------------------------*/

/* --- get IDs --- */

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

const popup         = document.getElementById("popup");
const closePopup    = document.getElementById('btn-close'); 

const popupWin      = document.getElementById("winner");
const popupLose     = document.getElementById("loser");
const popupTie      = document.getElementById("tie");

const stickman1     = document.getElementById("stickImage1");
const stickman2     = document.getElementById("stickImage2");

/* --- Dice Class --- */

class Dice {
    constructor(){}

    roll(){
        return Math.floor(Math.random()*6) +1;
    }
}

const p1d1 = new Dice();
const p1d2 = new Dice();

const p2d1 = new Dice();
const p2d2 = new Dice();

/* --- Variables --- */

let dice1;
let dice2;
let dice3;
let dice4;

let currentRoundP1 = 0;
let currentRoundP2 = 0;
let overallScoreP1 = 0;
let overallScoreP2 = 0;

let counter = 0;
let roundLimit = 3;

/* --- Roll Dice--- */

function rollDice(){
    if(counter <= (roundLimit - 1)){
        dice1 = p1d1.roll();
        dice2 = p1d2.roll();
        dice3 = p2d1.roll();
        dice4 = p2d2.roll();

        currentRoundP1 = calcualteRoundScore(dice1, dice2);
        currentRoundP2 = calcualteRoundScore(dice3, dice4);

        roundScore1.innerHTML = currentRoundP1;
        totalScore1.innerHTML = overallScoreP1 += currentRoundP1;

        roundScore2.innerHTML = currentRoundP2;
        totalScore2.innerHTML = overallScoreP2 += currentRoundP2;

        diceImage1.src = `images/dice-${dice1}.png`;
        diceImage2.src = `images/dice-${dice2}.png`;
        diceImage3.src = `images/dice-${dice3}.png`;
        diceImage4.src = `images/dice-${dice4}.png`;
 
        counter++;
        //console.log(counter);
    }
    
    if(counter === 3){
        popupDisplay();
    }
    hideSideBar();
}

function calcualteRoundScore(dice01, dice02){
    let roundScore = 0;
    if(dice01 === 1 || dice02 === 1){
        roundScore = 0;
    } else if(dice01 === dice02){
        roundScore = (dice01 + dice02)*2;
    } else {
        roundScore = dice01 + dice02;
    }
    return roundScore;
}

btnRoll.addEventListener('click', rollDice);

/* --- Reset Game --- */

function newGame(){
    roundScore1.innerHTML = 0;
    roundScore2.innerHTML = 0;
    totalScore1.innerHTML = 0;
    totalScore2.innerHTML = 0;

    currentRoundP1 = 0;
    currentRoundP2 = 0;
    overallScoreP1 = 0;
    overallScoreP2 = 0;
    
    diceImage1.src = `images/dice-1.png`;
    diceImage2.src = `images/dice-1.png`;
    diceImage3.src = `images/dice-1.png`;
    diceImage4.src = `images/dice-1.png`;

    stickman1.src = `images/stickman.png`;
    stickman2.src = `images/stickman.png`;

    counter = 0;

    hideSideBar();
}

btnNewGame.addEventListener('click', function(){
    newGame();
});


/* --- Pop Up --- */

popup.style.display = "none";

function popupDisplay(){
    popup.style.display = "block";
    popupWin.style.display = "none";
    popupLose.style.display = "none";
    popupTie.style.display = "none";

    if(overallScoreP1 > overallScoreP2){
        popupLose.style.display = "block";
        stickman1.src = `images/stickwin.png`;
    }else if(overallScoreP1 < overallScoreP2){
        popupWin.style.display = "block";
        stickman2.src = `images/stickwin.png`;
    }else{
        popupTie.style.display = "block";
    }
}

closePopup.addEventListener("click", function(){
    popup.style.display = "none";
    newGame();
});

/* --- Side Bar --- */

const hamburger     = document.getElementById("hamburger")
const sideBar       = document.getElementById("side-bar");
const sideBarText   = document.getElementById("side-bar-text");

hideSideBar();

hamburger.addEventListener('click', function(){
    if(toggleStatus === false) {
        hideSideBar();
        //hides text squishing
        setTimeout(function(){
            sideBarText.style.display = "none";
        }, 75);
    } else {
        openSideBar();
        //hides text squishing
        setTimeout(function(){
            $("#side-bar-text").fadeTo(1000, 1);
        }, 250);
    }   
});

function hideSideBar(){
    sideBar.style.left = "100%";
    toggleStatus = true;
}

function openSideBar(){
    sideBar.style.left = "80%";
    toggleStatus = false;
}