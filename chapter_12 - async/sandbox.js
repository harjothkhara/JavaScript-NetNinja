// async & await

const getTodos = async () => {
  const response = await fetch('todos/luigi.json'); // await stops it from assigning a value to the variable until the promise is resolved. once we get the data back we have to use the json method to get that data back.
  // console.log(response);
  const data = await response.json();
  // console.log(data);
  return data;
};
// non blocking
console.log(1);
console.log(2);

getTodos().then(data => {
  console.log('resolved', data);
});
console.log(3);
console.log(4);

// const test = getTodos();
// console.log(test); // returns a promise

// fetch('todos/luigi.json')
//   .then(response => {
//     console.log('resolved', response);
//     return response.json(); //returns a promise
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('rejected', err);
//   });
