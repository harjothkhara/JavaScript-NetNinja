const getTodos = callback => {
  // take the callback function in as parameter
  const request = new XMLHttpRequest(); // built into the JS language

  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todoss');
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
