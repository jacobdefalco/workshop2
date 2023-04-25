"use strict";
var num1;
num1 = 13;
console.log(num1 ** 2);

var firstName, lastName;
firstName = "Jake";
lastName = "DeFalco";
console.log("Hello, traveler! You must be" + " " + firstName + " " + lastName + "!");

var foodCost = 89.99;
var tax = foodCost * 0.07;
var tip = tax * 0.15;

var totalDue = foodCost + tax + tip;

console.log("The total due is " + "$" + totalDue.toFixed(2));
