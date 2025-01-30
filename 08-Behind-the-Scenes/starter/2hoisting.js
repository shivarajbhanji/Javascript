// variable declared with var doesn't throw any error: but simply print undefined
console.log(me);
// variable declared with let and const throws reference error which says cannot access 'job' before initialization
console.log(job);
console.log(year);

var me = 'shivaraj';
let job = 'swe';
const year = 2001;

// Hoisting with fns
// o/p 6
console.log(add(1, 5));
// ReferenceError: cannot access addExpr before initialization
// bcz addExpr is const
console.log(addExpr(1, 0));
//TypeError: addArrow is not a fn
// bcz addArrow is declared as 'var'. Since, it is stored as undefined in TDZ zone. Now we are trying to call undefined(4,5) which is not a fn
console.log(addArrow(4, 5));
// fn declaration
function add(a, b) {
  return a + b;
}
// fn expression
const addExpr = function (a, b) {
  return a + b;
};

// arrow fn
var addArrow = (a, b) => a + b;

// Pitfall of Hoisting
// we want to deleteCart when numberOfProducts in cart is 0
// However, here we are trying to access var before declaration and hence it return undefined. Which is a falsy value and hence fn gets called which is incorrect
if (!numberOfProducts) deleteShoppingCart();
var numberOfProducts = 10;
function deleteShoppingCart() {
  console.log('All Products deleted');
}

// As a best practice, only use fn and variables after declaring them

// One more difference is variable declared with var keyword is accessible on global object which is not the case with let and const
var x = 1;
let y = 2;
const z = 4;
// true
console.log(x == window.x);
//false
console.log(y == window.y);
//false
console.log(z == window.z);
