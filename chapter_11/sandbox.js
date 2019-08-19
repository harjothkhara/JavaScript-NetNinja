const now = new Date();
// reference the dateFns library, use the isToday method on it and pass it the current date variable.
//console.log(dateFns.isToday(now)); // true - returns a boolean, however if i input a timestamp numbers into the new Date then it will be false, as it will be representing a date in the past not today.

// formatting options
console.log(dateFns.format(now, 'YYYY')) // 2019
console.log(dateFns.format(now, 'MMMM')) // August
console.log(dateFns.format(now, 'MMM')) // Aug
console.log(dateFns.format(now, 'dddd')) // Sunday
console.log(dateFns.format(now, 'Do')) // 18th
console.log(dateFns.format(now, 'dddd Do MMMM YYYY')); // Sunday, 18th, August, 2019

// comparing dates
const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix:true})); // 7 months ago
