// reference to attribute using getAttribute method
const link = document.querySelector('a');

console.log(link.getAttribute('href')) // https://www.google.com/

//change or set an attribute
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'TheNet Ninja Website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class')); // error - class name of p tag
mssg.setAttribute('class', 'success'); // <p class="success">lorem ipsum</p>

//setting a new attribute that doesn't exist yet
mssg.setAttribute('style', 'color: green;') // p class with lorem ipsum is now green. <p class="success" style="color: green;">lorem ipsum</p>
