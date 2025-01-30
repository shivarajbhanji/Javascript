// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// we can't do this as marriedJessica is const and we are trying to change memory address, Above code works bcz we aren't changing mem address
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Only works on first level i,e it is shallow copy. What if we have another object within an object. It again points to copied object's reference for that obj
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

// This updates to both jessicaCopy and jessica2
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

// Only lastName is preserved before the marriage but family points to same in case of both before and after marriage
// We use LoDash to achieve deep copy of objects
console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
