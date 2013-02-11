/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 2
   Case Problem 3

   Author: JoAnne Obata
   Date:   February 8, 2013

   Function List:
   addTime(oldtime, milliseconds)
      Used to add a specified number of milliseconds to a date object named oldtime.
      A new date object with the new time value is returned by the function.

   showTime(time)
      Displays a time value in the format:
      hh:mm AM/PM
*/


function addTime(oldTime, milliSeconds){
var newTime = new Date();
var newValue = oldTime.getTime()+ milliSeconds ;
newTime.setTime(newValue);
return newTime;
}
 
 
function showTime(time){
        var minute=time.getMinutes();
        var hour=time.getHours();
        var second=time.getSeconds();
        var ampm = (hout<12) ? "am" : "pm";
        var hour = (hour >12) ? out-12 : hour;
        var minute = (minue <10) ? "0" + minute : minute;
        return hour +":"+ minute + ":"+ ampm;
}




