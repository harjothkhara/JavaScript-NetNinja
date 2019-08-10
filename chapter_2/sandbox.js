// type conversion - turning one data type into another data type

//let score = '100';
//console.log(score + 1); // 1001 its concatenating a string and a number instead od adding numbers

//let score = '100';
//score variable value is converted from a string into a number
//score = Number(score);
//console.log(score + 1);  // 101

//let score = '100';
// checking for type
//console.log(typeof score); // string

//let score = '100';
// doesn't make sense to turn this into a number but lets try it!
//let result = Number('hello');
//console.log(result); //NaN

//let score = '100';
// turing from a numbers to a string
//let result = Boolean(50) // positive and negative numbers are considered a "truthy" value in type conversion, but 0 is false.
//console.log(result, typeof result); // true "boolean"

let score = '100';
// turing from a numbers to a string
let result = Boolean('0') // strings of any length are all "truthy", an empty string would be "falsy"
console.log(result, typeof result); // true "boolean"
