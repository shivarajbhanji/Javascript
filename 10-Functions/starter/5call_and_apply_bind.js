const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

// another airline of lufthansa
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// bcz this is undefined as this will be a regular fn now
// book(23, 'Sarah Williams');
// How to tell js this should be lufthansa or EuroWings?
// call
// apply
// bind
// call
// book(23, 'Sarah Williams');
// sets the this to first arg passed in call() method and all the rest of the args are sent as parameter to the fn we are trying to call
book.call(eurowings, 23, 'Sarah Williams');
/*{
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [ { flight: 'EW 23', name: 'Sarah Williams' } ]
  }*/
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
// same as call but after the first argument it keeps rest of the args in a single array
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// in modern js we use call instead of apply, even though we have args in an array we can use spread operator to pass the values one by one
// book.call(swiss, 583, 'George Cooper')
book.call(swiss, ...flightData);

// bind method
// what if we want to call book method on eurowings many times, then every time we have to use book.call.
// bind is used in this case. Bind doesn't call a fn instead it will return a new fn in which this will be set to whatever we pass in
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

// not only this we can also bind arguments to a certain value and in further calls we just need to pass missing values which in this case is name
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
// wont work as this will point to buy element
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application, means we can preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// addTax can be used multiple times and vat if fixed 23% hence no need to pass this everytime. Instead, we can use bind
// since, we don't care about this keyword here hence bind it to null and pass rate as 0.23
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
