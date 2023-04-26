"use strict";
var hoursWorked = 80;

var payRate = 12.5;

var overtimePay, grossPay, regPay;

if (hoursWorked > 40) {
  regPay = payRate * 40;
  overtimePay = payRate * 1.5 * (hoursWorked - 40);
  grossPay = regPay + overtimePay;
} else {
  regPay = payRate * hoursWorked;
  overtimePay = 0;
  grossPay = regPay;
}

console.log("Your take home pay is $" + grossPay);