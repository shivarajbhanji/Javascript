// Rest is similar to spread.
// Spread can be used in two case
// 1 Build an array
// 2 To pass multiple values into a fn
// In both cases we use spread operator to expand an array into individual elements
// Now, the rest pattern uses the exact same syntax. However, to collect multiple elements and condense them into an array. so that's really the opposite of spread
// The spread operator is to unpack an array
// while rest is to pack elements into an array

// 1 Destructuring
// Spread bcz it is on the right hand side of assignment
const arr = [1, 2, ...[3, 4, 5]];
//[1,2,3,4,5]
console.log(arr);
// Rest pattern collect the elements that are unused in the destructuring assignment
const [a, b, ...others] = [1, 2, 3, 4, 5];
// 1 2 [3,4,5]
console.log(a, b, others);
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
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Rest collects all the values after the last variable. It must always be at the end
// It doesn't include any skipped element
// Also there can only be one rest in any destructuring assignment
const [pizza, , risotto, otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
//starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
console.log(pizza, risotto, otherFood);

// Objects
// weekdays will be an object  whereas sat will only hold a property
const { sat, ...weekdays } = restaurant.openingHours;
// sat: {
//     open: 0,
//     close: 24,
//   },
console.log(sat);
// {
//     thu: {
//         open: 12,
//         close: 22,
//       },
//       fri: {
//         open: 11,
//         close: 23,
//       },
// }
console.log(weekdays);

//2 Functions
// rest argument
// Packs the values into an array
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
// we want to pass in any arbitrary amount of arguments to a fn and that should work
add(2, 3);
add(4, 5, 7, 8);
add(29, 9, 7, 5, 6);
const x = [1, 2, 3, 4];
// unpacking using spread
// similar to writing
// add(x[0],x[1],x[2],x[3]);
add(...x);
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// So, the spread and rests syntax both look exactly the same but they work in opposite ways depending on where they are used.
// So the spread operator is used where we would otherwise write values, separated by a comma.
// On the other hand the rest pattern is basically used where we would otherwise write variable names separated by commas.
// So, again the rest pattern can be used where we would write variable names, separated by commas and not values separated by commas.
