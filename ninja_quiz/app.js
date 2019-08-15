const correctAnswers = ['B', 'B', 'B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;       // A or B       // A or B      // A or B     // A or B
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers

  // index is the position of the array so we can compare with the correctAnswers array
  userAnswers.forEach((answer, index) => {
    // to check if this answer is equal to the equivalent position in the correctAnswers array, if they are equal(those 2 values) then we'll increase the score, if not we won't.
    if(answer === correctAnswers[index]) {
    // when we fire the first callback function, the answer will be form.q1.value and the index = 0, we're saying is this value e.g answer = A  at position 0 (what the user selected for q1) and correctAnswer = B at that same position of 0. in that case the code block would not fire because the user answer is incorrect. if they were equal then the code block would fire and add 25 points to the score.
    score += 25; // adding 25 for correct answer
    }
  });

  //console.log(score); // 25 because the user selected only 1 correct answer, 50 because the user selected 2 correct answers...

  //show result on page
  scrollTo(0,0) // takes in an x and y coordinate
  result.classList.remove('d-none') //getting a class list of the div container and removing display none class.

  let output = 0; //users score
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`; //updating text content inside the span
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// window object (global object) - all FE javascript objects come from the window object. we don't need to type out window because its automatically inferred b/c its on the global object.
// console.log('hello');
// window.console.log('hello');

//console.log(document.querySelector('form')) // document object is also stored on the window object
//console.log(window.document.querySelector('form')) // same thing

//alert('hello'); stored on the window object we just don't need to infer to it directly
//window.alert('hello');

// takes a callback function and fires it after a certain amount of time
// setTimeout(() => {
//   alert('hello ninjas');
// },3000);

// callback function fires every 1 second over again
// setInterval(() => {
//   console.log('hello')
// }, 1000);

// stopping an interval
// let i = 0;
// const timer = setInterval(() => {
//   console.log('hello')
//   i++;
//   if(i === 5){
//     clearInterval(timer)
//   }
// }, 1000);
