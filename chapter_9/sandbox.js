// chaining array methods together
const products = [
  {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50}
];

const filtered = products.filter(product => product.price > 20);

const promos = filtered.map((product) => {
  return `the ${product.name} is ${product.price / 2} pounds`; // returning this for each case
})

console.log(promos);
// "the gold star is 15 pounds"
// "the red shell is 20 pounds"
// "the mushroom is 25 pounds"

// a quicker way to do this would be through method chaining(since both filter and map work with arrays)
// returns an array so we can chain on the map method which works on an array, and vice versa.
const promos = products
  .filter(product => product.price > 20)
  .map(product => `the ${product.name} is ${product.price / 2} pounds`);

  console.log(promos);
  // "the gold star is 15 pounds"
// "the red shell is 20 pounds"
// "the mushroom is 25 pounds"
