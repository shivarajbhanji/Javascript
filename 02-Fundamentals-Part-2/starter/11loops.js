// Tasks that are repeated again and again for some period of time are clubbed together and written inside a loop to avoid repeating the same code again and again
let s = 0;
// for loop keeps running until the condition is true
for (let i = 1; i <= 10; i++) {
  s += i;
}
console.log(`sum of 10 natural no's is ${s}`);

const jonas = [
  "Jonas",
  "Schmedtmann",
  2024 - 1990,
  "teacher",
  ["Michael", "Peter", "steve"],
];
const types = [];
// log the array elements
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  types.push(typeof jonas[i]);
  // or types[i]=typeOf jonas[i];
}
console.log(types);
const years = [1990, 1978, 1976];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);

// Continue: it skips the current iteration after a certain condition is met
// break: it exits the loop after a certain condition is met

// Looping backwards
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}
