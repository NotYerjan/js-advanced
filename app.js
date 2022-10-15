/*
Get the value of the form-input text input field and print it in the console.
*/
let formInputs = document.querySelectorAll(".form-input");
for (let formInput of formInputs) {
  console.log(formInput.value);
}
// console.log(formInputs);
