//how do we delete something from the DOM
// references:
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

// reference
// const items = document.querySelectorAll('li'); //NodeList

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log('event in LI');
//     e.stopPropagation(); // stops the event bubbling up to the parent.
//     //e.target.style.textDecoration = 'line-through';
//     e.target.remove(); //li tag get removed when we click on them
//     // how to add something to the DOM (already seen addInnerHTML)

//   })
// })

ul.addEventListener('click', e => {
  console.log('event in UL');
}); // event bubbling in action
//event in LI - first the callback function attached to the event listener to the li tag fires
//event in UL - then the callback function associated with the event listener on the ul fires b/c the event bubbles up.

// we can prevent the event on the li tag from bubbling up by using the stopPropagation() method

// event delegation is useful when we need to attach event listeners to many different different elements. event listeners are not attached to new li's that we create (see button section)
ul.addEventListener('click', e => {
  //console.log('event in UL');
  console.log(e); // target > tagName
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
});
// doesn't matter that we have a event listen on the li tags b/c they're going to bubble up to the ul which we do have an event listener attached to. now when we click on the button for the new li's we can see what the li target is for them. and we're doing this through just one event listener on the ul.
