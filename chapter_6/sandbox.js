// references
const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');

// both an enter or a click on the button fires an event, whereas a click event would only fire on a click.
form.addEventListener('submit', e => {
  // default action of a submit button is a page refresh. preventDefault() prevents the default action of an event, so the default action of the submit event is to refresh the page.
  e.preventDefault();
  // when we get the input field from the dom we can use a value property on it to get us the value the user types into the form.
  // 1st way of getting the input field
  //console.log(username.value); // mario
// 2nd gets fields from a form using dot notation and the id
  console.log(form.username.value); // its going to look for the name or id in the html form

});
