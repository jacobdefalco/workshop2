"use strict";
var foodCost = 89.99;
var tax = foodCost * 0.07;
var tip = (foodCost + tax) * 0.15;
var totalDue = foodCost + tax + tip;
console.log("The total due is $" + totalDue.toFixed(2));