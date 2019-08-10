let radius = 10;
const pi = 3.14;

//console.log(radius, pi);

// math operators +, -, *, /, **(to the power of), %(remainder)-----------------------

//console.log(10/2);
//let result = radius % 3; //takes the radius, divides it by 3 and gives us a remainder
//1

//let result = pi * radius**2 //area of a circle = pi r squared
//314

// order of operation - how you perform calculations when they become complex - B I D M A S -----------
// Brackets Indexes(**) Division Multiplication Addition Subtraction

//let result = 5 * (10-3)**2

//console.log(result);

let likes = 10;

// likes = likes + 1;

// short hand notation:---------------
// likes++; //same as adding 1
//likes--; //same as subtracting 1

//likes += 10; //take the current variable value and add 10 to it
//likes -=5; // take the current variable value and subtract 5 from it
//likes *=2; //take the current variable value and multiple 2 to it
//likes /=2; //takes the current variable value and divide it by 2
//console.log(likes);

// NaN - not a number------------------ trying to do some calculation that doesn't result in a number
//console.log(5 /'hello'); //NaN
//console.log(5 * 'hello'); //NaN

// concatinate numbers - take the numbers and adds it into the string

let result = 'the blog has ' + likes + ' likes';
console.log(result);
