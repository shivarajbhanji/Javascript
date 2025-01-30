'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  // no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  // when player wins
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'correct Number';
    // These styles are applied as inline style
    // when a player wins body background should be changed from white to green
    document.querySelector('body').style.backgroundColor = '#60b347';
    // also increase the width where ? is shown every time a player guess a number
    document.querySelector('.number').style.width = '30rem';
  }
  // when guess is different
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is different
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
