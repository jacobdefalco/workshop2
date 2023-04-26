"use strict";

var hoursWorked = 45;

var payRate = 12.5;

var overtimePay, grossWeeklyPay, regPay, salary;

if (hoursWorked > 40) {
  regPay = payRate * 40;
  overtimePay = payRate * 1.5 * (hoursWorked - 40);
  grossWeeklyPay = regPay + overtimePay;
  salary = grossWeeklyPay * 52;
} else {
  regPay = payRate * hoursWorked;
  overtimePay = 0;
  grossWeeklyPay = regPay;
  salary = grossWeeklyPay * 52;
}

console.log("Your take home pay is $" + grossWeeklyPay);
console.log("Your yearly salary is $" + salary);
