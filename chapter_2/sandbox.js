// logical operators - OR || AND &&

const password = 'p@ss12';
  // both need to be true for this condition to be satisfied
if(password.length >= 12 && password.includes('@')){
  console.log('that password is mighty strong')
} else if(password.length >= 8 || password.includes('@') && password.length >= 5){
  console.log('that password is strong enough!');
} else {
  console.log('password is not strong enough');
}
