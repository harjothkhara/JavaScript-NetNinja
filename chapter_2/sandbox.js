// get an element by ID
const title = document.getElementById('page-title')
console.log(title); // <h1 id="page-title">The DOM</h1>

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors); // HTMLCollection - cannot use the forEach() method
console.log(errors[0]);

// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras); // HTMLCollection
console.log(paras[1]) // <p>lorem ipsum</p>
