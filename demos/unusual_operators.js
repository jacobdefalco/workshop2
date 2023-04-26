"use strict";
var count = 0;
console.log(count);
count++;
console.log(count);

var onHand = 10;
var qtyReceived = 6;
// line 10 and 11 are ther same
// onHand = onHand + qtyReceived;
onHand += qtyReceived;
console.log(onHand);
