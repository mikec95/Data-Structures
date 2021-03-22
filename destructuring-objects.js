"use strict";

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

// When destructuring arrays, the order does not matter,
// however the variable names must match the object's property names exactly
const { name, categories, openingHours } = restaurant;

// In order to create variables with new names to destructure to,
// include a colon and the new variable name, like so:
const {
  name: restuarantName,
  categories: cats,
  openingHours: hours,
} = restaurant;
console.log(restuarantName, cats, hours);

// Include default values as well, to avoid undefined.
// This can be useful when using a variable name
// that does not match any of the objects property names.
const { menu = [], starterMenu: apps } = restaurant;

// Instead of 'undefined', for the menu (since menu does not exist in restuarant),
// an empty array will appear.
console.log(menu, apps);

/** Mutating variables from destructured objects */
let a = 100;
let b = 200;

// Create object with property names === above variables.
const obj = { a: 5, b: 10 };

// Destructure, however wrap statement in parens to avoid Syntax Error.
// NOTE: this is necessary when mutating variables by destructuring.
({ a, b } = obj);

// Variables from above will be mutated into 5 and 10.
console.log(a, b);

/** Destructuring from nested objects */
// The restuarant object includes a nested object for the opening hours.
// The opening hours has already been destructured and saved to an openingHours variable. (ln 32)
// Start by destructuring from openingHours for Saturday:
const { sat } = openingHours;

// prints saturday properties and values.
console.log(sat);

// Destructure from Saturday.
const { open } = sat;
console.log(open);
