// storing string data inside the array
let ninjas = ['shaun', 'ryu', 'chun-li'];

//ninjas[1] = 'ken'; // override certain values in different positions inside the array
//console.log(ninjas[1]);

// storing numbers inside the array
//let ages = [20,25,30,35];
//console.log(ages[2]);

// can store different data types inside an array
//let random = ['shaun', 'crystal', 30,20];
//console.log(random)

//arrays like strings, and numbers have properties and methods.

// length property counts how many elements are inside the array
//console.log(ninjas.length); //3

// array methods ----------------

// join() - takes an array and joins all the elements inside them into a single string
//let result = ninjas.join(',')
//console.log(result); //shaun,ryu,chun-li

// indexOf() - finds the position numbers of an item inside the array
//let result = ninjas.indexOf('chun-li');
//console.log(result); //2

// concat() -  take our array and it concatenates(joining) another array with it
//let result = ninjas.concat(['ken', 'crystal'])
//console.log(result); // ["shaun", "ryu", "chun-li", "ken", "crystal"]

// push() - pushes on a new value onto an array and returns the length of the new array. the new length since we've just added a new item to the array. some methods don't alter the original value, while some methods do, the push method is one that alters the original value. for that reason this is a a destructive method. does it destroy it but changes it
//let result = ninjas.push('ken');
//console.log(result); //4
//console.log(ninjas); // ["shaun", "ryu", "chun-li", "ken"]

// pop() - another destructive method that changes the original value. pop takes of the end value. returns the value that it popped off from the array.
let result = ninjas.push('ken');
console.log(ninjas); // ["shaun", "ryu", "chun-li", "ken"]
result = ninjas.pop(); // ken has been popped off from the end of the array
console.log(ninjas); // ["shaun", "ryu", "chun-li"]
console.log(result); //ken -- pop off value
