/**
 * Optional Chaining is a new feature of ES6
 * that allows you to check the property value
 * of a property deep within an object, without
 * having to check if the property is valid.
 */
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  mon: {
    open: 8,
    close: 9,
  },
  tue: {
    open: 8,
    close: 10,
  },
  wed: {
    open: 7,
    close: 12,
  },
  thu: {
    open: 9,
    close: 19,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order: (starterIndex, mainIndex) => [
    this.starterMenu[starterIndex],
    this.mainMenu[mainIndex],
  ],

  orderPasta: (ing1, ing2, ing3) => `Pasta with: ${ing1}, ${ing2}, ${ing3}`,

  orderPizza: (mainIngredient, ...restOfIngredients) =>
    `Pizza with ${mainIngredient} ${restOfIngredients}`,

  delivery({ name, address, mainIndex, starterIndex }) {
    return `Thank you for your order, ${name}!
            Address: ${address}
            Starter: ${this.starterMenu[starterIndex]}
            Main: ${this.mainMenu[mainIndex]}`;
  },
};

// For example, if you wanted to check the hours for Thursday,
// you would implement something like this:
// UNCOMMENT TO USE EXAMPLE. THIS LOG THROWS AN ERROR AND BREAKS THE REST OF THE FILE
//console.log(restaurant.openingHours.sat.open); // This will throw a TypeError 'open' of undefined, since sat does not exist.

// You can work around this by implementing the CHAIN OPERATOR.
// With optional chaining, undefined is immediately returned if
// a property is invalid
console.log(restaurant.openingHours.sat?.open); // A check for the property immediately before the '?' is conducted.

// EXAMPLE: Loop through the days of the week and output whether the shop it open on each day of the week.
// hint: use optional chaining.
for (const day of days) {
  const weekday = day;
  console.log(
    `On ${weekday}: ${restaurant.openingHours[day]?.open ?? "Not Open"}`
  );
}
