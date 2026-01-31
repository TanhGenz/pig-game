`use strict`;

// get imgs to display dices roll
const dices = {
  dice1: "imgs/dice-1.png",
  dice2: "imgs/dice-2.png",
  dice3: "imgs/dice-3.png",
  dice4: "imgs/dice-4.png",
  dice5: "imgs/dice-5.png",
  dice6: "imgs/dice-6.png",
};

//user rolls dice
let rollDice = Math.trunc(Math.random() * 6) + 1;

// player points
let player1 = document.getElementById("score--0");
let player2 = document.getElementById("score--1");

// current display players score
let scoreP1 = document.querySelector("#current--0");
let scoreP2 = document.querySelector("#current--1");

// button roll
const btnRoll = document.querySelector(".btn--roll");
// button hold
const btnHold = document.querySelector(".btn--hold");

let finalscore1 = 0;
btnRoll.addEventListener("click", function () {
  let rollDice = Math.trunc(Math.random() * 6) + 1;
  console.log(rollDice);

  if (rollDice !== 1) {
    finalscore1 += rollDice;
    scoreP1.textContent = finalscore1;
  } else {
    finalscore1 = 0;
    scoreP1.textContent = finalscore1;
  }
});

btnHold.addEventListener("click", function () {
  player1.textContent = finalscore1;
});
