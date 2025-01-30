//'use strict';
function calcAge(birthYear) {
  const age = 2024 - birthYear;
  // Since firstName belongs to global scope, so calcAge can access it
  // First it checks for firstName in current scope if found then uses it else performs variable lookup until it finds one.
  // If the var is not present then throws reference error
  console.log(firstName);
  // ReferenceError: lastName is not defined
  //console.log(lastName);

  function printAge() {
    const output = `you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      // firstName of this scope, even though we have same var in global scope but preference is given to local scope than global
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'steven';
      var millenial = true;
      const str = `oh you are a millenial, ${firstName}`;
      function add(a, b) {
        return a + b;
      }
      // updates the output var of parent scope
      // reassigning outer scope variable
      output = 'New Output';
    }
    // str is block scoped
    //console.log(str);
    // if the above if block is executed then we can access millenial var as it is not block scoped and it gets attached to nearest fn
    //console.log(millenial);
    // throws error in strict mode as add is inside if block, but works when strict mode is off
    //add(1,2);
  }
  printAge();
  return age;
}

const firstName = 'Rahul';
calcAge(1990);
