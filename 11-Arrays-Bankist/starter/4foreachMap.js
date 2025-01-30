const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// value and _ will contain same as there is not key in a set and key will be simply set to curr value
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
