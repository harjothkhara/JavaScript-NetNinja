// reach and grab a reference to the paragraph
const para = document.querySelector('p');
// innerText property gives us access to the inner text of the first p tag.
console.log(para.innerText); // hello, world

// update text to something else, overriding old text
para.innerText = 'ninjas are awesome!'; // ninjas are awesome! -- text inside p tag has changed on the page

// if you wanted to append text i.e add on extra text
para.innerText += 'ninjas are awesome!'; // ninjas are awesome!ninjas are awesome!

// change the text of several items at once
// this query has a nodelist which has the forEach()
const paras = document.querySelectorAll('p');
//console.log(paras);
paras.forEach(para => {
  console.log(para.innerText);
  para.innerText += ' new text';
})

// change the html of something

// grabbing a reference to html
const content = document.querySelector('.content');
console.log(content.innerHTML); // <p>this is the content new text</p> html inside the div class 'content'

//content.innerHTML = '<h2>This is a new H2</h2>'; // p tag element has now been changed and overriden

/// append
content.innerHTML += '<h2>This is a new H2</h2>'; // both elements are now inside the content div

// example: gone out to a dB and got a list or  array of people and we want to output a html template for each one of those people in the array

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`
});
// <p>mario</p>
// <p>luigi</p>
// <p>yoshi</p>
