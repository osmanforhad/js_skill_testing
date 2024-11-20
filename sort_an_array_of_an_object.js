//Question :-
/**
 * How to Shot an Array of an Object
 * By Name and Nuber
 */
let drinks = [
    { name: "lemon", price: 50 },
    { name: "cock", price: 30 },
    { name: "apple", price: 40 }
];
/**
 * Method One
 * Sort by Price
 */
const sortByPrice = drinks.sort((a, b) => {
    return a.price - b.price;
});
console.log("The Output of Sort By Price:", sortByPrice);
/**
 * Method Two
 * Sort by Name
 */
const sortByName = drinks.sort((a, b) => {
    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
});
console.log("The Output of Sort By Name:", sortByName);