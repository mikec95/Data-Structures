"use-strict";

// You can use any given data type to pass into a conditional statement.
// Javascript has 'truthy' and 'falsy' values for each given data type.
// All values are considered 'truthy' unless specified otherwise
// i.e. '', 0, false, NaN, 0, -0, 0n, null, undefined
console.log(3 || "Jonas"); // Jonas
console.log("" || "Jonas"); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null. This is because neither are truthy, so the final data type analyzed is printed.

console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello -- first truthy value

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

// Use a ternary operator to determine the number of guests in the restaurant.
// Create a numberOfGuests variable, check if numberOfGuests is a property of the restaurant object,
// If so, save that value to the variable, else set to 10.
let numberOfGuests = restaurant.numberOfGuests ? restaurant.numberOfGuests : 10;
console.log(numberOfGuests); // This will print 10 because restaurant.numebrOfGuests is undefined, which is falsy, it falls back to default value.

// Set the value of this property manually, and then short circuit to print the value.
restaurant.numberOfGuests = 50;
numberOfGuests = restaurant.numberOfGuests || 0;
console.log(numberOfGuests); // Prints 50. reestaurant.numberOfGuests is set to 50, which is truthy. The conditional operation short circuits and 50 is printed.
