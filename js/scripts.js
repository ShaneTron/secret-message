var userInput = prompt("Please enter a message: ");

var firstLastLetter = function(string) {
  var firstLetter = string.charAt(0);
  var firstLetter = firstLetter.toUpperCase();
  var numberOfChar = string.length-1;
  var lastLetter = string.charAt(numberOfChar);
  var lastLetter = lastLetter.toUpperCase();
  return firstLetter + lastLetter;
}

//alert(firstLastLetter(userInput));

var switchOrder = function(string) {
  var firstLetter = string.charAt(0);
  var lastLetter = string.charAt(1);
  return lastLetter + firstLetter;
}

//alert(switchOrder(firstLastLetter(userInput)));

var addToString = function(string, addition) {
  return string + addition;
}

//alert(addToString(userInput, switchOrder(firstLastLetter(userInput))));

var numOfLetters = function(string) {
  var numOfChar = string.length-1;
  var halfOfNum = numOfChar/2;
  var newString = string.charAt(halfOfNum);
  return newString + string;
}


var reverseString = function(string) {
  var numOfChar = string.length-1;
  var newString = "";
  for i=numOfChar; i=0; i-=1; {
    var newstring += string.charAt(i);
  }
  return newString;
}

alert(reverseString(userInput));
