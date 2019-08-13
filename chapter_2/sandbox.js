// primitive values

// let scoreOne = 50; // saved in memory (stack)
// let scoreTwo = scoreOne; // saved in memory (stack)

// // template string
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // scoreOne: 50 scoreTwo: 50

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // scoreOne: 100 scoreTwo: 50


// reference values - stored on the heap and we get a pointer locked to the UserOne variable stored on the stack. when we create a copy it doesn't copy the actual object but instead copies the pointer on the stack, and userTwo is locked to that new pointer. They both still point to the same object.

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);
// {name: "ryu", age: 30}age: 40name: "ryu"__proto__: Object {name: "ryu", age: 30}
// {name: "ryu", age: 30}age: 40name: "ryu"__proto__: Object {name: "ryu", age: 30}

userOne.age = 40;
console.log(userOne, userTwo);
// {name: "ryu", age: 40}age: 40name: "ryu"__proto__: Object {name: "ryu", age: 30}
// {name: "ryu", age: 40}age: 40name: "ryu"__proto__: Object {name: "ryu", age: 30}

// both are 40 because the object is only stored once on the heap and the both pointers are pointing to the same object.
