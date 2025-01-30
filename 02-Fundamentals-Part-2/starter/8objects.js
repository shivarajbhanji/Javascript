const friends = ["Michael", "Steve", "Peter"];
const jonas = ["Jonas", "Schmedtmann", 2024 - 1990, "teacher", friends];
// In array there is now way to assign value to a key like firstName, lastname. Instead we have to remember the order and use indexing
// In that case object can be used
// Object is nothing but a collection of key-value pairs
// Object doesn't maintain the data in order.
// object literal syntax
const jonasObj = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2024 - 1990,
  profession: "teacher",
  friends: ["Michael", "Steve", "Peter"],
};
