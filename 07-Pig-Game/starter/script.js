'use strict';

//selecting elements
// to manipulate active bg
// putting white background on active player or visual changes when we switch players
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// scores accumulated after each round of dice roll
const score0El = document.querySelector('#score--0');
// another way and this is faster than queryselector
const score1El = document.getElementById('score--1');

// current score of each player
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
// new game
const btnNew = document.querySelector('.btn--new');
// roll dice
const btnRoll = document.querySelector('.btn--roll');
// hold score and switch
const btnHold = document.querySelector('.btn--hold');

// starting conditions

let scores, currentScore, activePlayer, playing;

const init = function () {
  // This maintains the state of scores of each player accumulated after each round of dice roll
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // dice should be set to hidden initially
  diceEl.classList.add('hidden');
  // we don't know which player won, even if no one has won we can still remove. It present in one of these it will remove. Else no change
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  // if player 2 was playing before new game was pressed then it is essential, else no change
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  // before switching set current score of prev player=0
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  //switch players
  activePlayer = activePlayer === 0 ? 1 : 0;
  // add active player bg to new player and remove from the previous player
  // toggle adds the class if not present and removes the class if it is present
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

  // current score of new player should be set to 0
  currentScore = 0;
};

// Roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random number between 1-6
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. display rolled dice
    diceEl.classList.remove('hidden');
    // depending on the random number generated above we dynamically select the dice to select
    diceEl.src = `dice-${dice}.png`;
    //diceEl;
    //3. if roll is 1 then switch players
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if score>=100 if yes then player wins
    if (scores[activePlayer] >= 100) {
      playing = false;
      // remove the dice which is still visible
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    //3 else switch players
    else {
      switchPlayer();
    }
  }
});

// reset the game
btnNew.addEventListener('click', init);
