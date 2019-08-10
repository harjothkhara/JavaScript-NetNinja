// break and continue - break takes you out of the loop if the condition preceding the break is met, there's no more iterations and its onto the next code block. continue jumps directly onto the next iteration without executing any code.

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

if(scores[i] === 0){
  continue;
  //if this condition is met then its going to ignore the code block below and go onto the next iteration
}

  console.log('your score: ', scores[i]);

  if(scores[i] === 100){
    console.log('congrats, you got the top score!');
    break;
  }

}

// 0 is not logged to the console.

// your score:  50
// your score:  25
// your score:  30
// your score:  100
// congrats, you got the top score!
