// do while loops - easy way to execute a block of code inside the loop, first, regardless of whether the condition is true or false. execute this code block regardless and increment i, then we run a while condition, and if i < 5 again then we go back up and run the loop again.

let i = 3;

do{
  console.log('val of i is: ', i);
  i++;
} while(i < 5)

// val of i is:  5

i = 4
// val of i is:  4
i = 3
// val of i is: 3
// val of i is: 4
