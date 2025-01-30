'use strict';
// Handling the events
// addEventListener expects the type of the event and what to do when that event occurs which is written in a function
// The fn is called by js engine only when the event occurs
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  // the data we get from browser will be in string format, we need to convert it to required format before comparing
  const guess = Number(document.querySelector('.guess').value);
  // if there is no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
});
