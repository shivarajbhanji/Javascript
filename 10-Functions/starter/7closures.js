// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
/*
This Booker function here is simply a function that exists out here in the global environment or in the global scope, right?

And the environment in which the function was created.

So this here basically, this environment is no longer active.

It is in fact gone.

But still the Booker function somehow continues to have access to the variables that were present at the time that the function was created. And in particular, this passengerCount variable here.

And so that's exactly what the closure does. So we can say that a closure makes a function remember all the variables that existed
at the function's birthplace essentially, right?

So we can imagine the secure booking as being the birthplace of this function. So of the Booker function, essentially.

And so this function remembers everything at its birthplace, by the time it was created. And this cannot simply be explained with the scope chain alone.

NOTE: A fn always has access to var env of the execution context in which it was created even after that execution context is gone
CLOSURE: A var env attached to the fn, exactly as it was at the time and place the fn was created
A Closure makes sure that a fn doesn't loose connection to variables that existed at the fns birth place
*/
const booker = secureBooking();

/*
So the function attempts to increase the passengerCount variable.
However, this variable is not in the current scope.
And so JavaScript will immediately look into the closure and see if it can find the variable there.
And it does this even before looking at the scope chain.
For example, if there was a global passengerCount variable set to 10, it would still first use the one in the closure.
So the closure basically has priority over the scope chain.
*/
booker();
booker();
booker();
// we get a list of things that a fn maintains which contains scope info like closure
console.dir(booker);

// More Closure Examples
// Example 1
let f;
// Closure will also be created even if we don't return a fn. Here f=fn()
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
// f can access g var env even after it's exeuction context is popped
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
// Timer is another good example of a closure
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    // uses perGroup from closure even though same is present in global scope at line 90
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
