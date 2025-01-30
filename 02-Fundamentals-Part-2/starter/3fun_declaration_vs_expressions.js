// There are two types of fns
// Function declaration
// Function expressions
// Arrow fns
// Function declaration
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
const age1 = calcAge1(1991);

//Function expression
const calcAge2 = function (birthYear) {
  // anonymous fn
  return 2024 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

// We can call fn before definition in case of fn declaration, but not in case of fn expressions
