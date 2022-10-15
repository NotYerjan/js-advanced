/*
Get the value of all input and label fields.

The output in the console must be:

First Name: Mario
Last Name: Rossi
Age: 25
*/
let formInputs = document.querySelectorAll(".form-input");
for (let formInput of formInputs) {
  console.log(formInput.previousElementSibling.innerHTML, formInput.value);
}
// console.log(formInputs);
