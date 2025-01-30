// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  // we can also use expressions here but we should use variables that are defined before this not after
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
// trick to skip a argument
createBooking('LH123', undefined, 1000);
