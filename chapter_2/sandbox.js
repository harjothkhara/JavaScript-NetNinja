// variables & block scope

// global scope
let age = 30;

if(true){
  // local scope - can only be accessed within this code block
  let age = 40;
  let name = 'shaun'
  console.log('outside code block: ', age, name);

  if(true){
    // local scope - can only be accessed within this code block
    let age = 50;
    console.log('inside 2nd code block: ', age);
  }
}

console.log('outside code block: ', age, name);

// same rules apply to const and let as far as local scope - or their lexical environment. var ignores block scope.
