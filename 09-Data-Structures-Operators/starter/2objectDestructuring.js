const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterIndex[starterIndex], this.mainMenu[mainIndex]];
  },
  // This is helpful if there are a lots of property in an object and we don't want to write everything in an orderly manner. We can use object destructuring in that case
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
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

// Object Destructuring
// Order doesn't matter in objects, So no need to skip properties(hole) to maintain order
// {...} should be same as object property names
const { name, openingHours, categories } = restaurant;
// Here we want to customize the names of the variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// Default values
// Since menu property isn't present so it stores [] whereas starterMenu is present hence it returns the value
// this way is useful in real world where we don't know much about data we are receiving, getting data from 3rd party api
// menu isn't present so it returns undefined. But since we have a default value here, undefined will be replaced by []
const { menu = [], starterMenu: starters = [] } = restaurant;

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// can't do this as a,b already exists
// const{a,b}=obj
// js expects code block inside {}.
//{a,b}=obj;
// Solution is just add ()
// Now a=23 b=7
({ a, b } = obj);
// Nested Objects
//fri: {open: 11, close: 23}
//const { fri } = openingHours;
const {
  fri: { open: o, close: c },
} = openingHours;
// 11 23
console.log(o, c);
