"use strict";
var year = 2024;

if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
  console.log("You beautiful man! " + year + " is a leap year!");
} else {
  console.log("YOU LOSER!!! I can't believe you didn't know that " + year + " is NOT a leap year!");
}
