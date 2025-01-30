// Properties of logical operators
// 1.They can use ANY data type
// 2.Return any data type
// 3.Short-circuiting
// o/p 3
// First operand is truthy value hence 3 is returned
// It is not printed as true instead exact value is printed i,e 3
// Hence, result of them need not be boolean
// ----------------OR---------------
console.log(3 || 'Jonas');
// Jonas
console.log('' || 'Jonas');
// true
console.log(true || 0);
//null
console.log(undefined, null);
// hello
// traverses and finds the first occuring truthy value. Else, returns the last one if all are falsy
console.log(undefined || 0 || '' || 'hello' || 23);

restaurant.numGuests = 0;
// if numGuests proprty doesn't exist we want to store default value as 10
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// even though 0 can be numGuests. However, it is considered as falsy value and 10 is taken
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
// continues until the result is false and shortcircuits
// It return the first falsy value or returns the last value if all the values prior to that are truthy values
// 0
console.log(0 && 'Jonas');
// Jonas
console.log(7 && 'Jonas');
// null
console.log('Hello' && 23 && null && 'jonas');

// Practical example
// checking if a certain property or value exists
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// checks orderPizza exists or not if yes then calls the fn
// but this code is hard to read than the above one. Better to use if statement
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// In real world even can use OR operator to set default values and AND to execute code in the second operand if the first one is true
