// 1. creating a request object. Used to send a request from the browser. We can use it to send a request to get some data.
const request = new XMLHttpRequest() // built into the JS language

//3. track the progress of a request using an event listener. fires everytime there's a state change in the request. statechange means that the request is going through these different phases of the request and there's 4 in total:
request.addEventListener('readystatechange', () => {
  console.log(request, request.readyState); // everytime theres a state change, state the current request is in.. each time we get the request object which has all the different things on it including responseText. And then we have the state 1,2,3,4.The different ready states 0=unsent and open() has called yet, 1=when open has been called 2=after we use the send() method, 3=downloading responseText, 4=operation is complete -> when we want to take that data and do something with it. responseText contains data that we actually receive
  if(request.readyState === 4){
    console.log(request.responseText); // data that we're getting back. responseText is the property that contains the response data.
  }
})

// 2.setting up the request: setting the request method and endpoint we want to make the request to and get data from. now we're telling our request what the type of request is and where to get that data from, where to send that request to.
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// send request:
request.send(); // we can see the json data in the response section of the network tab, under todos, under headers, showing that a GET request was made successfully.

// we don't know in our code when this is complete, how to access the data...in our code we can track the progress of a request using an event listener
