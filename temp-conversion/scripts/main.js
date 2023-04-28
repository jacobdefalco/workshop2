"use strict";
const tempInF = document.getElementById("tempInF");
const tempInC = document.getElementById("tempInC");
const result = document.getElementById("answer");

function convertFtoC() {
  let tempF = tempInF.value;
  let tempC = (tempF - 32) * (5 / 9);
  result.innerText = tempC;
}

function convertCtoF() {
  let tempC = tempInC.value;
  let tempF = tempC * (9 / 5) + 32;
  result.innerText = tempF;
}
