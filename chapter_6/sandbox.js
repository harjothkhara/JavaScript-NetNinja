const content = document.querySelector('p');

// classList is a property that lists all the classes the p element has.
console.log(content.classList) // DOMTokenList ["error", value: "error"]

// add or remove classes

//taking the p tag and adding a class to it called error by using the add() method
// for this example we removed the p class error beforehand.
content.classList.add('error');
console.log(content.classList); // DOMTokenList ["error", value: "error"]


//removing class use the remove()
content.classList.remove('error');
console.log(content.classList); //DOMTokenList [value: ""]

// adding a new class
//content.classList.add('success');
//console.log(content.classList); // text should now be limegreen

//challenge: query all the elements and cycle through them and give the elements that have error inside the tag a error class, any p tag that has a class of success inside a success class.

// get a reference to all the p tags
const paras = document.querySelectorAll('p');
console.log(paras);

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  }
  if(p.innerText.includes('success')){
    p.classList.add('success');
  }
});

// how to toggle classes
const title = document.querySelector('.title');

// if i use the toggle it will give it a class of test
title.classList.toggle('test'); // toggle class added
title.classList.toggle('test'); // toggle class removed
