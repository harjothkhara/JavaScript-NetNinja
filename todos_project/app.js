const addForm = document.querySelector('.add'); // form class for entering todos
const list = document.querySelector('.todos'); // ul list class with li's inside for displaying each todo
const search = document.querySelector('.search input');

const generateTemplate = todo => {

    const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
      </li>
    `;
    //appends to html on the page
    list.innerHTML += html
};

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const todo = addForm.add.value.trim(); // take our string and removes any white spaces before or after the string itself.
  console.log(todo); //want to add this to the page/DOM, to the list items

  //check to see whether the user actually has typed a value in so that an empty string isn't added to the ul. if todo.length is a positive integer then its going to evaluate to true; if .length returns 0 and the user hasn't typed anything, it will evaluate to false and then the code block will not run.
  if(todo.length){
    generateTemplate(todo);
    addForm.reset(); //clears the form once a user submits a todo..resets inputs fields inside the form.
  }
});

// listening for the submit event, getting the value the user types in and trimming it, then we're calling the generateTemplate function and inside it we're creating this html template and outputting the todo that the user types within in, and then adding that html template to the list in the html.

// delete todos
list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')) // does the target element contain this specific class
    e.target.parentElement.remove();
});
// we attach an event listener to the ui class, the when we click on an element within the ui, we check whether the target element we clicked has the element with the delete class, if it was then we delete the parent of that trash can, which was the li tag itself. if it wasn't this then this returns false and we do nothing: e.target.classList.contains('delete')

const filteredTodos = (term) => {
Array.from(list.children) // displays all li tags every time we press a key, however they're all HTMLCollections, which means we can't use array methods directly on them, however we can turn this into an array using Array.from()
  .filter((todo) => { //this callback function will be fired for each li. the filter method will return us a new array with the items we want to keep in it. we keep an item in the array by returning true, and we filter an item out by returning false. we want to filter out the ones were we do have a match because i don't want to do anything with them. however, the ones that don't have a match we want to keep in the array and apply a class to each one of them which is going to hide those todos.
    return !todo.textContent.toLowerCase().includes(term); // this is either going to be true or false. this is going to be true if that particular todo contains the term(or what we keyup in to the search bar), so its going to keep that in the array. i want the opposite of this, i.e todos that don't match what we type in. i can reverse, or negate the true statement but adding an exclamation mark in front of it. ! negates a boolean. i.e if something is true its going to turn it to false. so now this new array that we get back from the filter method is going to include only todos which don't include the term - i.e don't match what we typed in to the search bar. if textContent in the todos is uppercase then it will convert to lowercase and still be searchable.
  })
  .forEach((todo) => { // now we cycle through this array using forEach to add the classitem that will hide these todos that don't match the keyed in search terms.
      todo.classList.add('filtered')
    }) // now we're getting all the items in the array that don't include that search term, then for each one of them we're applying a filtered class to it. e.g 'defeat ganon in zelda' receives a filtered class when i type in 'm' into the search field. later in the css we'll make a rule that hides the filtered class.

    //copying above but doing the opposite by getting a new filtered array by the todos that do match and removing that filtered class. in this both scenerios are covered.
    Array.from(list.children) // still getting an array
      .filter((todo) => {
        return todo.textContent.toLowerCase().includes(term) //filtered out the results that do not match cos we're doing nothing with them. if textContent in the todos is uppercase then it will convert to lowercase and still be searchable.
      })
      .forEach((todo) => {
        todo.classList.remove('filtered'); // removing the filtered class to the items in the array that do match so that they're not hidden.
      })
};

// keyup event - indicates which key is pressed
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase(); // what a user types in for every key, if they type in uppercase then it will be changed to lowercase so that they can still search using uppercase.
  filteredTodos(term); // calling this function every time a user pressed a key
});
