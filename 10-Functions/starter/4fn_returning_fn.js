//Functions Returning Functions
// This is useful in functional programming
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
// Hey Jonas
greeterHey('Jonas');
greeterHey('Steven');

// Hello Jonas
greet('Hello')('Jonas');

// Challenge
// one arrow fn returning another arrow fn
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Shivaraj');
