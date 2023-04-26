"use strict";

var greeting = "0";
var time = 16.5;

if (time <= 10) {
  greeting = "Good Morning!";
  console.log(greeting);
} else if (time > 10 && time <= 16) {
  greeting = "Good Day!";
  console.log(greeting);
} else if (time > 16) {
  greeting = "Good Evening!";
  console.log(greeting);
}
