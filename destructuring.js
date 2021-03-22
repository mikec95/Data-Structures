'use strict';

// Object with data used for exercises below.
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
};

// Destructure from categories array in restuarant object.
// (Descructure left from right)
const [a, b, c, d] = restaurant.categories;
console.log(a, b, c, d);

/** Swap items in array
 *  by destructuring
 */
const arr = [1, 2, 3, 4];

// Desctructure from arr
let [first, second, third, fourth] = arr;

// Swap the first and second value by assigning new values to destructured variables.
[first, second, third, fourth] = [second, first, third, fourth];
console.log(first, second, third, fourth);

