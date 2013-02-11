/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 2
   Case Problem 2

   Author: JoAnne Obata
   Date:   February 7, 2012

   Function List:
   randInt(lower, upper)
      Used to generate a random integer in the range (lower, upper)

*/
function randInt (lower, upper) {
    var size = upper - lower + 1;
    return Math.floor(Math.random() * size) + lower;
}