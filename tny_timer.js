"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Clint Crockett
   Date:   Jan 9

*/
showClock();
setInterval("showClock()", 1000);

function showClock(){
   var thisDay = new Date();

   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();
// this will pull the data of the html into the JS
   document.getElementById("currentTime").innerHTML = "<span>"+localDate+"</span><span>"+localTime+"</span>";
   
   nextJuly4(thisDay);

   var j4Date = nextJuly4(thisDay);

   j4Date.setHours("21");
// this will calculate how many days to seconds you have untill the fireworks
   var daysLeft = (j4Date - thisDay)/(1000*60*60*24);
   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
// this will say how many days to seconds you have untill the fireworks
   document.getElementById("dLeft").textContent= Math.floor(daysLeft);
   document.getElementById("hLeft").textContent= Math.floor(hrsLeft);
   document.getElementById("mLeft").textContent= Math.floor(minsLeft);
   document.getElementById("sLeft").textContent= Math.ceil(secsLeft);
}


function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}