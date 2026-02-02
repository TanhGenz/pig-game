"use strict";

// get players total score elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

// reset all total score to 0
score0El.textContent = 0;
score1El.textContent = 0;

/* get the current elements */
const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");

/* get all elements button */
const btnRoll = document.querySelector(".btn--roll"); // button roll
const btnHold = document.querySelector(".btn--hold"); // button hold
const btnNew = document.querySelector(".btn--new"); // button news game
/* another elements */
// dice
const dice = document.querySelector(".dice");
dice.classList.add("hidden");

// get element CSS => to known which role player
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// when wins, player cannot click button anymore accept new games
let playing = true;
/* create variables to hold the current score */
let score, currentScore, activePlayer;
const init = function () {
  /* the place to hold score if switch player */
  score = [0, 0]; //score player 1, player 2
  currentScore = 0; /* create variables to hold the current score */
  playing = true; // when wins, player cannot click button anymore accept new games
  activePlayer = 0; /* get the current role default player  */

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = score[0];
  currentScore1El.textContent = score[1];

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;

  // remove player winner style (both => player 1 and 2) because we dont know at the ends, who will wins
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  playing = true; // playing again
  // hidden dice
  dice.classList.add("hidden");
};
init();

// switch player
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // strong note
  console.log(activePlayer);
  // updates which current active
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    // generate roll dice each clicking
    let rollDice = Math.trunc(Math.random() * 6) + 1;
    // show the dice by imgs
    dice.classList.remove("hidden");
    dice.src = `./imgs/dice-${rollDice}.png`;
    /* conditions to check roll can be 1 or not => if 1 will reset */
    if (rollDice !== 1) {
      currentScore += rollDice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    // 2. Check if player's score is >= 100
    if (score[activePlayer] >= 100) {
      // if have player wins then not lick any more
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
  // Finish the game
});

/* restart the game */
btnNew.addEventListener("click", init);
