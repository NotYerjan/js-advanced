/*
Write a first promise that takes as parameter the variable isLogged.
If the variable is true, then we return a random number from the resolve,
otherwise we dispatch an error. We write a second promise that takes a variable
of type number as a parameter. If the input parameter is greater than 0.5,
in the resolve we must return the following data: {name: "John", age: 24},
otherwise we must dispatch an error. Once this is done, try to chain the promises
to eventually return the final object {name: "John", age: 24}
*/
const isLogged = true;

function firstPromise(isLogged) {
  return new Promise((res, rej) => {
    if (isLogged) {
      res(Math.random());
    }
    rej("You are not logged in!");
  });
}

function secondPromise(number) {
  return new Promise((res, rej) => {
    if (number > 0.5) {
      res({ name: "John", age: 24 });
    }
    rej("Ooops!!! Something went wrong.");
  });
}

firstPromise(isLogged)
  .then((res) => secondPromise(res))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
