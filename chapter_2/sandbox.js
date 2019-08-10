// Boolean - true/false - we use booleans to evaluate conditions in our code and check whether certain things are true or false.

// booleans & comparisons
console.log(true,false,"true","false");

// methods can return booleans
let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

//let result = email.includes('@');
//console.log(result); // true

//let result = names.includes('bowser');
//console.log(result); // false

// comparison operators - compare 2 things together and return true or false
let age = 25;

// console.log(age == 25); // true
// console.log(age == 30); // false
// //is age not equal to 30?
// console.log(age != 30); // true
// console.log(age > 20); // true
// console.log(age < 20); // false
// console.log(age <= 25); // true
// console.log(age >= 25); // true

let name = 'shaun';

console.log(name == 'shaun'); // true
console.log(name == 'Shaun'); // false
// later letters in the alphabet are greater then earlier letters...looking at first letter of string
console.log(name > 'crystal'); //  true -> s > c
console.log(name > 'Shaun'); //  true -> lowercase letter is greater than an uppercase letter
console.log(name > 'Crystal'); //  true -> s > c also, lowercase > uppercase

// ==  abstract equality or loose equality, the values type is not considered on the comparison
