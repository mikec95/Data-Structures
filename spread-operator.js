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

// Use the spread operator (...) to pull elements from
// array and add them to new array as separate elements.
let newMenu = ["Panini", "Cereal", ...restaurant.mainMenu];

// ["Paninni", "Cereal", "Pizza", "Pasta", "Risotto"]
console.log(newMenu);

// Adding restaurant.mainMenu to the newMenu2 without the spread operator,
// Will add the whole array to the newMenu2.
let newMenu2 = ["Panini", "Cereal", restaurant.mainMenu];

// ["Panini", "Cereal", ["Pizza", "Pasta", "Risotto"]]
console.log(newMenu2);
