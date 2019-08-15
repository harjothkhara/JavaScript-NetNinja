const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
  e.preventDefault();

  // validation
  // gets us the value inside the input field
  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  //test method returns a boolean
  if(usernamePattern.test(username)){
    // feedback good info
    feedback.textContent = 'that username is valid';
  } else {
    // feedback help info
    feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
  }

});
