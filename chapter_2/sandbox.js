// while loops - exactly the same thing as for loop, only difference is the syntax

// for (let i = 0; i < 5; i++) {
//   console.log('in loop: ', i);
// }

// infinite loop - we're not incrementing
// let i = 0;

// while (i < 5) {
//   console.log('in loop: ', i);
// }


// let i = 0;

// while (i < 5) {
//   console.log('in loop: ', i);
//   i++;
// }
// in loop:  0
// in loop:  1
// in loop:  2
// in loop:  3
// in loop:  4

const names = [ 'shaun', 'mario', 'luigi'];

let i = 0;
while(i < names.length){
  console.log(names[i])
  i++;
}
// shaun
// mario
// luigi
