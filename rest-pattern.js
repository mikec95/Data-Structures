/**
 * This class will include various examples of the REST operator
 * and how it is used.
 */

// SPREAD, used to unpack an array. Used on right side of declaration.
// OUTPUT: Prints "1, 2, 3, 4, 5" all as one string.
// The [3, 4, 5] were unpacked with the spread operator.
let [a, b, c] = [1, 2, ...[3, 4, 5]];
console.log(a, b, c);

// REST, used to pack 'rest' of elements into separate array. Used on left side of declaration
// OUTPUT: Prints "1, 2, 3, [4, 5, 6]".
// First 3 elements are destructured into a, b, c.
// 4, 5, 6 are packed into others using REST
[a, b, c, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, others);

// Object with data used for exercises below.
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    return `Pasta with: ${ing1}, ${ing2}, ${ing3}`;
  },

  // Create function to take in object with the following variable names.
  delivery: function ({ name, address, mainIndex, starterIndex }) {
    return `Thank you for your order, ${name}!
      Address: ${address}
      Starter: ${this.starterMenu[starterIndex]}
      Main: ${this.mainMenu[mainIndex]}`;
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

// We can destructure on the right hand side and
// also use the rest pattern on the left hand side.
// REST element MUST be LAST element as well
// OUTPUT: prints "Focaccia, Garlic Bread, [<REST OF MENU>]".
const [first, , third, ...rest] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(first, third, rest);
