/**
 * This class will include various examples of the REST operator
 * and how it is used.
 */

// SPREAD, used to unpack an array. Used on right side of declaration.
// OUTPUT: Prints "1, 2, 3, 4, 5" all as one string.
// The [3, 4, 5] were unpacked with the spread operator.
const [a, b, c] = [1, 2, ...[3, 4, 5]];
console.log(a, b, c);

// REST, used to pack 'rest' of elements into separate array. Used on left side of declaration
// OUTPUT: Prints "1, 2, 3, [4, 5, 6]".
// First 3 elements are destructured into a, b, c.
// 4, 5, 6 are packed into others using REST
const [x, y, z, ...others] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z, others);

/************************************************************* */

/**
 * Object with data used for exercises below.
 */
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

  orderPizza: function (mainIngredient, ...restOfIngredients) {
    return `Pizza with ${mainIngredient} ${restOfIngredients}`;
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

// REST pattern within object
// OUTPUT: {open: 0, close: 24}, {thu: {...}, fri: {...} }
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

/************************************************************* */

// Use REST parameters within functions
// Pass an arbitrary amount of numbers into the add function
// The REST parameter will pack them into one array
// Call the reduce function on the packed array to add values of elements.
const add = function (...nums) {
  console.log(nums.reduce((a, b) => a + b));
};
add(1, 2, 3, 4, 5, 6);
add(1, 2, 3555);
add(11111, 0, 0, 3);

// We can also use the add function on an array
// First, destructure array into variables with SPREAD operator
// Pass variables into add function
const nums = [23, 5, 7];
const [foo, bar, baz] = [...nums];
add(foo, bar, baz);

/************************************************************* */

// Use the Rest parameter to pass ingredients into the orderPizza
// function within the restaurant object.
// SPREAD elements of ingredients array into separate elements.
// Destructure ingredients array first into main variable, and then
// destructure the REST of them into others variable.
const ingredients = ["Cheese", "Pineapple", "Bacon", "olives", "spinach"];
const [main, ...otherIngs] = [...ingredients];
console.log(main, otherIngs);
