// reduce method
//const scores = [10,20,60,40,70,90,30] ----------

//acc = accumulator - a running total
//curr = current - current value.

// const result = scores.reduce((acc, curr) => { -----------------
// // for each item in this array we're firing this callback function. each time around we have access to this accumulator, and the value of this accumulator is remembered through each item as we fire each callback function. it remembers that value each time we fire a callback function as we cycle through each item in the array. we're accumulating values, and for each iteration we can edit that value, its a running total. the value doesn't have to be a number, it could be an object, and for each iteration we could add a new property to that object, or change a property on that object...as we iterate through the value is current. if the current value(curr) in the cycle is > 50 we'll add 1 to it(acc)...so we're counting the number of scores > 50
//   if(curr > 50){
//     acc++;
//   }
//   return acc; //for each callback function we're returning the value of acc at the end of that iteration. Then that's the value that gets passed into the next iteration
// }, 0); // this is the initial value of the accumulator

//console.log(result); // 3

const scores = [
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60},
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60},
  {player: 'mario', score: 80},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60},
  {player: 'mario', score: 90},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60}
]; // use reduce to add up the total score just for mario

const marioTotal = scores.reduce((acc, curr) => {
  if(curr.player === 'mario'){
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(marioTotal);
