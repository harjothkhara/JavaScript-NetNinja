// function declaration
// function greet(){
//   console.log('hello there');
// }

// function expression - store a function inside a variable
// const speak = function(){
//   console.log('good day!');
// };

// greet();
// greet();
// greet();

// speak();
// speak();
// speak();

// hoisting loosely describes how our functions are hoisted to the top of a file before the rest of our JS actually runs. they're all declared before the rest of our JS. Does this with function declarations but not with function expressions.

// hoisting works with function declarations ---------------------------------------

// greet();
// greet();
// greet();

// function declaration
// function greet(){
//   console.log('hello there');
// }

// JS is using hoisting to hoist the greet() function to the top of the file (defining it before its called) in order for this to work, even though the function declaration is way down at the bottom of the page.

// hello there
// hello there
// hello there

// hoisting does not work with function expressions---------------------------------

speak();
speak();
speak();


// function expression
const speak = function(){
  console.log('good day!');
};
// Uncaught ReferenceError: Cannot access 'speak' before initialization
//function expression are not hoisted to the top
