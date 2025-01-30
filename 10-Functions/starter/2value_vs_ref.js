// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  // changes the original object
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
// since pass number is changed we can't check in anymore
checkIn(flight, jonas);
// Js doesn't have pass by ref. Even though it looks like. In cpp we can pass by ref for primitives but not in js
// In case of objects we pass a ref which is still a value but not pass by reference
