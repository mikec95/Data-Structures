// Move openingHours outside of restaurant and into it's own object.
const openingHours = {
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

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: openingHours,

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
};

console.log(restaurant);
