// fetch api

fetch('todos/luigi.json')
  .then(response => {
    console.log('resolved', response);
    return response.json(); //returns a promise
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('rejected', err);
  });
