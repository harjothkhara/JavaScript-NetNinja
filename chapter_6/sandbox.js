const article = document.querySelector('article');
console.log(article.children) //can't use forEach on HTMLCollection

// converting a HTMLCollection to an array using the Array object built into JS
console.log(Array.from(article.children)); //now we have an array
console.log(article.children); //original value is still there with the HTMLCollection

// parent/child relationship
Array.from(article.children).forEach(child => {
  child.classList.add('article-element');
});

// child/parent relationship (other way round)

const title = document.querySelector('h2'); //what's your parent?

console.log(title.parentElement); // <article></article>

// we go get further up the node tree still and chain these things together
// gives us the parent of the article
console.log(title.parentElement.parentElement); // <body></body>

// sibling relationship - next element next to the h2
console.log(title.nextElementSibling) //<p class="article-element">lorem error ipsum</p>

// what if i want the previous sibling
console.log(title.previousElementSibling) //null - if at the top and a previous element doesn't exist

//chaining
console.log(title.nextElementSibling.parentElement.children); // all the elements inside the article tag -- HTMLCollection
