// In js fns are treated as values. That's why we can store fn expressions in a variable and methods as object property.
// Higher order fn is nothing but a fn which receives another fn as input or returns fn  or both.
// ex would be addEventListner which receives callback fn and calls whenever an event on that element occurs
// Also higher order fn enhances
// code reusability
// abstraction by using low level fn without implementing them on own. For ex transformer fn doesn't need to worry how string is transformed
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  // fn can have property as well
  console.log(`Transformed by: ${fn.name}`);
};
/*
Original string: JavaScript is the best!
Transformed string: JAVASCRIPT is the best!
*/
transformer('JavaScript is the best!', upperFirstWord);
/*
original string: JavaScript is the best!
Transformed string: javascriptisthebest!
*/
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
// high5 is a callback fn which js will call whenver we click on body
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

///////////////////////////////////////
