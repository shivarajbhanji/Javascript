'use strict';
//document.querySelector('.message') selects the element having class "message"
// when we do .textContent we read the value of textContent property for selected element
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';
// guess is a class name for input field. To access content we need to add .value
// document.querySelector('.guess').value = '23';
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
// adding event listner for check button
// whenever check is clicked value inside input field is printed to the console
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // input is empty
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');
  }
  // when player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // refactored code, when guess is different(both guess>secNo and guess<secNo)
  // DRY principle
  else {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? '📈Too High' : '📉Too Low';
      displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game:(';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }

  /*
  // guess>secret no
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game:(';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
  //guess is less than secret no
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game:(';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }*/

  // Game reset
  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
  });
});
