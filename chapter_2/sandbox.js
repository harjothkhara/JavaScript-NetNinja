//common string methods

let email = 'mario@thenetninja.co.uk';

//lastIndexOf method finds the last index of a particular character('n') in a string
// let result = email.lastIndexOf('n'); //14

//slice method slices a section from the string, takes 2 args, 1 = starting point 2= ending point
//let result = email.slice(2, 5); //rio

// substr() is very much like slice but the 2 args are different - 1.start position 2. characters you want to go along. starts at position 4 and gets 10 characters total afterwards
// let result = email.substr(4,10) //o@thenetni

// replace() method replaces a certain character in the string with another character. take 2 arguments 1st the character you want to find and the second the replacement character. it only replaces the first character it finds.

let result = email.replace('n', 'w') //mario@thewetninja.co.uk

console.log(result);
