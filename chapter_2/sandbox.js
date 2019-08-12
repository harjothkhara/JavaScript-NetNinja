// Math object

console.log(Math); // different methods attached to the Math object
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045 Eulers Number

//methods

const area = 7.7;

// round() take a number and rounds it to the nearest integer, either up or down.
console.log(Math.round(area)); //8
// floor() takes a number down to integer, regardless if its closer to one integer or not.
console.log(Math.floor(area)); //7
// ceil() opposite of floor and rounds a number up
console.log(Math.ceil(area)); //7
// trunc() takes away the decimal and leave the integer
console.log(Math.trunc(area)); //7

// use case of Math object

//random numbers --random() is a random decimal number between 0 and 1

const random = Math.random();

console.log(random);
console.log(Math.round(random)); // either 1 or 0 every time
console.log(Math.round(random * 100)); // any number between 1 and 100
