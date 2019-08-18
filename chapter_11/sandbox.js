// timestamps
const before = new Date('March 18 2019 3:42:59'); // creating a date sometime in the past, just one date string format. could be stored in a database
const now = new Date(); // get a new date object using the date constructor
//console.log(now.getTime(), before.getTime()); // if we wanted to get the timestamp from that date we would use the getTime() method. // 1566167673219 - number of milliseconds since the Jan 1, 1970.
// 1566168250412 Sun Aug 18 2019 03:42:59 GMT-0700 (Pacific Daylight Time)
// 1566168302884(now) 1566124979000(before)

// if we wanted to compare two dates together we could compare two timestamps together and figure out the time between them, the difference in milliseconds.

const diff = now.getTime() - before.getTime();
console.log(diff); // 13263020942 -> now we can convert to minutes, hours, days...
// maybe we want to see that this blog was created 20 days ago depending on the date...

// difference between timestamps in minutes -
//1000 miliseconds in a second and 60 seconds in a minute
const mins = Math.round(diff / 1000 / 60); // 221050
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days); //221052 3684 154

console.log(`the blog was written ${days} days ago`); // the blog was written 154 days ago

// converting timestamps into date objects
const timestamp = 1675938474990; //between a certain date and Jan 1, 1970 ...e.g now.getTime()
// need to convert into a date object
console.log(new Date(timestamp)) // converts timestamp into the date object
//1675938474990 ---> Thu Feb 09 2023 02:27:54 GMT-0800 (Pacific Standard Time)

const Day = new Date(timestamp)
console.log('getDay:', Day.getDay()); // 4 -> Thursday
