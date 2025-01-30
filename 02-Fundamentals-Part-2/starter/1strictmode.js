"use strict";
//  This must be first statement in the file. Before that only comments are allowed
// Strict mode helps us to write secure code by
// 1 Forbidding to do certain things while writing code
// 2 Creates visible errors in developers console where in other case it won't show with strict mode off
let hasDriversLicense = false;
const passTest = true;
if (passTest) {
  // spelling error: This is ignored with strict mode being turned off and a new var is created
  // If the strict mode is on then error is thrown
  // Uncaught reference error
  // This will help to identify bugs in the early stage itself
  // This creates new variable and hasDriversLicense still remains false and below if isn't executed
  hasDriverLicense = true;
}
if (hasDriversLicense) {
  console.log("I can drive");
}

// strict mode has reserved keywords like interface, private to implement these features in the future. So we cannot use them for naming our variables
// const interface='audio';
// const private=534;
