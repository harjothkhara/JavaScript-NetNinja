const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  e.preventDefault();

  // validation
  // gets us the value inside the input field
  const username = form.username.value;

  //test method returns a boolean
  if(usernamePattern.test(username)){
    // feedback good info
    feedback.textContent = 'that username is valid';
  } else {
    // feedback help info
    feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
  }

});

// live feedback
form.username.addEventListener('keyup', e => {
  //console.log(e); inside the event object we get info on which keys are being fired by the user
  //console.log(e.target.value);
  if(usernamePattern.test(e.target.value)){
    form.username.setAttribute('class', 'success')
    //console.log('passed');
  } else {
    //console.log('failed');
    form.username.setAttribute('class', 'error')
  }
});
