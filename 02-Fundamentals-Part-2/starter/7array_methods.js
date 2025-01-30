const friends = ["Michael", "Steve", "Peter"];
// Add Elements
// add element to the end
// after pushing data to the end push returns new length
// storing it is optional
const newLength = friends.push("Jay");
console.log(newLength);

// Adding element to the beginning of the array
// Unshift returns length of the new array just like push method
friends.unshift("John");
console.log(friends);

// Remove elements
// Pop Removes last element
// returns the popped element
const lastElement = friends.pop();
console.log(lastElement);

// Shift remove first element
// also returns the element removed
friends.shift();
console.log(friends);

// Finding an element in the array
// indexof returns the array index if the element is found else -1
// returns the position of certain element in the array(1st occurance)
// 1
console.log(friends.indexOf("Steve"));
// -1 bcz element isn't present
console.log(friends.indexOf("Bob"));

console.log(friends.findIndex("Michael"));

// We have includes as well, we can use this to write conditional statements
// It returns true/false
// It does strict equality check
// true
console.log(friends.includes("John"));
if (friends.includes("Jay")) {
  console.log("You have a friend called Jay!");
}
