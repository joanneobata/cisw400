/*
 spam.js
   Function List:
   stringReverse
      Used to reverse the order of characters in a text string

*/
function showEMT(ruserName, remServer, emTitle)
{
     var userName=stringReverse(ruserName)
     var emServer=stringReverse(remServer)
     var emLink=userName + "@" + emServer
     document.write("<a href='mailto:" + emLink+" 'title=' "+emTitle+"'>")
     document.write(emLink + "</a>")
}
function stringReverse(textString)
{
     if (!textString) return'' ;
     var revString=""; var i;
     for (i=textString.length-1; i>=0; i-- )
     revString +=textString.charAt(i)
     return revString;
}
