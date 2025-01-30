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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// Focaccia
// Bruschetta
// Garlic Bread
// Caprese Salad
// Pizza
// Pasta
// Risotto
// This is much better than regular for loop where we do initialization, condition check and increment counter
// Here we can still use continue and break
for (const item of menu) {
  console.log(item);
}
// above method won't work if we need both index and element
// we need to call .entries on object we try to iterate
// [ 0, 'Focaccia' ]
// [ 1, 'Bruschetta' ]
// [ 2, 'Garlic Bread' ]
// [ 3, 'Caprese Salad' ]
// [ 4, 'Pizza' ]
// [ 5, 'Pasta' ]
// [ 6, 'Risotto' ]
// each item is an array  with 2 elements namely index and value at that index
for (const item of menu.entries()) {
  console.log(item);
}
//Object [Array Iterator] {}
console.log(menu.entries());
// TO look into this iterator we need to use spread operator
/*[
    [ 0, 'Focaccia' ],
    [ 1, 'Bruschetta' ],
    [ 2, 'Garlic Bread' ],
    [ 3, 'Caprese Salad' ],
    [ 4, 'Pizza' ],
    [ 5, 'Pasta' ],
    [ 6, 'Risotto' ]
  ]*/
console.log([...menu.entries()]);
// since each entry is an array, we can go ahead and destructure
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
