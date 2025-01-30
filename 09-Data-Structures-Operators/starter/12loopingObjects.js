// Looping Objects: Object Keys, Values, and Entries
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Property NAMES
// array of keys
// [ 'thu', 'fri', 'sat' ]
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
/*[
    { open: 12, close: 22 },
    { open: 11, close: 23 },
    { open: 0, close: 24 }
  ]*/
const values = Object.values(openingHours);
console.log(values);

// Entire object
/*
[
  [ 'thu', { open: 12, close: 22 } ],
  [ 'fri', { open: 11, close: 23 } ],
  [ 'sat', { open: 0, close: 24 } ]
]
*/
// entire object in an array where each element in an array having key and value
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
