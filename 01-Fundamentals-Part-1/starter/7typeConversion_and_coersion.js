// type conversion is when we explicitly convert type of a variable to another type
// type coersion is done by js implicitly, for ex concatenating string and a number
const inputYear = '1991'
//199118
console.log(inputYear + 18);
// We need to convert string to a number and then add it
console.log(Number(inputYear) + 18);

// NaN not a number:- this is returned when any operation involving numbers fails to return a number
console.log(Number('sarah'));
// Number
console.log(typeof NaN);

console.log(String(20));

// Type coersion
// + with string converts number to string
console.log("I'm " + 23 + "years old");
// -,*,/ with string converts string to number
console.log("10" - "5" - 2);
console.log("23" * "2");