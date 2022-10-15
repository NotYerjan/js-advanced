/*
Starting from the previous exercise, try to better handle all errors through
the Error class and the catch method. Also add the finally method.
*/
const isLogged = true;

function firstPromise(isLogged) {
  return new Promise((res, rej) => {
    if (isLogged) {
      res(Math.random());
    }
    rej(new Error("You are not logged in!"));
  });
}

function secondPromise(number) {
  return new Promise((res, rej) => {
    if (number > 0.5) {
      res({ name: "John", age: 24 });
    }
    rej(new Error("Ooops!!! Something went wrong."));
  });
}

firstPromise(isLogged)
  .then((res) => secondPromise(res))
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("fetching is finished"));
