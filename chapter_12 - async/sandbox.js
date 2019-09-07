const getTodos = resource => {
  // take the callback function in as parameter

  return new Promise((resolve, reject) => {
    // function that will do the network request
    const request = new XMLHttpRequest(); // built into the JS language

    request.addEventListener('readystatechange', () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        //takes in a json string and turns it into JS objects that we can use in the code. now we'll get an array of JS objects
        const data = JSON.parse(request.responseText);
        // resolve
        resolve(data);
      } else if (request.readyState === 4) {
        // reject
        reject('error getting resource');
      }
    });

    request.open('GET', resource);
    request.send();
  });
};

//The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value

getTodos('todos/luigi.json') //returning a promise
  .then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('todos/mario.json'); // return makes it so we're returning a promise now so we can add on a .then
  })
  .then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('todos/shaun.json');
  })
  .then(data => {
    console.log('promise 3 resolved:', data);
  })
  .catch(err => {
    console.log('promise rejected:', err);
  });

// promise example - resolved(data back) or rejected(error back)

const getSomething = () => {
  //takes a functions as the parameter. resolve + reject are build into the JS api
  return new Promise((resolve, reject) => {
    // fetch something
    resolve('some data');
    //reject('some error');
  });
};
// invoke function and add on the ".then" method and within it a cb is fired with the data thats received when resolved
// getSomething().then(
//   data => {
//     console.log(data);
//   },
//   err => {
//     console.log(err);
//   }
// );

// same as above but cleaner by chaining the .catch method

// getSomething()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
