/*
Write a function called `repeatHello`, which will take as parameters a callback.
The callback function will simply print "Hello".
The `repeatHello` function will have to execute the callback function with an interval of 1 second.

Tips:

- The `setInterval` method will be useful
- The callback function must be an arrow function, can you also explain why?
*/
function repeatHello(callback) {
  let id = setInterval(() => callback(), 1000);
  setTimeout(() => clearInterval(id), 5000);
}

// ! I didn't know that the next exercise we would be adding cancelInterval after 5sec so this exercise is the same as the previous
repeatHello(() => console.log("Hello"));
