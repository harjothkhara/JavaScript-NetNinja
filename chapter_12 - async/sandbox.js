const getTodos = callback => {
  // take the callback function in as parameter
  const request = new XMLHttpRequest(); // built into the JS language

  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      //takes in a json string and turns it into JS objects that we can use in the code. now we'll get an array of JS objects
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  });

  request.open('GET', 'todos.json');
  request.send();
};

//executes in order
console.log(1);
console.log(2);

//async code - network request starts now and finishes later - non blocking!
//invoking function with a callback function as argument
getTodos((err, data) => {
  console.log('callback fired');
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);

// networks request is finished, callback function is fired and data is returned
