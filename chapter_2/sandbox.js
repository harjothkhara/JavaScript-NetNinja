let radius = 10;
const pi = 3.14;
// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way - ok for 1 or 2 variables
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
// console.log(result);

// template string literal way (preferred) - job is to allow us to inject variables directly into the string without coming out of it and having to concatenate + signs like above.
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);


// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;

console.log(html);
