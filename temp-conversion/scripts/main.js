"use strict";
const tempInF = document.getElementById("tempInF");
const tempInC = document.getElementById("tempInC");
const result = document.getElementById("answer");

//F to C
function convertFtoC() {
  let tempF = tempInF.value;
  let tempC = parseInt((tempF - 32) * (5 / 9));
  result.innerText = `${tempF}°F converted into Celsius would be ${tempC}°C!`;
  if ((tempInF.value = "")) {
  }
  result.innerText = `I'm waiting...`;
}

//C to F
function convertCtoF() {
  let tempC = tempInC.value;
  let tempF = parseInt(tempC * (9 / 5) + 32);
  result.innerText = `${tempC}°C converted into Fahrenheit would be ${tempF}°F!`;
  if ((tempInC.value = "")) {
  }
  result.innerText = `Still waiting...`;
}
