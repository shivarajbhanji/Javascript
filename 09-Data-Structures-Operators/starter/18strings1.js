const airline = 'TAP Air Portugal';
const plane = 'A320';

// Accessing
// result will be still string as there is no concept of char in js
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

// length of a string
console.log(airline.length);
console.log('B737'.length);

// first occurance--indexOf(string) -1 in case it doesn't exists
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

// slice(begin,end), end is optional we can get indices using indexOf and lastIndexOf
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// we want to find the first word in a string
console.log(airline.slice(0, airline.indexOf(' ')));
// last word in a string
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// 'TAP Air Portugal'
// O/P
// al
console.log(airline.slice(-2));
// 'AP Air Portuga'
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  // extract the last char
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
// Whenever we call a method on a string js converts primitive string type to an object new String('Jonas') so that we can access methods of strings, when we are done with the method it is converted back to primitive type
// Object
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
