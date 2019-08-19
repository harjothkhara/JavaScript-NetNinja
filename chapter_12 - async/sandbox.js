console.log(1);
console.log(2);

// async code in action
setTimeout(() => {
  console.log('callback function fired')
}, 2000); //emulating some kind of network request that takes time to do. image its going out to get data, it takes 2 seconds to do, then when it comes back, its going to fire a callback function. is this going to block the rest of the code? will it go 1, 2 then wait 2 seconds, 3, 4, or will it not block the code? this is asynchronous so it won't block the code.

console.log(3);
console.log(4);

// 1
// 2
// 3
// 4
// callback function fired
