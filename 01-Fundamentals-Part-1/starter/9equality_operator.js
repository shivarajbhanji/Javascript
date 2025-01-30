// There are two ways of checking for equality
// === strict it doesn't do type coersion. Both values and type must be same only then it is true else false
// == loose It does type coersion if required before comparing two values
const age = 18;
if (age === 18) {
  console.log("strict equality check");
}
const money = "1000";
if (money == 1000) {
  console.log("loose equality check");
}

const favouriteNumber = prompt("what's your favourite number?");
// string
console.log(favouriteNumber);
// '23' == 23 true bcz of type coersion
// === doesn't work here, first we need to convert it to number then compare
if (favouriteNumber == 23) {
  console.log("cool");
}

// Similarly there are !=== and !==
