"use strict";

var classification = "0";
var hoursWorked = 90;

if (hoursWorked <= 30) {
  classification = "Freshman";
  console.log(classification);
} else if (hoursWorked > 30 && hoursWorked <= 60) {
  classification = "Sophomore";
  console.log(classification);
} else if (hoursWorked > 60 && hoursWorked <= 90) {
  classification = "Junior";
  console.log(classification);
} else if (hoursWorked > 90) {
  classification = "Senior";
  console.log(classification);
}
