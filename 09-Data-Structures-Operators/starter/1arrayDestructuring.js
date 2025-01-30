// Destructuring is a way of unpacking values from an array or an object into seperate variables
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterIndex[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
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
  },
};

// without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring
const [x, y, z] = arr;
// 2 3 4
console.log(x, y, z);

// selecting 1st and 2nd element from categories array
// categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
// Italian Pizzeria will be selected
const [first, second] = restaurant.categories;
// How to select 1st and 3rd element
// we can do this by leaving a hole at 2nd element
// Italian Vegetarian
let [main, , secondary] = restaurant.categories;
// switch main and secondary(swap)
[main, secondary] = [secondary, main];

// Getting multiple values from function using destructuring
// order returns array, so we have to unpack
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested array destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
// 2 [5,6]
//console.log(i, j);
// Destruct inner array as well
const [i, , [j, k]] = nested;
//2 5 6
console.log(i, j, k);

// Default values: This is helpful when the array index we are trying to access isn't available. So, it returns undefined.
const [p = 1, q = 1, r = 1] = [8, 9];
//8 9 1
console.log(p, q, r);
