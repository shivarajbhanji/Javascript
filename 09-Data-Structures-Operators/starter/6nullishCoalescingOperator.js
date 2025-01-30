// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '') It is like considering 0 and '' string as truthy values
// similar to or, returns the first thruthy value or last if all values prior to last are falsy
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
