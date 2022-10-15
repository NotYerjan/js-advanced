/*
Write a promise. If the variable called number is greater than 10, then it returns a resolve, otherwise it returns a reject.
Then manage the promise with then and catch in case of any reject.

Tips:
In then you have to print the value of number
In catch you have to print the error
*/
const number = 15;

let isGreaterThanTen = new Promise((resolve, reject) => {
  if (number > 10) {
    return resolve(number);
  }
  return reject("ERROR!!! The number is less than or equal to 10");
});

isGreaterThanTen
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
