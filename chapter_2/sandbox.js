// store our reference in a variable

// using method on document object to query the dom - html model created by the browser as an object "document object". querySelector() method on the document grabs only the first selector type.
// const para = document.querySelector('p');
// console.log(para); // <p>hello, world</p>

// class selector
// const para = document.querySelector('.error');
// console.log(para); // <p class="error">this is an error message</p>

// querying a div class with the name error
// const para = document.querySelector('div.error');
// console.log(para); // <div class="error">this is another error</div>

// grabbing multiple elements

const paras = document.querySelectorAll('p');

paras.forEach(para => {
  console.log(para)
})

//console.log(paras[0]) //<p>hello, world</p>
//console.log(paras[1]) // <p>lorem ipsum</p>

const errors = document.querySelectorAll('.error');

errors.forEach(error => {
  console.log(error)
});

//console.log(errors)
