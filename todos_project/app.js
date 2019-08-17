const addForm = document.querySelector('.add'); // form class for entering todos
const list = document.querySelector('.todos'); // ul list class with li's inside for displaying each todo

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
