"use strict";
var numOfBoxes, length, width, areaOfRoom;
length = 20;
width = 20;
areaOfRoom = length * width;
numOfBoxes = areaOfRoom / 12;
console.log(Math.ceil(numOfBoxes));