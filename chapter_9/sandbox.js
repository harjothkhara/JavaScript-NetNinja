const prices = [20,10,30,25,15,40,80,5];

//const salePrice = prices.map(price => price / 2);
//console.log(salePrice); // [10, 5, 15, 12.5, 7.5, 20, 40, 2.5]

const products = [
  {name: 'gold star', price: 20},
  {name: 'mushroom', price: 40},
  {name: 'green shells', price: 30},
  {name: 'banana skin', price: 10},
  {name: 'red shells', price: 50},
];

const saleProducts = products.map(product => {
  if(product.price > 30){
    return {name: product.name, price: product.price / 2}
  } else {
    return product
  }
});

console.log(saleProducts, products); // original array is still the same. we have not directly changed items in the original array like we would have done here: i.e product.price = product.price /2
