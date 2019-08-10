// else if statements - only one code block will run. we can chain as many else if statements as we want

const password = 'p@ass';

if(password.length >= 12){
  console.log('that password is mighty strong')
} else if(password.length >= 8){
  console.log('that password is long enough!');
} else {
  console.log('password is not long enough');
}
