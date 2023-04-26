"use strict";
var income, taxes, takeHome, withheld;
income = 50000;
taxes = 0.23;
takeHome = income * taxes;
withheld = takeHome / 12;
console.log(withheld.toFixed(2));
