const jonasObj = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2024 - 1990,
  profession: "teacher",
  friends: ["Michael", "Steve", "Peter"],
};

console.log(jonasObj.lastName);
// with bracket notation we need to write key in form of string. Also, since we use string we can write an expression which results in string
console.log(jonasObj["lastElement"]);

const nameKey = "Name";
console.log(jonasObj["first" + nameKey]);
console.log(jonasObj["last" + nameKey]);

// Not allowed in . dot notation we have to use final key only
// console.log(jonasObj.'first'+nameKey);
const interestedIn = prompt("What do you want to know about jonas");
// Using . notation
// This will not evaluate interestedIn and it will instead look for interestedIn as key
// returns undefined<--- this is returned when we try to access a property that doesn't exists
//jonasObj.'firstName'
console.log(jonasObj.interestedIn);
// checks if a property exists
if (jonasObj[interestedIn]) {
  console.log(jonasObj[interestedIn]);
} else {
  console.log("Wrong request!");
}

// adding new properties using . and []
jonasObj.location = "USA";
jonasObj["twitter"] = "jonas@twt";
console.log(jonasObj);

// Challenge
// print
// Jonas has 3 friends, and his best friend is Michael
console.log(
  `${jonasObj.firstName} has ${jonasObj.friends.length} friends, and his best friend is ${jonasObj["friends"][0]}`
);
