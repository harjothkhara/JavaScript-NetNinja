const name = 'shaun';

// functions - block of code to do something that can be invoked and run at any point in our code. defined here and not on an object or data type.
const greet = () => 'hello';

let resultOne = greet(); // invoking function directly. when we invoke this regular arrow function - function name + parenthesis
console.log(resultOne); // hello

// methods - invoked using dot notation. methods are functions but their functions associated with an object or data type like a string. methods are defined on an object or data type.
let resultTwo = name.toUpperCase() // variable name + dot notation + method name. still a function.
console.log(resultTwo); // SHAUN
