'use strict';
document.querySelector('.message');
//selects the element having class "message"
//when we do .textContent we read the value of textContent property for selected element
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
//guess is a class name for input field. To access content we need to add .value
document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);
