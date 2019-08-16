// find method
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find(score => score > 50 // as soon as it find an item in the array where this statement is true it stops there. its stopping when it fist finds a value that passes this condition.
);

console.log(firstHighScore); //60
