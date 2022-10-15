/*
Starting from the previous exercise, write a method that recovers the data saved in localStorage and prints them in the console.
*/
const user = {
  id: 1,
  name: "John",
  age: 25,
};

localStorage.setItem("user", JSON.stringify(user));
