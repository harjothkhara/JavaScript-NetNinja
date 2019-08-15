const form = document.querySelector('.signup-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(form.username.value)
});

// testing RegEx
const username = 'shaunp123';
// lowercase letters at least 6 characters long
const pattern = /^[a-z]{6,}$/;

//using a method on the pattern
// takes in a value you want to test(RegEx method) and returns a boolean
//let result = pattern.test(username);
//console.log(result) // true - still passes because this [a-z]{6,} is in there somewhere, to combat this use a carrot sign at the beg and a dollar sign at the end

// if(result){
//   console.log('regex test passed')
// } else {
//   console.log('regex test failed')
// }
// regex test passed

// using a method on the string
let result = username.search(pattern);
console.log(result); // -1  is we don't get a match otherwise its the position of the match -> a 0 match is the first letter in the string. represent the first letter location where it matches.
