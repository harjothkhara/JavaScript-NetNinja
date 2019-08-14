//how do we delete something from the DOM

const ul = document.querySelector('ul');
//remove method takes it out of the webpage
//ul.remove();

const button = document.querySelector('button');
// no parameter need since we don't need it on this button
// button.addEventListener('click', () => {
//   ul.innerHTML += '<li>something new</li>'
// }); // this way works but lets look at another way

button.addEventListener('click', () => {
//method on the 'document object' that we can use to create a new html element
  const li = document.createElement('li'); // reference to it
  li.textContent = 'something new to do';
  //insert it into the DOM - 1.append it 2. prepend it
  //ul.append(li); // appends it to the bottom of the parent
  ul.prepend(li); // prepend it the top of the parent
});

const items = document.querySelectorAll('li'); //NodeList

items.forEach(item => {
  item.addEventListener('click', e => {
    //e.target.style.textDecoration = 'line-through';
    e.target.remove(); //li tag get removed when we click on them
    // how to add something to the DOM (already seen addInnerHTML)


  })
})
