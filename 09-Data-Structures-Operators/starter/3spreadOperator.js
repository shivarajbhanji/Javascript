const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// We have our own array and we want to extend this array and store values of secondary array one by one
const arr = [7, 8, 9];
// Time consuming process
const a1 = [1, 2, 3, arr[0], arr[1], arr[2]];
// spread operator, it is like taking all elements out of the array and writing them manually
const a2 = [1, 2, 3, ...arr];
// [1,2,3,7,8,9]
console.log(a2);
// One more use case is logging individual elements of an array
// [7,8,9]
console.log(arr);
// 7 8 9
console.log(...arr);

// We want to create a new menu
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// Difference bw spread and destructuring is spread takes all the values from an array and doesn't create new variables

// spread operator can be used to create shallow copy of an array
const mainMenu = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starter, ...restaurant.mainMenu];

// Spread operator works on all iterables
// Iterables: arrays,strings,maps,sets not objects
const str = 'jonas';
const letters = [...letters, ' ', 'S.'];
console.log(letters);
// Spread works only when we
// 1 build new array
// 2 pass arguments to a function
console.log(...letters);
// Not allowed
// So again, multiple values separated by a comma are usually only expected when we pass arguments into a function, or when we build a new array.
//console.log(`${...str}`);

// real world example
const ingredients = [
  prompt("Let's make Pasta, Ingredient1?"),
  prompt('Ingredient2?'),
  prompt('Ingedient3?'),
];
console.log(ingredients);
// calling the fn by passing all the values as args manually
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// Using spread operator
restaurant.orderPasta(...ingredients);

// Objects, starting es2018 spread also works on objects
const newRestaurant = { foundedIn: 1990, ...restaurant, founder: 'Rahul' };

// shallow copy
// If we change values of objects inside a property then changes will be done on restaurant object as well if property contains reference type values. In case of primitive types values will be different
const restaurantCopy = { ...restaurant };
