// object literals

//object
let user = {
  // properties with key value pairs
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);

// if we want to access one of the properties from this object we can use dot notation
console.log(user.name); // crystal

// if you want to override one of the properties values in the user object you can use dot notation on the property value.
user.age = 35;
console.log(user.age); //35

// you can also access and update properties using square bracket notation
console.log(user['name']); //crystal
user['name'] = 'chun-li';
console.log(user['name']); // chun-li

// occasionally square bracket notation can be useful if we're passing some kind of variable
//passing this string via the variable into the square brackets
const key = 'location';
console.log(user[key]); // same as user['location]

console.log(typeof user); // object
