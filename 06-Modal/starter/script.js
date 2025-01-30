'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// query selector returns only the first element among multiple elements which matches with the selector value. However, querySelectorAll() returns all the elements that matches the selector value
// since we have 3 buttons with the same class show-modal and we want to add event listener on all three buttons
const btnOpenModals = document.querySelectorAll('.show-modal');

function openModal() {
  // if there are multiple classes to remove then add them in the same function using ,
  // don't use . for class names here, only use them while selecting
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
// modal should be opened whenever show modal is clicked
for (let i = 0; i < btnOpenModals.length; i++) {
  btnOpenModals[i].addEventListener('click', openModal);
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
// modal should be closed whenever a user clicks on X
btnCloseModal.addEventListener('click', closeModal);

//modal should be closed if a user click on overlay, meaning outside area of X button
overlay.addEventListener('click', closeModal);

//modal should also be closed if an user click esc key
// key press are global event bcz they don't occur for any specific element in the dom tree. Hence they should be handled by document(root element)
// there are three types of key events
// keydown
// keyup
// keypress, continuous key press
// Whenever a user enters key how to know esc was pressed?
// js maintains event object which stores info about the event like what key was pressed, timestamp, keycode and so on
document.addEventListener('keydown', function (e) {
  // since e has a lot of properties which stores all the info about the particular event, we are interested in checking if escape was pressed
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // close the modal only if its in open state
    closeModal();
  }
});
