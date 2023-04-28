"use strict";
//get your HTML Elements into variable
const firstNameField = document.getElementById("firstName");
const lastNameField = document.getElementById("lastName");
const ageField = document.getElementById("age");
const greetingMessage = document.getElementById("greetingMessage");

//get values out of form inputs
const firstName = firstNameField.value;
const lastName = lastNameField.value;
const age = ageField.value;

//create the message
let message = `Holy cow, ${firstName} ${lastName}!  I can't believe you're already ${age}!`;

//display message
greetingMessage.innerHTML = message;

//display message on click


// function greetingMessage() {
//   const firstNameField = document.getElementById("firstName");
//   const lastNameField = document.getElementById("lastName");
//   const ageField = document.getElementById("age");
//   const greetingMessage = document.getElementById("greetingMessage");
//   const firstName = firstNameField.value;
//   const lastName = lastNameField.value;
//   const age = ageField.value;
//   let message = `Holy cow, ${firstName} ${lastName}!  I can't believe you're already ${age}!`;
//   greetingMessage.innerHTML = message;
// }
