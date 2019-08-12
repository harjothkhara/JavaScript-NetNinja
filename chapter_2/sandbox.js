// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
  // create html template
  console.log(person); // first parameter of the callback function returns back each element in the array, we've called the first argument person to represent this.

  // using template string literals to inject variables directly into our html template and then adding each iteration of the html template with each element to the html variable.
  html += `<li style="color:purple">${person}</li>`
})

// for each person we're adding the html template onto the html. each time we fire this callback function for each element, we're adding the html snippet onto the html.

console.log(html); // <li style="color:purple">mario</li><li style="color:purple">luigi</li><li style="color:purple">ryu</li><li style="color:purple">shaun</li><li style="color:purple">chun-li</li>


// now we want to output it to the browser 1.get a reference to an element on the page ---> const ul = document.querySelector('.people');

// places the html inside the ul tag
ul.innerHTML = html;
