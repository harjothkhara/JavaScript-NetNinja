const button = document.querySelector('button');

// method - event listener - which actively listens for certain events on this button
// 1st argument is for the whatever event listener, 2nd argument is a callback function which is going to fire when this event listener occurs on this button.
button.addEventListener('click', () => {
  console.log('you clicked me');
});
// <click on button> you clicked me

// attaching an event listeners to each one of the li tags

const items = document.querySelectorAll('li'); //NodeList

items.forEach(item => {
  item.addEventListener('click', () => {
    console.log('item clicked');
  });
});

// ultimately we want to delete the li tag that we click on from our todolist. how do we know which li tag we clicked? when an event occurs in the browser, like a click event, inside this callback function the browser automatically gives us a parameter called e or event. now this contains information about the event that just happened on the webpage.

items.forEach(item => {
  item.addEventListener('click', (e) => {
    //console.log('item clicked');
    console.log(e) //event object created by the browser about the event that just happened. tons of different properties on this object. we want to use the target property which will tell us which element was clicked.
    console.log(e.target); // tell us which li tag we clicked on
    console.log(item); // also tell us which li tag we clicked on but we're not always cycling through something. e.target can be used regardless.

    // delete/change style of each li when we click on it
    e.target.style.textDecoration = 'line-through';
    //also works
    item.style.textDecoration = 'line-through';
  });
});
