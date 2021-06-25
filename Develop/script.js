// assignment code:

var length;
var lowerCaseInput;
var upperCaseInput;
var numberInput;
var symbolInput;


// arrays containing strings that will be randomized for password making

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];


// using query selector to link button id to script and will be used to make an eventlistener
var button = document.querySelector("#generate");

// making eventlistener with 'click' 

button.addEventListener("click", function () {
  finalPassword = createPassword();
  finalResult();
});
  

// making function to create password

function createPassword () {
  // used parseInt in order to get the input from the user to be converted from a string to a number value
  length = parseInt(prompt("How many characters would you like in the password? must be between 8 and 128"));

  // using a conditional in order to make sure password length is between 8 and 120
  if(length < 8 || length > 120) {
    alert("Password must be between 8 and 120 characters");
  }else {

    lowerCaseChoice = confirm("Would you like lowercase letters in your password? press ok for yes");
    upperCaseChoice = confirm("Would you like uppercase letters in your password? press ok for yes");
    numberChoice = confirm("Would you like numbers in your password? press ok for yes");
    symbolChoice = confirm("Would you like to use symbols in your password? press ok for yes");
  };

  // variable to be used for merging arrays together upon condition met
  var choices;

  // make a conditional that makes it a requirement to atleast pick one criteria before continuing 
  if(!lowerCaseChoice && !upperCaseChoice && !numberChoice && !symbolChoice) {
    choices = alert("At least one criteria must be chosen for password");
  }

  // else if made to to create first set of criteria results
  else if (lowerCaseChoice && upperCaseChoice && numberChoice && symbolChoice) {
    choices = lowercase.concat(uppercase, number, symbol);
  }

  else if (lowerCaseChoice && upperCaseChoice && numberChoice) {
    choices = lowercase.concat(uppercase, number);
  }

  else if (lowerCaseChoice && upperCaseChoice && symbolChoice) {
    choices = lowercase.concat(uppercase, symbol);
  }

  else if (upperCaseChoice && numberChoice && symbolChoice) {
    choices = uppercase.concat(number, symbol);
  }

// criteria result from choosing two options
  else if (lowerCaseChoice && upperCaseChoice) {
    choices = lowercase.concat(uppercase);
  }

  else if (lowerCaseChoice && numberChoice) {
    choices = lowercase.concat(number);
  }

  else if (lowerCaseChoice && symbolChoice) {
    choices = lowercase.concat(symbol);
  }

  else if (upperCaseChoice && numberChoice) {
    choices = uppercase.concat(number);
  }

  else if (upperCaseChoice && symbolChoice) {
    choices = uppercase.concat(symbol);
  }

  else if (numberChoice && symbolChoice) {
    choices = number.concat(symbol);
  }

  // criteria result from choosing only one option
  else if (lowerCaseChoice) {
    choices = lowercase;
  }

  else if (upperCaseChoice) {
    choices = uppercase;
  }

  else if (numberChoice) {
    choices = number;
  }

  else if (symbolChoice) {
    choices = symbol;
  };


  // the for loop is set to the number the user inputs in the first prompt and the random and floor function return a random element from the array
  var result = [];
  for (let i = 0; i < length; i++) {
    var choicesRandom = choices[Math.floor(Math.random() * choices.length)];
    result.unshift(choicesRandom);
  }

  // join function makes all the new elements added into the array into one single string so they dont come out as individual elements in a array
  var finalPassword = result.join("");
  return finalPassword


}

function finalResult () {
  document.querySelector("#password").textContent = finalPassword;
}