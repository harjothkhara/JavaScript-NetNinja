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
  result.querySelector('span').textContent = `${score}%`; //updating text content inside the span
  result.classList.remove('d-none') //getting a class list of the div container and removing display none class.
});
