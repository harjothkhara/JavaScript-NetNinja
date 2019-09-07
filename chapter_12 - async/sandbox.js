const getTodos = (resource, callback) => {
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

  request.open('GET', resource);
  request.send();
};

getTodos('todos/luigi.json', (err, data) => {
  console.log(data);
  getTodos('todos/mario.json', (err, data) => {
    console.log(data);
    getTodos('todos/shaun.json', (err, data) => {
      console.log(data);
    });
  });
});
