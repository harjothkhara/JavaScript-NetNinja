let age = 25;

// loose comparison (different types can still be equal); types= number, string...

//console.log(age == 25); // true
//console.log(age == '25'); // true
//console.log(age != 25); // false
//console.log(age != '25'); // false

// strict comparison (different types cannot be equal);
console.log(age === 25); // true
console.log(age === '25'); // false - no type conversion going on now behind the scenes
console.log(age !== 25);  // false
console.log(age !== '25');  // true - age is not equal to the string 25, its equal to the number 25
