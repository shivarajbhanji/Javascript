const friend1 = "Michael";
const friend2 = "Steve";
const friend3 = "Peter";
// If there are lots of data of friends then bundle them together and create one single variable and store them
// Array is collection of that data
const friends = ["Michael", "Steve", "Peter"];
console.log(friends);

const year = new Array(1991, 1984, 2020);
// accessing array elements
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
// in js for const, primitive data types are immumtable but non primitives like objects are mutable
// Array can hold data of any type in js
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2024 - 1990, "teacher", friends];

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const years = [1990, 1998, 1970];
// returns NaN bcz any operation involving no if it fails just returns NaN
// we do 2024-array which js doesn't know how to evaluate this, hence return NaN
//console.log(calcAge(years));
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// Instead of the above logic we can create single array ages
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
