// callbacks & foreach

// so far we've been passing in strings or numbers as arguments but we can also pass in a function as another argument, when we do this the function we pass in is called a callback function.

//function expression called myFunc which is a arrow function. creating our own function here and passing in a callback function that we define below
const myFunc = (callbackFunc) => {
  // do something
  let value = 50; // local variable
  callbackFunc(value); // call callback function that was passed in
};

myFunc(function(value){ // myFunc() calling myFunc function but instead of passing in a string or something, instead, we're passing in a function as an argument
  // do something
  console.log(value);
});

// turning into an arrow function
myFunc(value => {
  // do something
  console.log(value);
});

//example----------------------------

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
// forEach() method iterates over an array, a bit like a loop, but more elegant. expects a callback function as an argument
// iterates through the people array, and for each element inside that array it calls this callback function, so its going to console.log('something') for each element in that array
people.forEach(function(){
  console.log('something')
});

// defining callback function somewhere else amd then passing it into the forEach(), or whatever method we're using.
const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`)
}

//inside this callback function we can take in some parameters, first is whatever the value is that we're iterating over, so every time we fire the function for each individual element, we get that element as our first parameter. I'm calling it person b/c it makes sense to use the singular of people (you can call it whatever you want). again, all we're doing is iterating through this array using foreach() and firing a callback function, which we pass through as an argument to the forEach() method for each individual item in the array and we get access to that person in the array each time around. we can also take in an optional parameter as an argument to the forEach() method, which is the index of the element. best to write callback functions directly in as an argument into the method, especially if its a small function, otherwise define the callback function somewhere else and pass it in - advisable for large functions.
        // individual element,
people.forEach((person, index) => {
  console.log(index, person)
});

// defining callback function somewhere else amd then passing it into the forEach(), or whatever method we're using. doing exactly the same thing as above.
people.forEach(logPerson);
