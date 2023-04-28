"use strict";
function greet() {
  const firstNameField = document.getElementById("firstName");
  const lastNameField = document.getElementById("lastName");
  const ageField = document.getElementById("age");
  const greetingMessage = document.getElementById("greetingMessage");
  const firstName = firstNameField.value;
  const lastName = lastNameField.value;
  const age = ageField.value;
  let message = `Holy cow, ${firstName} ${lastName}!  I can't believe you're already ${age}!`;
  greetingMessage.innerText = message;
}
