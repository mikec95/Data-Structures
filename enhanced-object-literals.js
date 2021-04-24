/**
 * This file will showcase various ways of using object literal ES6 features.
 * These features include:
 * - Object Initialization From Variables
 * - Shorthand object method definition
 * - Dynamic property keys
 */

// ES6 FEATURE: DYNAMIC PROPERTY KEYS
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
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
// With ES6, you can access properties of the object based on variables
// using bracket notation.
console.log(openingHours.thu.open);
console.log(openingHours[days[3]].open); // If a property name is stored in a variable, you have to use bracket notation.

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 FEATURE: Object Initialization From Variables
  // Use ES6 features to assign openingHours object values to restuarant.openingHours
  openingHours,

  // ES6 FEATURE: Shorthand object method definition
  // Methods can also use the following syntax with ES6.
  // This removes the 'function' keyword and the curly braces
  order: (starterIndex, mainIndex) => [
    this.starterMenu[starterIndex],
    this.mainMenu[mainIndex],
  ],

  orderPasta: (ing1, ing2, ing3) => `Pasta with: ${ing1}, ${ing2}, ${ing3}`,

  orderPizza: (mainIngredient, ...restOfIngredients) =>
    `Pizza with ${mainIngredient} ${restOfIngredients}`,

  // Create method to take in object with the following variable names.
  delivery({ name, address, mainIndex, starterIndex }) {
    return `Thank you for your order, ${name}!
          Address: ${address}
          Starter: ${this.starterMenu[starterIndex]}
          Main: ${this.mainMenu[mainIndex]}`;
  },
};

console.log(restaurant);
