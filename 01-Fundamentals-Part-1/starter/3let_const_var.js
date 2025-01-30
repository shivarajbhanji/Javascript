// let is used when we need to update the variable in future
// const is used when the variable's value is constant throughout the program
let age = 22;
age = 23;
const birthYear = 2001;
// error
// TypeError: Assignment to constant variable.
// birthYear = 2002;

//SyntaxError: Missing initializer in const declaration
//const year;
// among let and const always use const for clean code and use let only if you are sure that value will change
