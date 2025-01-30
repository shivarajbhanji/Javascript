// ES-6 feature
// There are 3 ways to define object using object literal syntax
// 1 writing properties
// 2 writing methods
// with es6 no need to write property:function(){}
// order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   }
// we can do this instead
// order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   }

//3 before we could only compute values but with es6 we can compute property names as well
// weekdays=['mon','tue','wed','thu','fri']
/*const openingHours = {
    [weekdays[0]]: {
      open: 12,
      close: 22,
    },
    [weekdays[1]]: {
      open: 11,
      close: 23,
    },
    [weekdays[2]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };*/
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
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // before es6
  // although they have same name we repeat them twice
  //openingHours:openingHours,
  // es6 way
  openingHours,
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
