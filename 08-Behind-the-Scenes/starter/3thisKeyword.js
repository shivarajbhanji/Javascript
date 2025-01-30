'use strict';
// gloabl window object
// window in this case if we see the output in browser
console.log(this);
const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  // undefined
  console.log(this);
};
// regular fn call without any owner/object attached to it. In this case this will point to undefined only in strict mode. In sloppy mode it points to lexical this(window in this case)
calcAge(1990);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  // window as arrow fn doesn't have its own this and hence return outside/lexical this value which is window in our case
  console.log(this);
};
calcAgeArrow(1987);
const jonas = {
  year: 1991,
  calcAge: function () {
    // points to object calling the method, in our case jonas is calling calcAge on line 28
    // However when we call the same method on line 36 in that case this points to matilda object and uses year value from that obj which is 1998, not 1991 from jonas object
    console.log(this);
    console.log(2024 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 1998,
};

// method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calAge();
const f = jonas.calcAge;
// this will be undefined as f is just a regular fn call
f();
