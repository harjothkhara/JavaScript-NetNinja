// regular function

// const calcArea = function(radius){
//   return 3.14 * radius**2;
// };

// arrow function

// const calcArea = radius => {
// return 3.14 * radius**2;
// };

// if we have more then one parameter
// const calcArea = (radius, somethingelse) => {
//   return 3.14 * radius**2;
//   };

// if we have no parameters - anonymous function
// const calcArea = () => {
//   return 3.14 * radius**2;
//   };

// if we only have a single return we can get rid of the return keyword
// const calcArea = radius => 3.14 * radius**2;

// binding of the 'this keyword

// const area = calcArea(5)
// console.log('area is:', area); // area is: 78.5

// practice arrow function

// regular function
// const greet = function(){
//   return 'hello, world';
// }

// arrow function
//const greet = () => 'hello world'; // single line return so no need for return statement
//const result = greet() //storing return value from function to result variable
//console.log(result) // logging the value to the console

// regular function
// const bill = function(products, tax){
//   let total = 0; // local variable
//   for (let i = 0; i < products.length; i++){ // cycling through products array
//     total += products[i] + products[i] * tax; //  cycling through products (array) and for each product we're getting the total and adding the product value plus any kind of tax
//   }
//   return total; // then in the end we're returning the total
// }
// logging this directly in the console instead of saving it to a variable like above. exactly the same.
 //console.log(bill([10, 15, 30], 0.2)) // 66

// arrow function
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
};

 const result = bill([10, 15, 30], 0.2);
 console.log(result); //66
