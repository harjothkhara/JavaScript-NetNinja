// example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
// sort these by alphabetical order
names.sort(); // sort() method has an inbuilt algorithm which automatically sorts strings alphabetically. it doesn't create a new array, instead alters the array directly.
names.reverse(); // ["luigi", "yoshi", "chun-li", "shaun", "mario"]
console.log(names);
// ["chun-li", "luigi", "mario", "shaun", "yoshi"]
// sort() then reverse()-->["yoshi", "shaun", "mario", "luigi", "chun-li"]

// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];
//scores.sort();
//scores.reverse();
//console.log(scores); //sorts lowest to highest ONLY by looking at the FIRST number [10, 20, 35, 45, 5, 50, 70]

scores.sort((a,b) => b - a ) // if b is a bigger number b will come first, otherwise a will, if both the same then we don't need to switch.
console.log(scores);
// 70
// 50
// 45
// 35
// 20
// 10
// 5

// example 3 - sorting objects
 const players = [
  {name: 'mario', score: 20},
  {name: 'luigi', score: 10},
  {name: 'chun-li', score: 50},
  {name: 'yoshi', score: 30},
  {name: 'shaun', score: 70}
]
// a, b represent two consecutive elements inside the array which we will compare to see which one should come first. doing the check on every 2 consecutive elements in the array.
players.sort((a,b) => {
  if(a.score > b.score){
    return -1; // a will come first in the sorting array
  } else if (b.score > a.score){
      return 1; // switch them, b will come first in the sorting array
  } else {
    return 0; // a, b are equal - no reordering
  }
});
// we're firing a callback function for each consecutive pair of elements inside the array and we're checking to see whether the score of the first one is > then the score of the second one, now if that true then we return -1 , which means a will come first in the sorted array, which is what we want. Else if, the second one is > then the first one, then we want to switch them, b will first and a will be second. And finally we return 0 is no change is needed i.e both the first element and second are equal.

//shorter version of players.sort() function
players.sort((a,b) => b.score - a.score)
// if b.score > a.score we'll get a positive number, if a.score > b.score we'll get a negative number, and if both the same it'll be 0 and they'll be no change.

console.log(players); // highest score comes first
// {name: "shaun", score: 70}
// {name: "chun-li", score: 50}
// {name: "yoshi", score: 30}
// {name: "mario", score: 20}
// {name: "luigi", score: 10}
