// LOGICAL ASSIGNMENT OPERATOR
const rest1 = {
  name: 'capri',
  numberOfGuests: 10,
};
const rest2 = {
  name: 'La Pizza',
  owner: 'Rahul',
};
// set default number of guests for all the objects that do not have a particular property
rest1.numberOfGuests = rest1.numberOfGuests || 10;
rest2.numberOfGuests = rest2.numberOfGuests || 10;

// consice way
// OR Assignment operator
rest1.numberOfGuests ||= 10;
rest2.numberOfGuests ||= 10;

// But this will again fail if we have numGuests property but it holds 0. In that case 0 is treated as a falsy value
// Solution is Logical nullish assignment operator
rest1.numberOfGuests ??= 10;
rest2.numberOfGuests ??= 10;

// another assignment is to replace owner names if exists with anonymous
// AND Assignment operator
rest2.owner &&= '<ANONYMOUS>';
