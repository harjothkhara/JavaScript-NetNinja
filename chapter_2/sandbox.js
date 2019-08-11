// arguments & parameters

// function expression - stores a function inside a variable. no hoisting.
// name variable has the scope of this function and can only be used inside it.
// const speak = function(name){
//   console.log(`good day ${name}`);
// };
// can't access name outside of the function because its a local variable. nothing happens.
//console.log(name)

// taken this value "argument" and assigned it to the function local variable - name "parameter". we are passing a value into the function
//speak('mario'); // good day mario

// can pass in multiple parameters into the function
// const speak = function(name, time){
//   console.log(`good ${time} ${name}`);
// };

// the order of the arguments must match the order of the parameters
//speak('mario', 'morning'); // good morning mario

// if no values are set on the function call we can set the values of the parameters within the function.

const speak = function(name='luigi', time='night'){
  console.log(`good ${time} ${name}`);
};
// no arguments passes in then function will assign these default values to the parameters
speak();
// now argument override the default values
speak('shaun', 'day');
