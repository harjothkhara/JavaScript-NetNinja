// returning values

// const calcArea = function(radius){
//   let area = 3.14 * radius**2;
//   console.log(area); not being stored in memory
// }
// // area is only stored locally within the function
// calcArea(5); // 78.5
// console.log(area); // area is not defined

// using the return keyword in the function to return a value
// const calcArea = function(radius){
//   let area = 3.14 * radius**2;
//   // now we're not logging the area to the console anymore, instead we're returning a value
//   return area
// }

// if a function returns a value we need to take that value and store it to a variable that has global scope. doesn't matter what that variable is called, area just makes the most sense.
//const area = calcArea(5);
//console.log(area); 78.5

//clean up - we don't need to store this to a local variable, we can just return it directly.

// function expression - no hoisting
const calcArea = function(radius){
  return 3.14 * radius**2;
};
// save the return value to a global variable, pass in an argument and console.log the result
const area = calcArea(5)
console.log(area); // 78.5

// benefit is we can now take that area and do something with it and use it another function to calculate volume amd pass in area.
 const calcVol = function(area){

 }

 calcVol(area)

 // we're now able to reuse a value that a function brings back to us
