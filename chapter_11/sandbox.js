// reference where we will display our clock
const clock = document.querySelector('.clock');
// function that will update the time on our digital clock every second
const tick = () => {

  const now = new Date();

  const h = now.getHours(); // grabbing hour from the new Date() object
  const m = now.getMinutes();
  const s = now.getSeconds();

  //console.log(h,m,s); --> // now lets output this to the DOM/browser
  // we need to create some html template and inject it into the clock div.

  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;

  clock.innerHTML = html;
// every second we're updating the html, we're overriding it with the new template which is going to contain the new hours, minutes and seconds, every second!
};
// 1000 miliseconds = 1 sec
setInterval(tick, 1000); //console logging the hour every second. calling the tick function every second. now we're logging the minutes in the hour every second. now we're logging the seconds of the minute of the hour every second.
