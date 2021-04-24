/**
 * This will teach different use cases of the REST pattern,
 * which is similar to the SPREAD operator
 *
 * The REST parameters
 */

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

// SPREAD operators are on the right hand side of the declaration,
// like so..
const [a, b, c] = [1, 2, ...[3, 4]];

// REST p
