// dates & times
const now = new Date();
console.log(now); // Sun Aug 18 2019 14:35:00 GMT-0700 (Pacific Daylight Time)
console.log(typeof now); // object

// years, months, day, times
console.log('getFullYear:', now.getFullYear()); // getFullYear: 2019
console.log('getMonth:', now.getMonth()); // getMonth: 7 --> getting us the position of the month in some imaginery array of months. b/c JS is 0 based 7 is August.
console.log('getDate:', now.getDate()); //getDate: 18 --> date of the month which the 18th
console.log('getDay:', now.getDay()); //getDay: 0 -> Sunday, 1 -> Monday...
console.log('getHours:', now.getHours()); //getHours: 14 --> 2pm in the afternoon
console.log('getMinutes:', now.getMinutes()); //getMinutes: 47 --> 47 minutes in the afternoon
console.log('getSeconds:', now.getSeconds()); //getSeconds: 23 --> 23 seconds in the afternoon


// timestamps are represented in the date by the number of milliseconds since Jan 1, 1970. This is good because they allow us to compare two dates together.
console.log('timestamp:', now.getTime()) // 1566165165954

//Date strings
console.log(now.toDateString()); // Sun Aug 18 2019
console.log(now.toTimeString()); // 14:54:24 GMT-0700 (Pacific Daylight Time)
console.log(now.toLocaleString()); // 8/18/2019, 2:55:24 PM
