"use strict";
var numOfTourists, numOfVans, totalCost, costPerPerson;
numOfTourists = 38;
numOfVans = Math.ceil(numOfTourists / 15);

totalCost = 250 * numOfVans;
costPerPerson = totalCost / numOfTourists;
console.log("The total cost is $" + totalCost + " " + "and the cost per person is $" + costPerPerson.toFixed(2));
